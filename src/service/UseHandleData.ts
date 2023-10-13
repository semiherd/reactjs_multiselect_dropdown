import { useEffect, useState, useRef } from "react";
import {OptionType,SearchParam} from '../type/type.search'
import {useLocalStorage} from './UseLocalStorage'
import {fetchData} from './FetchData'

const useHandleData = () => {
	const [options,setOptions]= useState<OptionType[]>([])
	const [visibleItems,setVisible]= useState<OptionType[]>([])  
	const [storedValue, setValue]= useLocalStorage('type-selection','')

	const onChangeInput= async (params: SearchParam) => {
		let filtered= options.filter(val => val.id.toLowerCase().includes(params.search.toLowerCase()))
		const list= await handleStored(filtered)	
		setVisible(list)		
	}

	const handleStored= async (arr:OptionType[]):Promise<OptionType[]> => {
		try{
			await Promise.all(storedValue.map((f:OptionType) => {
				const indexNr= arr.map(i=>i.id).indexOf(f.id)
				if(indexNr==-1) arr.push(f)				
			}))
			return arr
		}catch(e){
			return []
		}
	}

	const handleData= async () => {
		try{
			const json: string[]= await fetchData()
			const optionList:OptionType[]= json.map(i => {
				return {
					id:i,label:i,state:false
				}
			})		
			setOptions(optionList)
			setVisible(optionList)
		}catch(e){
			return []
		}
	}

  return {
	  visibleItems,
	  handleData,
	  handleStored,
	  onChangeInput
  }
}

export {useHandleData}
import {ListProps,OptionType} from '../type/type.search'

const useSelection = (props:ListProps) => {
	const {data,setData,selected}= props
	
	async function findItem(arr:OptionType[],elm:OptionType[]):Promise<OptionType[]|[]>{
		try{
			const newArr= arr
			const idList:string[]= await Promise.all(arr.map((item) => item.id))
			await Promise.all(elm.map((i) => {
				const indNr= idList.indexOf(i.id)
				newArr[indNr]= i
			}))
			return newArr
		}catch(e){
			return []
		}
	}

	async function updateData(arrObj:OptionType[],items:OptionType[]):Promise<void>{
		try{
			const list:OptionType[]= await findItem(arrObj,items)
			setData(list)
		}catch(e){
			console.log(e)
		}
	}

	async function handleSelect(params:OptionType):Promise<void>{
		try{
			const arr=[params]
			await updateData(data,arr)
		}catch(e){
			console.log(e)
		}
	}

	return {
		data,
		handleSelect,
		updateData
	}
}

export {useSelection}
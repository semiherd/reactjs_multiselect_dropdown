import React, { useEffect } from 'react'
import { OnChangeBase,OnChangeInputType,OptionType } from '../../type/type.search'
import { useState } from 'react'
import { ListWithButton } from './ListWithButton'
import { OptionList } from './OptionList'
import { Button } from './Button'
import { useLocalStorage } from '../../service/UseLocalStorage'
import './style/Container.css'

const withAutoFilter= <TProps extends OnChangeBase>(
	Component:React.ComponentType<TProps>,
) => {
	return (props:TProps ) => {
		const [searchParam,setSearchParam]= useState<string>('')
		const [dataArr,setDataArr]= useState<OptionType[]|[]>([])
		const [storedValue, setValue]= useLocalStorage(props.id,'')
		const [isVisible,setIsVisible]= useState<Boolean>(false)

		const onChange= (params: OnChangeInputType) => {
			const param={
				search: params.search
			}
			props.onChange(param)
			setSearchParam(params.search)
		}

		async function onButtonClick():Promise<void>{
			try{
				const trueList= dataArr.filter(i=>i.state===true)
				console.log('true list after add clicked:',trueList)
				setValue(trueList)			
			}catch(e){
				console.log(e)
			}
		}

		function handleInputFocus():void{
			setIsVisible((prev) => !prev)
		}
		
		return (
			<div className="container">
				<div onClick={() => handleInputFocus()}>
					<Component {...props} onChange={onChange} />
				</div>
				{isVisible && 
					<ListWithButton
						setIsVisible={setIsVisible}
						listComp={<OptionList 
							selected={storedValue} 
							data={props.data} 
							search={searchParam}
							setData={setDataArr} 
							noResponseText="Sonuç Bulunamadı"
						/>}
						buttonComp={<Button 
							name="options-selected" 
							text="Seçim Tamamla" 
							onClick={() => onButtonClick()} 
						/>}
					/>
				}	
			</div>
		)
	}
}	
export {withAutoFilter}
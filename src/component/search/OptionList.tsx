import { ListProps,OptionType } from '../../type/type.search'
import { Option } from './Option/Option'
import { useMemo, useEffect } from 'react'
import { sortByKey } from '../../service/SortByKey'
import { useSelection } from '../../service/UseSelection'
import './style/Option.css'


export const OptionList= (props:ListProps) => {	
	const {data,updateData,handleSelect}= useSelection(props)
		
	const content = useMemo(() => {
		if(data.length){
			const sortedList= sortByKey({arr:data,key:'state'})
		
			return sortedList?.map((item:OptionType,index:number) => {
				return <Option onClick={handleSelect} key={`${item.id}${item.state}`} search={props.search} data={item} />				
			})
		}
		return <h1 className="option no-data">{props.noResponseText}</h1>
	},[data,props.selected])

	useEffect(() => {
		updateData(data,props.selected)		
	},[data,props.selected])

	return (
		<div className="option-list scrollable-vertical" data-testid="option-list">			
			{content}
		</div>
	)
}
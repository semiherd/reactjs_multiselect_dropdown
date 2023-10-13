import {useEffect,useState} from 'react'
import {SelectBox} from './SelectBox'
import { Highlighted } from './Highlighted'
import {OptionProps} from '../../../type/type.search'
import '../style/Option.css'

const Option= (props:OptionProps):JSX.Element => {
	const {search,data,onClick}= props
	const [selected,setSelected] = useState<boolean>(data.state)
	if(selected) console.log('option rendered',data.id, data.state)

	useEffect(() => {
		onClick({...data,state: selected})		
	},[selected])

	return (
		<div className="option" onClick={() => setSelected((prev) => !prev)} >
			<SelectBox state={selected} />
			<h1>{Highlighted(data.label,search)}</h1>
		</div>
	)
}
export { Option }
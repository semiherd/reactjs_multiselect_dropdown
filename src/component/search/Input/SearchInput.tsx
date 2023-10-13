import { InputProps } from '../../../type/type.search'
import { InputChangeEvent } from '../../../type/type.app'
import { useDebounce } from '../../../service/UseDebounce'
import '../style/SearchInput.css'

const SearchInput= (props:InputProps) => {

	const changeHandler= (e: InputChangeEvent) => {
		try{
			const param= {
				search: e.target.value
			}
			props.onChange(param)
		}catch(e){
			console.log(e)
		}
	}
	const debouncedCb:(e:InputChangeEvent)=>void = useDebounce(changeHandler, 300)
	
	return (
		<div className="search-bar">
			{props.children}
			<input 
				data-testid= "search-input" 
				type= "text"
				onChange= {(event) => debouncedCb(event)} 
				placeholder= "Kategori Ara"
			/>
		</div>
	)
}
export { SearchInput }
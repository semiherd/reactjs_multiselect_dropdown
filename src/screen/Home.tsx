import {useEffect} from 'react'
import {withAutoFilter} from '../component/search/WithAutoFilter'
import {SearchInput} from '../component/search/Input/SearchInput'
import {SearchIcon} from '../component/search/Input/SearchIcon'
import {useHandleData} from '../service/UseHandleData'

const InputWithAutoFilter = withAutoFilter(SearchInput);

const Home = () => {
	const {
		visibleItems,
		handleData,
		onChangeInput
	}= useHandleData()
	
	useEffect(() => {
		handleData()
	},[])
	
	return (
		<div style={{display:'flex',flexDirection:'row'}}>
			<InputWithAutoFilter 
				onChange={onChangeInput}
				data={visibleItems}
				id="type-selection"
			>
				<SearchIcon />
			</InputWithAutoFilter>
		</div>		
	)
}
export default Home
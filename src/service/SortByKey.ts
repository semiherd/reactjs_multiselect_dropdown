import {OptionType} from '../type/type.search'
import {SortByType} from '../type/type.service'

export const sortByKey= (
	params: SortByType<OptionType,boolean|string>
):OptionType[]|[] => {
	
	const {key,arr} = params
	if(!arr.length) return []
	
	return arr?.sort((a, b) => {
		if(a[key]==b[key]){
			return a.id > b.id ? 1 : a.id < b.id ? -1 : 0
		}
		return a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0
	})
}
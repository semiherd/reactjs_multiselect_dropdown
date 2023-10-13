import axios from 'axios'
import {jsonData} from '../type/type.home'

const fetchData= async ():Promise<jsonData['data']['data']> => {
	try{
		const json:jsonData= await axios.get('/data.json')
		return json?.data?.data?.filter((v:string,i:number,a:string[])=> a.indexOf(v)===i)
	}catch(e){
		return []
	}
}
export {fetchData}
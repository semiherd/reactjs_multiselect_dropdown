import { Fragment } from 'react'
import '../style/Option.css'

const Highlighted= (str:string,highlightText:string) => {
	try{
		var splittedStr = str.split(new RegExp(`(${highlightText})`, "gi"));
		return splittedStr.map((part, index) => (
			<Fragment key={str}>
				{part.toLowerCase() === highlightText.toLowerCase() ? (					
					<b style={{ borderRadius: '5px',backgroundColor: "#ADD8E6" }}>{part}</b>
				) : (
					part
				)}
			</Fragment>
		));
	}catch(e){
		return null
	}
}
export { Highlighted } 
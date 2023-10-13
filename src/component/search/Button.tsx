import { ButtonProps } from '../../type/type.search'

const Button = (props:ButtonProps) => {
	
   return (
		<button className="list-button" 
			onClick={() => props.onClick()}>
				{props.text}
		</button>
	)
};
export {Button}

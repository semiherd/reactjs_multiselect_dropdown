import { useRef,MutableRefObject } from "react"
import { ListWithButtonProps } from '../../type/type.search'
import { useClickOut } from '../../service/UseClickOut'

const ListWithButton = (props:ListWithButtonProps) => {
	const { buttonComp, listComp, setIsVisible }= props
	const selectionComponent = useRef() as MutableRefObject<HTMLInputElement>;
	const onclickOut= () => setIsVisible(false)
	useClickOut(selectionComponent,onclickOut)
	const onButtonClick= () => setIsVisible((prev)=>!prev)

	return (
		<div 
			className="list-with-button"
			ref={selectionComponent}
		>
			{listComp}
			<div onClick={() => onButtonClick()}>
				{buttonComp}
			</div>
		</div>
   )
}

export {ListWithButton}

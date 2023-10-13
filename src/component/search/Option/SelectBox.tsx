import { IoMdSquareOutline,IoMdSquare } from "react-icons/io"
import {SelectBoxProps} from '../../../type/type.search'

const SelectBox= (props:SelectBoxProps) => {
	const {state}= props
	return (
		<span className="select-box">
			{state? <IoMdSquare  /> : <IoMdSquareOutline  />}
		</span>
	)
}

export { SelectBox }


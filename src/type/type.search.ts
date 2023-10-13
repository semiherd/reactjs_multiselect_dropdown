
import React from 'react'
import { ReactChildren } from './type.app'
import {KeysOfT} from './type.app'

export type ButtonProps={
	text: string
	name: string
	onClick: () => void
}

export type Base= SearchParam & {
	selected: OptionType[]
	noResponseText: string
	setData: React.Dispatch<React.SetStateAction<OptionType[]|[]>>
}

export type ListWithButtonProps={
	listComp: React.ReactNode,
	buttonComp: React.ReactNode
	setIsVisible: React.Dispatch<React.SetStateAction<Boolean>>
}

export type OnChangeBase= ReactChildren & {
	onChange: (params: SearchParam) => void
	data: OptionType[]
	id: string
}

export type SearchParam= {
	search: string
}

export type InputProps= ReactChildren & {
	onChange: (param: SearchParam) => void
}

export type OnChangeInputType= SearchParam & {
	key: KeysOfT<OptionType,string>
}

export type OptionType={
	id: string,
	label: string,
	state: boolean
}

export type OptionProps= SearchParam & {
	data: OptionType
	onClick: (params:OptionType) => void
}

export type SelectBoxProps={
	state: boolean
}

export type NoData= Base & {
	data: []
}

export type SearchType= Base & {
	data: OptionType[]
}

export type ListProps= NoData | SearchType


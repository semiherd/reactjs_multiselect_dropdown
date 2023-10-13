import React from 'react'

export type ReactChildren= {
	children: React.ReactNode
}
export type InputChangeEvent= React.ChangeEvent<HTMLInputElement>

export type KeysOfT<T,TCondition> = {
	[K in keyof T]: T[K] extends TCondition
		? K
		: never
}[keyof T];
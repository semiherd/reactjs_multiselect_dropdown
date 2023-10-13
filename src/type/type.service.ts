import {KeysOfT} from './type.app'

export type SortByType<T,TypeofKey>=  {
	arr: T[]
	key: KeysOfT<T,TypeofKey>
}
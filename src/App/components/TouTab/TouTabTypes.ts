import { ItemData, ItemDataString } from '../../../UIKit/CustomList/CustomListTypes'

/** Элемент списка ТОУ */
export interface TouItem {
	/** Наименование */
	name: ItemDataString
	/** Вид медицинской помощи */
	risk: ItemData
	/** Уровень ТОУ */
	level: ItemData
	/** Возрастная категория */
	age: ItemDataString
}

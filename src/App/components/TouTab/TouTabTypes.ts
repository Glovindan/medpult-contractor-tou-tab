import { ItemData, ItemDataString } from '../../../UIKit/CustomList/CustomListTypes'

/** Элемент списка ТОУ */
export interface TouItem {
	/** Наименование */
	name: ItemData<string>
	/** Вид медицинской помощи */
	risk: ItemData<string>
	/** Уровень ТОУ */
	level: ItemData<string>
	/** Возрастная категория */
	age: ItemDataString
}

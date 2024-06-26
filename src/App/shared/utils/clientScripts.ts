import {
	FetchData,
	FetchItem,
	ItemData,
	ItemDataString,
} from '../../../UIKit/CustomList/CustomListTypes'
import { TouItem } from '../../components/TouTab/TouTabTypes'

/** Заглушка ожидания ответа сервера */
function randomDelay() {
	const delay = Math.random() * 1000
	return new Promise((resolve) => {
		setTimeout(resolve, delay)
	})
}

// /** Получение контактных лиц */
// async function getContacts(): Promise<FetchData<ContactItem>> {
// 	await randomDelay()
// 	const items: FetchItem<ContactItem>[] = [
// 		{
// 			id: 'test',
// 			data: {
// 				comment: new ItemDataString('sfsaf'),
// 				email: new ItemDataString('sfsaf'),
// 				fullname: new ItemDataString('sfsaf'),
// 				phone: new ItemDataString('sfsaf'),
// 				position: new ItemDataString('sfsaf'),
// 				type: new ItemDataString('sfsaf'),
// 			},
// 		},
// 		{
// 			id: 'test',
// 			data: {
// 				comment: new ItemDataString('sfsaf'),
// 				email: new ItemDataString('sfsaf'),
// 				fullname: new ItemDataString('sfsaf'),
// 				phone: new ItemDataString('sfsaf'),
// 				position: new ItemDataString('sfsaf'),
// 				type: new ItemDataString('sfsaf'),
// 			},
// 		},
// 		{
// 			id: 'test',
// 			data: {
// 				comment: new ItemDataString('sfsaf'),
// 				email: new ItemDataString('sfsaf'),
// 				fullname: new ItemDataString('sfsaf'),
// 				phone: new ItemDataString('sfsaf'),
// 				position: new ItemDataString('sfsaf'),
// 				type: new ItemDataString('sfsaf'),
// 			},
// 		},
// 		{
// 			id: 'test',
// 			data: {
// 				comment: new ItemDataString('sfsaf'),
// 				email: new ItemDataString('sfsaf'),
// 				fullname: new ItemDataString('sfsaf'),
// 				phone: new ItemDataString('sfsaf'),
// 				position: new ItemDataString('sfsaf'),
// 				type: new ItemDataString('sfsaf'),
// 			},
// 		},
// 	]

// 	return {
// 		items: items,
// 		hasMore: false,
// 	}
// }

/** Получение ТОУ */
async function getTou(): Promise<FetchData<TouItem>> {
	await randomDelay()
	const items: FetchItem<TouItem>[] = [
		{
			id: 'test',
			data: {
				age: new ItemDataString('afasfasfasfasf'),
				name: new ItemData({ value: 'sfsaf', info: 'sfsaf' }),
				risk: new ItemData({ value: 'sfsaf', info: 'sfsaf' }),
				level: new ItemData({ value: 'sfsaf', info: 'sfsaf' }),
			},
		},
		{
			id: 'test',
			data: {
				age: new ItemDataString('sfsaf'),
				name: new ItemData({ value: 'sfsaf', info: 'sfsaf' }),
				risk: new ItemData({ value: 'sfsaf', info: 'sfsaf' }),
				level: new ItemData({ value: 'sfsaf', info: 'sfsaf' }),
			},
		},
		{
			id: 'test',
			data: {
				age: new ItemDataString('sfsaf'),
				name: new ItemData({ value: 'sfsaf', info: 'sfsaf' }),
				risk: new ItemData({ value: 'sfsaf', info: 'sfsaf' }),
				level: new ItemData({ value: 'sfsaf', info: 'sfsaf' }),
			},
		},
		{
			id: 'test',
			data: {
				age: new ItemDataString('sfsaf'),
				name: new ItemData({ value: 'sfsaf', info: 'sfsaf' }),
				risk: new ItemData({ value: 'sfsaf', info: 'sfsaf' }),
				level: new ItemData({ value: 'sfsaf', info: 'sfsaf' }),
			},
		},
	]

	return {
		items: items,
		hasMore: false,
	}
}

/** Получение ссылки на элемент ТОУ в ЛПУ */
function getTouLink(data: ItemData): string {
	console.log(data)
	return '#test'
}

export default { getTou, getTouLink }

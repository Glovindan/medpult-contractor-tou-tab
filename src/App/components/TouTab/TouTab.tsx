import React from 'react';
import { ListColumnData } from '../../../UIKit/CustomList/CustomListTypes';
import CustomList from '../../../UIKit/CustomList/CustomList';
import { TouItem } from './TouTabTypes';
import Scripts from '../../shared/utils/clientScripts';

interface TouTabProps {
}

/** Вкладка Контактные лица */
function TouTab() {
	/** Колонки списка */
	const columns = [
		new ListColumnData({ name: "Наименование", code: "name", fr: 1, isSortable: true }),
		new ListColumnData({ name: "Вид медицинской помощи", code: "risk", fr: 1, isSortable: true }),
		new ListColumnData({ name: "Уровень ТОУ", code: "level", fr: 1, isSortable: true }),
		new ListColumnData({ name: "Возрастная категория", code: "age", fr: 1, isSortable: true }),
	]

	const getDataHandler = async () => {
		const data = await Scripts.getTou();
		console.log(data);
		return data
	}

	return (
		<div className="tou-tab">
			{/* Табличка */}
			<CustomList<null, TouItem> columnsSettings={columns} setSearchHandler={() => { }} getDataHandler={getDataHandler} isScrollable={false} />
		</div>
	)
}

export default TouTab

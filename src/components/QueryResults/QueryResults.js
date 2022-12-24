import React, { useEffect, useState } from 'react';
import DriverCSS from '../../pages/Drivers/Driver.module.css';
import QueryResultsCSS from './QueryResults.module.css';

const QueryResults = () => {
	const [drivers, setDrivers] = useState([]);
	const [count, setCount] = useState(1);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = () => {
		fetch(`http://ergast.com/api/f1/drivers.json?limit=30&offset=30`)
			.then((res) => res.json())
			.then((data) => {
				setDrivers(data.MRData);
			});
	};

	console.log(drivers);

	return (
		<div className={QueryResultsCSS.wrapper}>
			<h1>Query Results</h1>
			<div className={QueryResultsCSS.container}>
				<table className="w3-table-all">
					<thead className="w3-light-grey">
						<tr>
							<th className={DriverCSS.grey}>Series</th>
							<th className={DriverCSS.grey}>Page</th>
							<th className={DriverCSS.grey}>Results</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{drivers.series}</td>
							<td>{count} of 29 </td>
							<td>{drivers.total}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default QueryResults;

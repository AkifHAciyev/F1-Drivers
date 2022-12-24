import React, { useEffect, useState } from 'react';
import DriverCSS from './Driver.module.css';

const Drivers = () => {
	const [drivers, setDrivers] = useState([]);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = () => {
		fetch(`http://ergast.com/api/f1/drivers.json?limit=30&offset=30`)
			.then((res) => res.json())
			.then((data) => {
				setDrivers(data.MRData.DriverTable.Drivers);
			});
	};

	return (
		<div className={DriverCSS.wrapper}>
			<table className="w3-table-all">
				<thead className="w3-light-grey">
					<tr>
						<th className={DriverCSS.grey}>Driver Name</th>
						<th className={DriverCSS.grey}>Permanent Number</th>
						<th className={DriverCSS.grey}>Nationality</th>
						<th className={DriverCSS.grey}>DOB</th>
						<th className={DriverCSS.grey}>Information</th>
					</tr>
				</thead>
				<tbody>
					{drivers.map((data) => {
						return (
							<tr key={data.driverId}>
								<td>{data?.givenName}</td>
								<td className={data.dateOfBirth ? DriverCSS.red : DriverCSS.green}>{data.permanentNumbe} </td>
								<td>{data.nationality}</td>
								<td>{data.dateOfBirth}</td>
								<td>
									<a href={data.url} target="_blank">
										Biography
									</a>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Drivers;

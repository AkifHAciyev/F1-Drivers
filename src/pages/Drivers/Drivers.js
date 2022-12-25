import React, { useEffect, useState } from 'react';
import QueryResults from '../../components/QueryResults/QueryResults';
import DriverCSS from './Driver.module.css';
import Pagination from '../../components/Pagination/Pagination';

const Drivers = () => {
	const [drivers, setDrivers] = useState([]);
	const [addFavourite, setAddFavourite] = useState([]);

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

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const handleAddFavourite = (driver) => {
		const newFavouriteList = () => {
			if (addFavourite.includes(driver)) {
				return addFavourite.filter((e) => e !== driver);
			} else {
				return [...addFavourite, driver];
			}
		};
		setAddFavourite(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<>
			<QueryResults />
			<div className={DriverCSS.wrapper}>
				<table className="w3-table-all">
					<thead className="w3-light-grey">
						<tr>
							<th className={DriverCSS.grey}>Driver Name</th>
							<th className={DriverCSS.grey}>Permanent Number</th>
							<th className={DriverCSS.grey}>Nationality</th>
							<th className={DriverCSS.grey}>DOB</th>
							<th className={DriverCSS.grey}>Information</th>
							<th className={DriverCSS.grey}>Add to favorite</th>
						</tr>
					</thead>
					<tbody>
						{drivers.map((driver) => {
							return (
								<tr key={driver.driverId}>
									<td>{driver?.givenName}</td>
									<td className={driver.dateOfBirth ? DriverCSS.red : DriverCSS.green}>{driver.permanentNumbe} </td>
									<td>{driver.nationality}</td>
									<td>{driver.dateOfBirth}</td>
									<td>
										<a href={driver.url} target="_blank" rel="noreferrer">
											Biography
										</a>
									</td>
									<td>
										<button>
											<i
												onClick={() => handleAddFavourite(drivers)}
												className={addFavourite.includes(drivers) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}
											></i>
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<Pagination />
		</>
	);
};

export default Drivers;

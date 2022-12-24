import './App.css';
import Header from './components/Header/Header';
import Pagination from './components/Pagination/Pagination';
import QueryResults from './components/QueryResults/QueryResults';
import Drivers from './pages/Drivers/Drivers';

function App() {
	return (
		<div className="App">
			<Header />
			<QueryResults />
			<Drivers />
			<Pagination />
		</div>
	);
}

export default App;

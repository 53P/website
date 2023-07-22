import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import How from './pages/How';
import Work from './pages/Work';

function App(): JSX.Element {
	return (
		<>
			<Sidebar/>
			<Routes>
				<Route path='/how' element={<How />} />
				<Route path='/work' element={<Work />} />
			</Routes>
		</>
	);
}

export default App;

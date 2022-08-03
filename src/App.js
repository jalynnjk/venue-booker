import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home_page/HomePage';
import BookingPortal from './components/booking_portal/BookingPortal';
import OwnerPortal from './components/owner_portal/OwnerPortal';
import BookingConfirmation from './components/booking_confirmation/BookingConfirmation';
import { DataContext } from './dataContext';
import { useState } from 'react';

function App() {
  const [requestID, setRequestID] = useState('');
  const [weddingDate, setWeddingDate] = useState()

	return (
		<DataContext.Provider className='App' value={{requestID, setRequestID, weddingDate, setWeddingDate}}>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/booking-portal/*' element={<BookingPortal />} />
				<Route path='/owner-portal' element={<OwnerPortal />} />
					<Route
						path='/booking-confirmation'
						element={<BookingConfirmation />}
						// requestID={requestID}
					/>
			</Routes>
		</DataContext.Provider>
	);
}

export default App;

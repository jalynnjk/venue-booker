import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import HomePage from './components/home_page/HomePage';
import BookingPortal from './components/booking_portal/BookingPortal';
import OwnerPortal from './components/owner_portal/OwnerPortal';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/booking-request' element={<BookingPortal/>}/>
        <Route path='/owner-portal' element={<OwnerPortal />} />
      </Routes>
    </div>
  );
}

export default App;

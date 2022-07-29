import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import HomePage from './components/home_page/HomePage';
import BookingPortal from './components/booking_portal/BookingPortal';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/booking-request' element={<BookingPortal/>}/>
      </Routes>
    </div>
  );
}

export default App;

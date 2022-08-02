import './booking_portal.css';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../dataContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import './calendar.css';
import moment from 'moment';

function BookingPortal(props) {
	const [bookingRequest, setBookingRequest] = useState();
	const [dateState, setDateState] = useState(new Date());
	const [acceptedRequests, setAcceptedRequests] = useState([]);
	const [bookedDays, setBookedDays] = useState([]);
	const { requestID, setRequestID } = useContext(DataContext);
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		setBookingRequest({
			client_name: event.currentTarget['name-field'].value,
			client_email: event.currentTarget['email-field'].value,
			wedding_date: event.currentTarget['wedding-date'].value,
			number_guests: parseInt(event.currentTarget['guest-count'].value),
			budget: parseInt(event.currentTarget['budget'].value),
		});
	}

	const sendPost = async () => {
		try {
			const response = await axios.post(
				'https://thechapel-backend.herokuapp.com/api/booking_requests',
				{ ...bookingRequest }
			);
			setRequestID(response.data.id);
		} catch (error) {
			console.log(error);
		}
	};

	const getBookedDays = async () => {
		try {
			const response = await axios.get(
				'https://thechapel-backend.herokuapp.com/api/accepted_requests'
			);
			setAcceptedRequests(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	function handleClickDay(event) {
		if (bookedDays.includes(moment(event).format('YYYY-MM-DD'))) {
			console.log('This date has been booked');
			console.log('event:', event);
		}
	}

	useEffect(() => {
		getBookedDays();
	}, []);
	useEffect(() => {
		let tempBookedDays = [];
		acceptedRequests.forEach((request) => {
			tempBookedDays.push(request.wedding_date);
		});
		setBookedDays(tempBookedDays);
	}, [acceptedRequests]);

	function handleTileDisable({ activeStartDate, date, view }) {
		return date.getDay() === 0;
	}

	// useEffect(() => {
	//     handleTileDisable()
	// }, [bookedDays])

	useEffect(() => {
		if (bookingRequest) {
			sendPost();
			navigate('/booking-confirmation');
		}
	}, [bookingRequest]);

	const changeDate = (event) => {
		setDateState(event);
	};
	const today = new Date();
	return (
		<div className='booking-portal-container'>
			<header className='booking-title'>
				Book your day at <span className='the-chapel'>The Chapel</span>
			</header>
			<Calendar
				value={dateState}
				onChange={changeDate}
				className='calendar'
				onClickDay={handleClickDay}
				tileDisabled={({ today, date }) => {
					return bookedDays.some((bookedDay) => {
						return (
							date.getFullYear() === parseInt(bookedDay.substring(0, 4)) &&
							date.getMonth() === parseInt(bookedDay.substring(5, 7)) - 1 &&
							date.getDate() === parseInt(bookedDay.substring(8))
						);
					});
				}}
			/>
			<form onSubmit={handleSubmit} className='booking-request'>
				<label htmlFor='name-field' className='label'>
					Name
				</label>
				<input
					className='input'
					type='text'
					placeholder='name'
					required
					id='name-field'
				/>
				<label htmlFor='email-field' className='label'>
					Email
				</label>
				<input
					className='input'
					type='text'
					required
					id='email-field'
					placeholder='email'
				/>
				<label htmlFor='wedding-date' className='label'>
					Wedding Date
				</label>
				<input
					className='input'
					type='text'
					required
					id='wedding-date'
					placeholder={moment(dateState).format('MM/DD/YYYY')}
				/>
				<label htmlFor='budget' className='label'>
					Budget
				</label>
				<input
					className='input'
					type='number'
					min={0}
					id='budget'
					required
					placeholder='0'
				/>
				<label htmlFor='guest-count' className='label'>
					Number of Guests
				</label>
				<input
					className='input'
					type='number'
					min={30}
					max={150}
					placeholder='30'
					required
					id='guest-count'
				/>
				<input type='submit' className='submit-btn' />
			</form>
		</div>
	);
}

export default BookingPortal;

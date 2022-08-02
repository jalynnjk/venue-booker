import './booking_portal.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import './calendar.css';
import moment from 'moment';

function BookingPortal(props) {
	const [bookingRequest, setBookingRequest] = useState();
	const [dateState, setDateState] = useState(new Date());
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
			console.log('success!');
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (bookingRequest) {
			sendPost();
			navigate('/');
		}
	}, [bookingRequest]);

	const changeDate = (event) => {
		setDateState(event);
	};

	return (
		<div className='booking-portal-container'>
			<header className='booking-title'>
				Book your day at <span className='the-chapel'>The Chapel</span>
			</header>
			<Calendar value={dateState} onChange={changeDate} className='calendar' />
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

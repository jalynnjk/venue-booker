import './booking_portal.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BookingPortal(props) {
	const [bookingRequest, setBookingRequest] = useState();
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		setBookingRequest({
			client_name: event.currentTarget['name-field'].value,
			client_email: event.currentTarget['email-field'].value,
			wedding_date: event.currentTarget['wedding-date'].value,
			number_guests: parseInt(event.currentTarget['guest-count'].value),
			budget: parseInt(event.currentTarget['budget'].value),
			ceremony_location: event.currentTarget['ceremony-site-field'].value,
			reception_location: event.currentTarget['reception-site-field'].value,
		});
	}

	const sendPost = async () => {
		try {
			const response = await axios.post(
				'http://localhost:8000/api/booking_requests',
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

	return (
		<div>
			<header className='booking-title'>Booking Request</header>
			{/* <p>
				Placing a booking deposit guarantees your date will be held for fifteen
				days while you consider the specifics of your wedding plans with The
				Chapel.
			</p>
			<p>
				After the fifteen days, you will need to pay your total wedding
				contribution in order for the reservation to be confirmed.
			</p> */}
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
				<input className='input' type='date' required id='wedding-date' />
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
				<label htmlFor='ceremony-site-field' className='label'>
					Ceremony Site
				</label>
				<input
					className='input'
					type='text'
					required
					id='ceremony-site-field'
					placeholder='glass chapel'
				/>
				<label htmlFor='reception-site-field' className='label'>
					Reception Site
				</label>
				<input
					className='input'
					type='text'
					required
					id='reception-site-field'
					placeholder='ballroom'
				/>
				<input type='submit' value='Submit' className='submit-btn' />
			</form>
		</div>
	);
}

export default BookingPortal;

import './booking_portal.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function BookingPortal(props) {
	const [bookingRequest, setBookingRequest] = useState();

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
            console.log('success!')
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (bookingRequest) {
        sendPost();
        }
	}, [bookingRequest]);

	return (
		<div>
			<header>Booking Request</header>
			<p>
				Placing a booking deposit guarantees your date will be held for fifteen
				days while you consider the specifics of your wedding plans with The
				Chapel.
			</p>
			<p>
				After the fifteen days, you will need to pay your total wedding
				contribution in order for the reservation to be confirmed.
			</p>
			<form onSubmit={handleSubmit} className='booking-request'>
				<label htmlFor='name-field'>Name</label>
				<input type='text' placeholder='name' required id='name-field' />
				<label htmlFor='email-field'>Email</label>
				<input type='text' required id='email-field' placeholder='email' />
				<label htmlFor='wedding-date'>Wedding Date</label>
				<input type='date' required id='wedding-date' />
				<label htmlFor='budget'>Budget</label>
				<input type='number' min={0} id='budget' required placeholder='0' />
				<label htmlFor='guest-count'>Number of Guests</label>
				<input
					type='number'
					min={0}
					placeholder='0'
					required
					id='guest-count'
				/>
				<label htmlFor='ceremony-site-field'>Ceremony Site</label>
				<input
					type='text'
					required
					id='ceremony-site-field'
					placeholder='glass chapel'
				/>
				<label htmlFor='reception-site-field'>Reception Site</label>
				<input
					type='text'
					required
					id='reception-site-field'
					placeholder='ballroom'
				/>
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
}

export default BookingPortal;

import './booking_confirmation.css';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../../dataContext';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

function BookingConfirmation() {
	const { requestID, setRequestID } = useContext(DataContext);
	const [bookingDetails, setBookingDetails] = useState([]);
	const [bookingDetailsConf, setBookingDetailsConf] = useState();
	const navigate = useNavigate();

	const getBookingDetails = async () => {
		try {
			const response = await axios.get(
				`https://thechapel-backend.herokuapp.com/api/booking_requests/${requestID}`
			);
			console.log(response.data);
			setBookingDetails(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
        if (requestID) {
		getBookingDetails();
        }
	}, [requestID]);

	async function submitBookingConf() {
		try {
			const response = await axios.put(
				`https://thechapel-backend.herokuapp.com/api/booking_requests/${requestID}`,
				{ ...bookingDetailsConf }
			);
			console.log('success');
		} catch (error) {
			console.log(error);
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		setBookingDetailsConf({
			client_name: event.currentTarget['name-field'].value,
			client_email: event.currentTarget['email-field'].value,
			wedding_date: event.currentTarget['wedding-date'].value,
			number_guests: parseInt(event.currentTarget['guest-count'].value),
			budget: parseInt(event.currentTarget['budget'].value),
		});
	}

	useEffect(() => {
		if (bookingDetailsConf) {
			submitBookingConf();
			navigate('/');
		}
	}, [bookingDetailsConf]);

	return (
		<div className='booking-conf'>
			<h1 className='h1'>Your first step down the aisle!</h1>
			<h2 className='h2'>
				We have received your booking request and our staff are looking over
				your details, we will let you know if we think The Chapel will be a good
				fit for your big day.
			</h2>
			<h3 className='h3'>Please confirm the details of your request below</h3>
			<div className='conf-form-container'>
				<form className='conf-form' onSubmit={handleSubmit}>
					<label className='conf-label' htmlFor='name-field'>
						Name
					</label>
					<input
						defaultValue={bookingDetails.client_name}
						className='input'
						id='name-field'
						required
					/>
					<label className='conf-label' htmlFor='email-field'>
						Email
					</label>
					<input
						defaultValue={bookingDetails.client_email}
						className='input'
						id='email-field'
						required
					/>
					<label className='conf-label' htmlFor='wedding-date'>
						Wedding Date
					</label>
					<input
						defaultValue={moment(bookingDetails.wedding_date).format(
							'MM/DD/YYYY'
						)}
						className='input'
						id='wedding-date'
						required
					/>
					<label className='conf-label' htmlFor='budget'>
						Budget
					</label>
					<input
						defaultValue={bookingDetails.budget}
						className='input'
						id='budget'
						required
					/>
					<label className='conf-label' htmlFor='guest-count'>
						Number of Guests
					</label>
					<input
						defaultValue={bookingDetails.number_guests}
						className='input'
						id='guest-count'
						required
					/>
					<button type='submit' className='confirm-btn'>
						Confirm
					</button>
				</form>
			</div>
		</div>
	);
}

export default BookingConfirmation;

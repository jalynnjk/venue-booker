import './booking_confirmation.css';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../../dataContext';
import moment from 'moment';

function BookingConfirmation() {
	const { requestID, setRequestID } = useContext(DataContext);
	const [bookingDetails, setBookingDetails] = useState([]);

	const getBookingDetails = async () => {
		try {
			const response = await axios.get(
				`https://thechapel-backend.herokuapp.com/api/booking_requests/15`
			);
			console.log(response.data);
			setBookingDetails(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getBookingDetails();
	}, []);


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
				<form className='conf-form'>
                    <label className='conf-label' htmlFor='name'>Name</label>
					<input defaultValue={bookingDetails.client_name} className='input' id='name' />
                    <label className='conf-label' htmlFor='email'>Email</label>
					<input defaultValue={bookingDetails.client_email} className='input' id='email'/>
                    <label className='conf-label' htmlFor='date'>Wedding Date</label>
					<input defaultValue={moment(bookingDetails.wedding_date).format('MM/DD/YYYY')} className='input' id='date'/>
                    <label className='conf-label' htmlFor='budget'>Budget</label>
					<input defaultValue={bookingDetails.budget} className='input' id='budget'/>
                    <label className='conf-label' htmlFor='guests'>Number of Guests</label>
					<input
						defaultValue={bookingDetails.number_guests}
						className='input'
                        id='guest'
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

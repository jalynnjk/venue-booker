import './booking_confirmation.css';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../../dataContext';

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
			<h1>Your first step down the aisle!</h1>
			<h2>
				We have received your booking request and our staff are looking over
				your details, we will let you know if we think The Chapel will be a good
				fit for your big day.
			</h2>
			<h3>Please confirm the details of your request below</h3>
			<div>
				<ul>
					<li>{bookingDetails.client_name}</li>
					<li>{bookingDetails.client_email}</li>
					<li>{bookingDetails.wedding_date}</li>
					<li>{bookingDetails.budget}</li>
					<li>{bookingDetails.number_guests}</li>
				</ul>
			</div>
		</div>
	);
}

export default BookingConfirmation;

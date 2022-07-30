import axios from 'axios';
import { useEffect, useState } from 'react';

function OwnerPortal(props) {
	const [bookingRequests, setBookingRequests] = useState([]);
	async function retrieveBookingRequests() {
		try {
			const response = await axios.get(
				'http://localhost:8000/api/booking_requests'
			);
            setBookingRequests(response)
            console.log(bookingRequests)
		} catch (error) {
            console.log(error)
        }
	}
	useEffect(() => {
		retrieveBookingRequests();
	}, []);
	return <div></div>;
}

export default OwnerPortal;

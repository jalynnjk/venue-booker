import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function OwnerPortal(props) {
	const [bookingRequests, setBookingRequests] = useState([]);

	async function retrieveBookingRequests() {
		try {
			const response = await axios.get(
				'http://localhost:8000/api/booking_requests'
			);
			setBookingRequests(response.data);
			console.log(bookingRequests);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		retrieveBookingRequests();
	}, []);

	return  (
		<main>
            {bookingRequests ? bookingRequests.map((request, index) => {
                return (
                    <Card>
                        <Card.Title>{request.client_name}</Card.Title>
                    </Card>
                )
            }) : (<div>Loading requests...</div>)
        }
		</main>

    )}

export default OwnerPortal;

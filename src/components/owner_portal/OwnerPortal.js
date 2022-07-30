import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

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

	return (
		<main>
			{bookingRequests ? (
				bookingRequests.map((request, index) => {
					return (
						<Card key={index}>
							<Card.Title>{request.client_name}</Card.Title>
							<Card.Subtitle>{request.client_email}</Card.Subtitle>
							<Card.Text>{request.wedding_date}</Card.Text>
							<Card.Text>{request.number_guests}</Card.Text>
							<Card.Text>{request.budget}</Card.Text>
							<Card.Text>{request.ceremony_location}</Card.Text>
							<Card.Text>{request.reception_location}</Card.Text>
                            <Button>Accept</Button>
                            <Button>Decline</Button>
						</Card>
					);
				})
			) : (
				<div>Loading requests...</div>
			)}
		</main>
	);
}

export default OwnerPortal;

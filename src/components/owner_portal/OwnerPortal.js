import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function OwnerPortal(props) {
	const [bookingRequests, setBookingRequests] = useState([]);
	const [updatedBookingRequests, setUpdatedBookingRequests] = useState([]);
	const [targetRequest, setTargetRequest] = useState([]);
	const [handleRequest, setHandleRequest] = useState();

	async function retrieveBookingRequests() {
		try {
			const response = await axios.get(
				'https://thechapel-backend.herokuapp.com/api/booking_requests'
			);
			setBookingRequests(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		retrieveBookingRequests();
	}, []);

	async function handleAcceptRequest() {
		try {
			const addToAcceptedBookings = await axios.post(
				'https://thechapel-backend.herokuapp.com/api/accepted_requests',
				targetRequest
			);
			const removeFromPendingRequests = await axios.delete(
				`https://thechapel-backend.herokuapp.com/api/booking_requests/${targetRequest.id}`
			);
			const updateRequests = await setUpdatedBookingRequests(
				removeFromPendingRequests.data
			);
		} catch (error) {
			console.log(error);
		}
	}

	async function handleDeclineRequest() {
		try {
			const removeFromPendingRequests = await axios.delete(
				`https://thechapel-backend.herokuapp.com/api/booking_requests/${targetRequest.id}`
			);
			const updateRequests = await setUpdatedBookingRequests(
				removeFromPendingRequests.data
			);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		if (targetRequest && handleRequest) {
			handleAcceptRequest();
		} else if (targetRequest && handleRequest == false) {
			handleDeclineRequest();
		}
	}, [targetRequest]);

	useEffect(() => {
		setBookingRequests(updatedBookingRequests);
	}, [updatedBookingRequests]);
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
							<Button
								onClick={() => {
									setTargetRequest(request);
									setHandleRequest(true);
								}}>
								Accept
							</Button>
							<Button
								onClick={() => {
									setTargetRequest(request);
									setHandleRequest(false);
								}}>
								Decline
							</Button>
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

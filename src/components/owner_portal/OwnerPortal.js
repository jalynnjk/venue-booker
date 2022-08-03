import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './owner_portal.css';
import moment from 'moment';

function OwnerPortal(props) {
	const [bookingRequests, setBookingRequests] = useState([]);
	const [updatedBookingRequests, setUpdatedBookingRequests] = useState([]);
	const [targetRequest, setTargetRequest] = useState([]);
	const [handleRequest, setHandleRequest] = useState();
	const [requests, setRequests] = useState('Pending Requests');

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
				{ ...targetRequest }
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

	async function acceptedRequests() {
		setRequests('Accepted Requests');
        try {
					const response = await axios.get(
						'https://thechapel-backend.herokuapp.com/api/accepted_requests'
					);
					setUpdatedBookingRequests(response.data);
				} catch (error) {
					console.log(error);
				}
	}

	async function pendingRequests() {
		setRequests('Pending Requests');
        try {
					const response = await axios.get(
						'https://thechapel-backend.herokuapp.com/api/booking_requests'
					);
					setUpdatedBookingRequests(response.data);
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
		<main className='request-card-container'>
			<h1 className='owner-title'>{requests}</h1>
			<div className='filters'>
					<div className='request-filters' onClick={acceptedRequests}>
						Accepted Requests
					</div>
					<div className='request-filters' onClick={pendingRequests}>
						Pending Requests
					</div>
			</div>
			{bookingRequests ? (
				bookingRequests.map((request, index) => {
					return (
						<Card key={index} id='request-card'>
							<Card.Title>{request.client_name}</Card.Title>
							<Card.Text className='text'>{request.client_email}</Card.Text>
							<Card.Text className='text'>
								Wedding Date:{' '}
								{moment(request.wedding_date).format('MM/DD/YYYY')}
							</Card.Text>
							<Card.Text className='text'>
								Number of Guests: {request.number_guests}
							</Card.Text>
							<Card.Text className='text'>Budget: {request.budget}</Card.Text>
                            {requests === "Pending Requests" ? 
                            (<div className='buttons'>
								<Button
									className='accept-button'
									onClick={() => {
										setTargetRequest(request);
										setHandleRequest(true);
									}}>
									Accept
								</Button>
								<Button
									className='decline-button'
									onClick={() => {
										setTargetRequest(request);
										setHandleRequest(false);
									}}>
									Decline
								</Button>
							</div>) : (null)}
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

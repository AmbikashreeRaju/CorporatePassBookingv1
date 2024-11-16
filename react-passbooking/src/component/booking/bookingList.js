import React, { useState, useEffect } from 'react';
//import FacilitiesListItem from './facilitiesListItem';
import bookingService from '../../services/bookingService';
import BookingsItem from './bookingListItem';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const BookingList = () => {
    const [booking, setProducts] = useState([]);
    useEffect(() => {
        //fetch
        fetchBooking();
    }, []);
    const fetchBooking = async () => {
        try {
            const bookingsData = await bookingService.getAllBooking();
            setProducts(bookingsData);
        }
        catch (error) {
            console.error('Error fetching bookings: ', error);
        }
    };

    return (
        <div className='container'>
            <h2 className='my-4'>Booking List</h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Visitor Name</th>
                        <th scope="col">Facilities</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Booking Time</th>
                        <th scope="col">Status</th>
                        <th scope="col">Info</th>
                    </tr>
                </thead>
                <tbody>
                    {booking.map(bookng => (
                        <BookingsItem key={booking.id} booking={bookng} />
                    ))}
                </tbody>
            </table>
            <div>
                <Card
                    bg="secondary"
                    style={{ width: '45%', color: 'white', float: 'left', margin: '5px' }}
                    className="mb-2"
                >
                    <Card.Header>Facilities</Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Name : Single</ListGroup.Item>
                            <ListGroup.Item>Type : Single</ListGroup.Item>
                            <ListGroup.Item>Amenties : Swimming Pool & GYM</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <Card
                    bg="success"
                    style={{ width: '45%', color: 'white', float: 'left', margin: '5px' }}
                    className="mb-2"
                >
                    <Card.Header>Visitors</Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Name : Ambika</ListGroup.Item>
                            <ListGroup.Item>Email : ambika123@gmail.com</ListGroup.Item>
                            <ListGroup.Item>Mobile : +65 1234654XXX</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};
export default BookingList;
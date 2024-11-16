import React, {useState} from 'react';
import bookingService from '../../services/bookingService';
import Button from 'react-bootstrap/Button';

const BookingsItem = ({ booking }) => {
    const [isEditing, setIsEditing] = useState(false);
    // const [editedName, setEditedName] = useState(booking.name);
    // const [editedType, setEditedType] = useState(booking.type);
    // const [editedCapacity, setEditedCapacity] = useState(booking.capacity);
    // const [editedLocation, setEditedLocation] = useState(booking.location);
    // const [editedAmenties, setEditedAmenties] = useState(booking.amenties);
    // const handleEdit = async () => {
    //     setIsEditing(true);
    // };
    // const handleSave = async () => {
    //     const editedFacilites = { ...facilitie, name: editedName, type:editedType, capacity: editedCapacity, location: editedLocation, amenties: editedAmenties}
    //     try{
    //         await  facilitiesService.updateFacilities(facilitie.id, editedFacilites);
    //         setIsEditing(false);
    //         onEdit();
    //     }
    //     catch(error){
    //         console.error('Error updating product:', error);
    //     }
    // };
    // const handleCancel = () => {
    //     setIsEditing(false);
    //     setEditedName(facilitie.name);
    //     setEditedType(facilitie.type);
    //     setEditedCapacity(facilitie.capacity);
    //     setEditedLocation(facilitie.location);
    //     setEditedAmenties(facilitie.amenties);
    // };
    return (        
        <tr>
            <th scope="row">{booking.id}</th>
            <td>{booking.visitors.name}</td>
            <td>{booking.facilities.name}</td>
            <td>{booking.bookingDate}</td>
            <td>{booking.bookingTime}</td>
            <td>{booking.status}</td>
            <td><Button variant="info">Info</Button></td>
        </tr>
    );
};
export default BookingsItem;
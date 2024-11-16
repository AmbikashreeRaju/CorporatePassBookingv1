import React, {useState} from 'react';
import facilitiesService from '../../services/facilitiesService';

const FacilitiesItem = ({ facilitie, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(facilitie.name);
    const [editedType, setEditedType] = useState(facilitie.type);
    const [editedCapacity, setEditedCapacity] = useState(facilitie.capacity);
    const [editedLocation, setEditedLocation] = useState(facilitie.location);
    const [editedAmenties, setEditedAmenties] = useState(facilitie.amenties);
    const handleEdit = async () => {
        setIsEditing(true);
    };
    const handleSave = async () => {
        const editedFacilites = { ...facilitie, name: editedName, type:editedType, capacity: editedCapacity, location: editedLocation, amenties: editedAmenties}
        try{
            await  facilitiesService.updateFacilities(facilitie.id, editedFacilites);
            setIsEditing(false);
            onEdit();
        }
        catch(error){
            console.error('Error updating product:', error);
        }
    };
    const handleCancel = () => {
        setIsEditing(false);
        setEditedName(facilitie.name);
        setEditedType(facilitie.type);
        setEditedCapacity(facilitie.capacity);
        setEditedLocation(facilitie.location);
        setEditedAmenties(facilitie.amenties);
    };
    return (    
        // <li className='list-group-item'>
        // {isEditing?(
        //     <div className="row">
        //     <div className="col">
        //         <input type="text" className="form-control" value={editedName} onChange={e => setEditedName(e.target.value)} required />
        //     </div>
        //     <div className="col">
        //         <input type="text" className="form-control" value={editedType} onChange={e => setEditedType(e.target.value)} required />
        //     </div>
        //     <div className="col-auto">
        //         <button className="btn btn-success me-2" onClick={handleSave}>Save</button>
        //         <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        //     </div>
        // </div>
        // ):(
        //     <div className="d-flex justify-content-between align-items-center">
        //     <span>{facilitie.name} - ${facilitie.type}</span>
        //     <div>
        //         <button className="btn btn-danger me-2" onClick={onDelete}>Delete</button>
        //         <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
        //     </div>
        // </div>
        // )}
        // </li>
        <tr>
            <th scope="row">{facilitie.id}</th>
            <td>{facilitie.name}</td>
            <td>{facilitie.type}</td>
            <td>{facilitie.capacity}</td>
            <td>{facilitie.location}</td>
            <td>{facilitie.amenties}</td>
        </tr>
    );
};
export default FacilitiesItem;
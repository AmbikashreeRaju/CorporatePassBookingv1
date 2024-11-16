import React, {useState, useEffect } from 'react';
import FacilitiesListItem from './facilitiesListItem';
import facilitiesService from '../../services/facilitiesService';

const FacilitiesList = ()=> {
        const [facilities, setProducts] = useState([]);
        useEffect(()=> {
        //fetch
        fetchFacilities();
        }, []);
        const fetchFacilities = async ()=> {
        try{
            const facilitesData = await facilitiesService.getAllFacilities();
            setProducts(facilitesData);
        }
        catch(error){
            console.error('Error fetching facilities: ', error);
        }
    };

    const handleDelete = async (id)=> {
    try{
        await facilitiesService.deleteFacilities(id);
        fetchFacilities();
    }
    catch(error){
        console.error('Error deleting facilities: ', error);
    }
    };
    const handleEdit = () => {
        fetchFacilities();        
    };
    return(
        <div className='container'>
            <h2 className='my-4'>Facilities List</h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">capacity</th>
                        <th scope="col">Location</th>
                        <th scope="col">Available Amenties</th>
                    </tr>
                </thead>
                <tbody>
                {facilities.map(facilitie => (
                    <FacilitiesListItem key={facilitie.id} facilitie={facilitie} onDelete={() => handleDelete(facilitie.id)} onEdit={handleEdit}/>
                ))}    
                </tbody>
            </table>
        </div>
    );
};
export default FacilitiesList;
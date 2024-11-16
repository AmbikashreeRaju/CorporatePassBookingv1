import axios from 'axios';

const baseURL = 'https://localhost:7294/api/Facilities';
const facilitiesService = {
    getAllFacilities: async () => {
        const response = await axios.get(baseURL);
        return response.data;
    },
    addFacilities: async (facilities) => {
        const response = await axios.post(baseURL, facilities);
        return response.data;
    },
    deleteFacilities: async (id)=>{
        const response = await axios.delete('${baseURL}/${id}');
        return response.data;
    },
    updateFacilities: async (id, facilities)=> {
        const response = await axios.put('${baseURL}/${id}', facilities);
        return response.data;
    }
};

export default facilitiesService;
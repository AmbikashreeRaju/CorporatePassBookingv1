import axios from 'axios';

const baseURL = 'https://localhost:7294/api/Booking';
const BookingService = {
    getAllBooking: async () => {
        const response = await axios.get(baseURL);
        return response.data;
    }
};

export default BookingService;
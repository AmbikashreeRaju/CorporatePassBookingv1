using PassBooking_API.Entities;

namespace PassBooking_API.Repositories
{
    public interface IBookingRepository
    {
        List<Booking> GetAllBooking();
        Booking GetBookingById(int id);
        void AddBooking(Booking _booking);
    }
}

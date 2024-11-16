using Microsoft.EntityFrameworkCore;
using PassBooking_API.Data;
using PassBooking_API.Entities;

namespace PassBooking_API.Repositories
{
    public class BookingRepository : IBookingRepository
    {
        private readonly AppDbContext _Context;

        public BookingRepository(AppDbContext context)
        {
            _Context = context;
        }

        List<Booking> IBookingRepository.GetAllBooking()
        {
            var booking = _Context.booking
                .Include(c=>c.facilities)
                .Include(c=>c.visitors)
                .AsNoTracking();

            return booking.ToList();
        }

        Booking IBookingRepository.GetBookingById(int id)
        {
            return _Context.booking.FirstOrDefault(p => p.Id == id);
        }

        public void AddBooking(Booking _booking)
        {
            if (_booking == null) throw new ArgumentNullException(nameof(_booking));
            _Context.booking.Add(_booking);
            _Context.SaveChanges();
        }
    }
}

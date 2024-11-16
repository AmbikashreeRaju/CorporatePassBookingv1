using Microsoft.AspNetCore.Mvc;
using PassBooking_API.Entities;
using PassBooking_API.Repositories;

namespace PassBooking_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookingController : Controller
    {
        private readonly IBookingRepository _bookingRepository;

        public BookingController(IBookingRepository bookingRepository)
        {
            _bookingRepository = bookingRepository;
        }

        [HttpGet]
        public IActionResult GetAllFacilities()
        {
            var bookingLst = _bookingRepository.GetAllBooking();

            return Ok(bookingLst);
        }

        [HttpGet("{id}")]
        public IActionResult GetFacilitiesById(int id)
        {
            var bookingLst = _bookingRepository.GetBookingById(id);
            if (bookingLst == null)
            {
                return NotFound();
            }
            return Ok(bookingLst);
        }

        [HttpPost]
        public IActionResult AddBooking([FromBody] Booking _booking)
        {
            if (_booking == null)
            {
                return BadRequest();
            }
            _bookingRepository.AddBooking(_booking);
            return CreatedAtAction(nameof(GetFacilitiesById), new { id = _booking.Id }, _booking);
        }
    }
}

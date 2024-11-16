using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata;

namespace PassBooking_API.Entities
{
    public class Booking
    {
        [Key]
        public int Id { get; set; }
        public DateOnly BookingDate { get; set; }
        public string? BookingTime { get; set; }
        public string? Status { get; set; }
        public int facilitiesId { get; set; }  // Required foreign key
        public Facilities? facilities { get; set; }
        public int visitorId {  get; set; }
        public Visitors? visitors { get; set;}
    }
}

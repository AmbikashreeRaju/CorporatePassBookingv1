using System.ComponentModel.DataAnnotations;

namespace PassBooking_API.Entities
{
    public class Visitors
    {
        [Key]
        public int VisitorsId { get; set; }
        public string? Name { get; set; }    
        public string? Email { get; set; }
        public string? MobileNo { get; set; }
    }
}

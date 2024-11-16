using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PassBooking_API.Entities;
using PassBooking_API.Repositories;

namespace PassBooking_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FacilitiesController : Controller
    {
        private readonly IFacilitiesRepository _facilityRepository;
        public FacilitiesController(IFacilitiesRepository facilityRepository)
        {
            _facilityRepository = facilityRepository;
        }

        [HttpGet]
        public IActionResult GetAllFacilities()
        {
            var facilts = _facilityRepository.GetAllFacilities();
            return Ok(facilts);
        }

        [HttpGet("{id}")]
        public IActionResult GetFacilitiesById(int id)
        {
            var facilts = _facilityRepository.GetFacilitiesById(id);
            if(facilts == null)
            {
                return NotFound();
            }
            return Ok(facilts);
        }

        [HttpPost]
        public IActionResult AddFacilities([FromBody] Facilities _facilities)
        {
            if(_facilities == null)
            {
                return BadRequest();
            }
            _facilityRepository .AddFacilities(_facilities);
            return CreatedAtAction(nameof(GetFacilitiesById), new {id =  _facilities.Id}, _facilities);
        }


    }
}

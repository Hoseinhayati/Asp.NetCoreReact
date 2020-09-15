using Microsoft.AspNetCore.Mvc;
using Trips.Data;

namespace Trips.Controllers
{
    [Route("api/[controller]")]
    public partial class TripController : Controller
    {
        private ITripService _tripService;

        public TripController(ITripService tripService)
        {
            this._tripService = tripService;
        }

        [HttpGet("SingleTrip/{id}")]
        public IActionResult GetTripById(int id)
        {
            var trip = _tripService.GetTripById(id);
            return Ok(trip);
        }

        [HttpGet("[action]")]
        public IActionResult GetTrips()
        {
            var allltrips = _tripService.GetAllTrips();
            return Ok(allltrips);
        }

        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody] Trip trip)
        {
            if (trip != null)
            {
                _tripService.AddTrip(trip);
            }
            return Ok();
        }

        [HttpPut("UpdateTrip/{id}")]
        public IActionResult UpdateTrip(int id,[FromBody] Trip trip)
        {
            _tripService.UpdateTrip(id,trip);
            return Ok();
        }

        [HttpDelete("DeleteTrip/{id}")]
        public IActionResult DeleteTrip(int id)
        {
            _tripService.DeleteTrip(id);
            return Ok();
        }
    }
}

using System.Collections.Generic;
using System.Linq;

namespace Trips.Data
{
    public class TripService : ITripService
    {
        public void AddTrip(Trip trip)
        {
            Data.Trips.Add(trip);
        }

        public void DeleteTrip(int tripid)
        {
            var data = Data.Trips.SingleOrDefault(t=>t.Id==tripid);
            if(data!=null)
            {
                Data.Trips.Remove(data);
            }
        }

        public List<Trip> GetAllTrips()
        {
            return Data.Trips.ToList();
        }

        public Trip GetTripById(int tripid)
        {
            return Data.Trips.SingleOrDefault(c=>c.Id==tripid);
        }

        public void UpdateTrip(int tripid, Trip trip)
        {
            var oldtrip = Data.Trips.SingleOrDefault(t=>t.Id==tripid);
            if(oldtrip!=null)
            {
                oldtrip.Name = trip.Name;
                oldtrip.Description = trip.Description;
                oldtrip.DateStarted = trip.DateStarted;
                oldtrip.DateCompleted = trip.DateCompleted;
            }
        }
    }
}
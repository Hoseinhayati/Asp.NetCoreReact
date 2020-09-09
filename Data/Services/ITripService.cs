using System.Collections.Generic;

namespace Trips.Data
{
    public interface ITripService
    {
        List<Trip> GetAllTrips();
        Trip GetTripById(int tripid);
        void UpdateTrip(int tripid, Trip trip);
        void DeleteTrip(int tripid);
        void AddTrip(Trip trip);
    }
}
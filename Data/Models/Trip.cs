using System;

namespace Trips.Data
{
    public class Trip
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public System.DateTime DateStarted {get;set;}
        public System.DateTime? DateCompleted { get; set; }
    }
}
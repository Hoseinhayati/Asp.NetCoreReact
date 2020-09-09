using System;
using System.Collections.Generic;
namespace Trips.Data
{
    public static class Data
    {
        public static List<Trip> Trips => alltrips;
        static List<Trip> alltrips = new List<Trip>(){
            new Trip(){
                Id = 1,
                Name = "Tehran",
                Description = "Capital City Of Iran",
                DateStarted = new DateTime(2020,02,05),
                DateCompleted = null
            },
              new Trip(){
                Id = 2,
                Name = "Shiraz",
                Description = "Capital City Of Iran",
                DateStarted = new DateTime(2019,02,05),
                DateCompleted = null
            },
              new Trip(){
                Id = 3,
                Name = "Mahshahr",
                Description = "Capital City Of Iran",
                DateStarted = new DateTime(2018,02,05),
                DateCompleted = null
            },
              new Trip(){
                Id = 4,
                Name = "Esfahan",
                Description = "Capital City Of Iran",
                DateStarted = new DateTime(2019,02,05),
                DateCompleted = null
            },
              new Trip(){
                Id = 5,
                Name = "Sanfarncisco",
                Description = "Capital City Of Iran",
                DateStarted = new DateTime(2019,02,05),
                DateCompleted = null
            },
              new Trip(){
                Id = 6,
                Name = "La,Usa",
                Description = "Capital City Of Amrica",
                DateStarted = new DateTime(2020,02,05),
                DateCompleted = null
            }
        };
    }
}
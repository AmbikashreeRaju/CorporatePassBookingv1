using Microsoft.EntityFrameworkCore;
using PassBooking_API.Data;
using PassBooking_API.Entities;

namespace PassBooking_API.Repositories
{
    public class FacilitiesRepository : IFacilitiesRepository
    {
        private readonly AppDbContext _Context;
        public FacilitiesRepository(AppDbContext context)
        {
            _Context = context;
        }

        public void AddFacilities(Facilities _facilities)
        {
            if(_facilities == null) throw new ArgumentNullException(nameof(_facilities));
            _Context.facilities.Add(_facilities);   
            _Context.SaveChanges();
        }

        public void DeleteFacilities(int id)
        {
            var intFaclities = _Context.facilities.Find(id);
            if(intFaclities == null) throw new ArgumentNullException(nameof(intFaclities));
            _Context.facilities.Remove(intFaclities);
            _Context.SaveChanges();
            
        }

        public List<Facilities> GetAllFacilities()
        {
            return _Context.facilities.ToList();
        }

        public Facilities GetFacilitiesById(int id)
        {
            return _Context.facilities.FirstOrDefault(p => p.Id == id);
        }

        public void UpdateFacilities(Facilities facilities)
        {
            if (facilities == null)
            {
                throw new ArgumentNullException(nameof(facilities));
            }
            _Context.Entry(facilities).State = EntityState.Modified;
            _Context.SaveChanges();
        }
    }
}

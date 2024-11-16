using PassBooking_API.Entities;

namespace PassBooking_API.Repositories
{
    public interface IFacilitiesRepository
    {
        void AddFacilities(Facilities facilities);
        void DeleteFacilities(int id);
        List<Facilities> GetAllFacilities();
        Facilities GetFacilitiesById(int id);
        void UpdateFacilities(Facilities facilities);
    }
}

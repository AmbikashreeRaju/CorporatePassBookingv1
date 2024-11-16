using Microsoft.EntityFrameworkCore;
using PassBooking_API.Entities;
using System.Diagnostics;

namespace PassBooking_API.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Facilities> facilities { get; set; }
        public DbSet<Visitors> visitors { get; set; }
        public DbSet<Booking> booking { get; set; }

        protected readonly IConfiguration _configuration;
        public AppDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Booking>()
                .HasOne(e => e.facilities)                
                .WithMany()
                .HasForeignKey(e => e.facilitiesId)
                .IsRequired();

            modelBuilder.Entity<Booking>()
                .HasOne(e => e.visitors)
                .WithMany()
                .HasForeignKey(e => e.visitorId)
                .IsRequired();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(_configuration.GetConnectionString("DefaultConnection"));
            options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
        }
    }
}

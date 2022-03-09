using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjectAPI.Models;

namespace ProjectAPI.Data
{
    public class ProjectAPIContext : DbContext
    {
        public ProjectAPIContext (DbContextOptions<ProjectAPIContext> options)
            : base(options)
        {
        }

        public DbSet<ProjectAPI.Models.Supplier> Supplier { get; set; }

        public DbSet<ProjectAPI.Models.Product> Product { get; set; }
    }
}

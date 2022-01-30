using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VLU_CV.Models
{
    public class VLUContext : DbContext
    {
        public VLUContext(DbContextOptions<VLUContext> options) : base(options)
        { }
        public DbSet<CurriculumVitae> CurriculumVitaes { set; get; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}

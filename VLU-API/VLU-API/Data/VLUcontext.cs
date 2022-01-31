using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VLU_API.Models;

namespace VLU_API.Data
{
    public class VLUcontext : DbContext
    {
        public VLUcontext(DbContextOptions<VLUcontext> options) : base(options) { }
        public DbSet<CurriculumVitae> CurriculumVitaes { get; set; }
    }
}

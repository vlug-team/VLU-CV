using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VLU_CV.Data;
using VLU_CV.Models;

namespace VLU_CV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreateCvController : ControllerBase
    {
        public ApplicationDbContext _context;
        public CreateCvController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<CurriculumVitae>> GetPaymentDetail(int id)
        {
            var curriculumVitaes = await _context.CurriculumVitaes.FindAsync(id);

            if (curriculumVitaes == null)
            {
                return NotFound();
            }

            return curriculumVitaes;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CurriculumVitae>>> PostCreateCV(CurriculumVitae curriculumVitae)
        {
            _context.CurriculumVitaes.Add(curriculumVitae);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetPaymentDetail", new { id = curriculumVitae.Id }, curriculumVitae);

        }
    }
}

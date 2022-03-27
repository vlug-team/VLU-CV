using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
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
    [EnableCors]
    [Route("api/createcv")]
    [ApiController]
    public class CVController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CVController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CurriculumVitae>>> GetCVList()
        {
            return await _context.CurriculumVitaes.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CurriculumVitae>> GetCV(int id)
        {
            var curriculumVitae = await _context.CurriculumVitaes.FindAsync(id);

            if (curriculumVitae == null)
            {
                return NotFound();
            }

            return curriculumVitae;
        }
        [HttpPost]
        public async Task<ActionResult<CurriculumVitae>> PostCV([FromForm]CurriculumVitae curriculum)
        {
            _context.CurriculumVitaes.Add(curriculum);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCV", new { id = curriculum.Id }, curriculum);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VLU_API.Data;
using VLU_API.Models;

namespace VLU_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CurriculumVitaeController : ControllerBase
    {
        private readonly VLUcontext _context;

        public CurriculumVitaeController(VLUcontext context)
        {
            _context = context;
        }

        // GET: api/CurriculumVitae
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CurriculumVitae>>> GetCurriculumVitaes()
        {
            return await _context.CurriculumVitaes.ToListAsync();
        }

        // GET: api/CurriculumVitae/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CurriculumVitae>> GetCurriculumVitae(int id)
        {
            var curriculumVitae = await _context.CurriculumVitaes.FindAsync(id);

            if (curriculumVitae == null)
            {
                return NotFound();
            }

            return curriculumVitae;
        }

        // PUT: api/CurriculumVitae/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCurriculumVitae(int id, CurriculumVitae curriculumVitae)
        {
            if (id != curriculumVitae.Id)
            {
                return BadRequest();
            }

            _context.Entry(curriculumVitae).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CurriculumVitaeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CurriculumVitae
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CurriculumVitae>> PostCurriculumVitae(CurriculumVitae curriculumVitae)
        {
            _context.CurriculumVitaes.Add(curriculumVitae);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCurriculumVitae", new { id = curriculumVitae.Id }, curriculumVitae);
        }

        // DELETE: api/CurriculumVitae/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCurriculumVitae(int id)
        {
            var curriculumVitae = await _context.CurriculumVitaes.FindAsync(id);
            if (curriculumVitae == null)
            {
                return NotFound();
            }

            _context.CurriculumVitaes.Remove(curriculumVitae);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CurriculumVitaeExists(int id)
        {
            return _context.CurriculumVitaes.Any(e => e.Id == id);
        }
    }
}

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
    [ApiController]
    [Route("api")]
    [EnableCors("AllowOrigin")]
    public class CVController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CVController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("getcv")]
        public async Task<ActionResult<List<CurriculumVitae>>> GetAllCVByUserId(string userId)
        {
            if (userId != "104441909451836301213")
            {
                var curriculumVitae = await _context.CurriculumVitaes
                    .Where(cv => cv.UserId == userId)
                    .ToListAsync();
                if (curriculumVitae == null)
                {
                    return NotFound();
                }

                return curriculumVitae;
            }
            else
            {
                var curriculumVitae = await _context.CurriculumVitaes.ToListAsync();
                if (curriculumVitae == null)
                {
                    return NotFound();
                }
                return curriculumVitae;
            }
        }

        [HttpGet("getcountcvofmonth")]
        public ActionResult<List<DashBoard>> GetCountCVOfMonth()
        {
            var countCVOfMonth = _context.CurriculumVitaes
                .GroupBy(c => c.CreatedAt.Month)
                .Select(g => new { Mouth = g.Key, Count = g.Count() })
                .ToList();
            var dashBoard = new List<DashBoard>(
                countCVOfMonth.Select(
                    c =>
                        new DashBoard
                        {
                            CountCV = c.Count,
                            Mouth = new DateTime(2020, c.Mouth, 1).ToString("MMMM")
                        }
                )
            );
            if (countCVOfMonth == null)
            {
                return NotFound();
            }
            return dashBoard;
        }

        [HttpGet("getcv{id}")]
        public async Task<ActionResult<CurriculumVitae>> GetCvById(int id)
        {
            var cv = await _context.CurriculumVitaes.Where(c => c.Id == id).FirstAsync();
            if (cv == null)
            {
                return NotFound();
            }
            return cv;
        }

        [HttpPost("createcv")]
        public IActionResult AddCV([FromBody] CurriculumVitae curriculum)
        {
            var userCV = _context.CurriculumVitaes
                .Where(c => c.UserId == curriculum.UserId && c.CreatedAt == DateTime.Today)
                .ToList();
            if (curriculum == null)
            {
                return BadRequest();
            }
            else
            {
                if (userCV.Count <= 6)
                {
                    curriculum.CreatedAt = DateTime.Today;
                    _context.CurriculumVitaes.Add(curriculum);
                    _context.SaveChanges();
                    return Ok(new { StatusCode = 200, });
                }
                else
                {
                    return BadRequest(new { StatusCode = 400 });
                }
            }
        }

        [HttpDelete("deletecv{id}")]
        public async Task<ActionResult<CurriculumVitae>> DeleteCV(int id)
        {
            var cv = await _context.CurriculumVitaes.FindAsync(id);
            if (cv == null)
            {
                return NotFound();
            }
            _context.CurriculumVitaes.Remove(cv);
            await _context.SaveChangesAsync();
            return cv;
        }

        [HttpPut("editcv{id}")]
        public async Task<IActionResult> EditCV(int id, [FromBody] CurriculumVitae curriculum)
        {
            if (id != curriculum.Id)
            {
                return BadRequest();
            }
            else
            {
                _context.CurriculumVitaes.Update(curriculum);
                await _context.SaveChangesAsync();
                return Ok(new { StatusCode = 200, });
            }
        }
    }
}

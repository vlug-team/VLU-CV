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
            if (userId != "100099488054233697335")
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
                var curriculumVitae = await _context.CurriculumVitaes?.ToListAsync()!;
                if (curriculumVitae == null)
                {
                    return NotFound();
                }
                return curriculumVitae;
            }
        }

        [HttpGet("getcount")]
        public ActionResult<List<DashBoard>> GetCountCVOfMonth()
        {
            int id = 1;
            var countCVOfMonth = _context.CurriculumVitaes
                .GroupBy(c => c.CreatedAt.Day)
                .Select(g => new { Day = g.Key, Count = g.Count(), })
                .ToList();
            var dashBoard = new List<DashBoard>(
                countCVOfMonth.Select(
                    c =>
                        new DashBoard
                        {
                            Id = id++,
                            Count = c.Count,
                            Day = new DateTime(
                                DateTime.Now.Year,
                                DateTime.Now.Month,
                                c.Day
                            ).ToString("dd/MM/yyyy")
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

        [HttpGet("getcountcv")]
        public ActionResult<int> GetCountCV()
        {
            var countCV = _context.CurriculumVitaes.Count();

            if (countCV <= 0)
            {
                return NotFound();
            }
            return countCV;
        }

        [HttpGet("getcountofmonth")]
        public ActionResult<int> GetCountOfMonth()
        {
            var countCVOfMonth = _context.CurriculumVitaes
                .Where(c => c.CreatedAt.Month == DateTime.Now.Month)
                .Count();

            return countCVOfMonth;
        }

        [HttpPost("createcv")]
        public IActionResult AddCV([FromBody] CurriculumVitae curriculum)
        {
            if (curriculum == null)
            {
                return BadRequest();
            }
            else
            {
                if (GetCountCVToday(curriculum.UserId) <= 6)
                {
                    curriculum.CreatedAt = DateTime.Now.Date;
                    _context.CurriculumVitaes.Add(curriculum);
                    _context.SaveChanges();
                    return Ok(new { StatusCode = 200, });
                }
                else if (GetCountCVToday(curriculum.UserId) > 6)
                {
                    return BadRequest(new { StatusCode = 423 });
                }
                else
                {
                    return BadRequest(new { StatusCode = 422 });
                }
            }
        }

        private int GetCountCVToday(string userId)
        {
            var cvToday = _context.CurriculumVitaes
                ?.Where(c => c.UserId == userId && c.CreatedAt == DateTime.Now.Date)
                .ToList();
            if (cvToday == null)
            {
                return 0;
            }
            return cvToday.Count;
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

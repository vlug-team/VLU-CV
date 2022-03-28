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
    [Route("api/createcv")]
    [EnableCors("AllowOrigin")]
    public class CVController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CVController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public  async Task<ActionResult<List<CurriculumVitae>>> GetList()
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
        public IActionResult AddCV([FromBody]CurriculumVitae curriculum)
        {
            if(curriculum == null)
            {
                return BadRequest();
            }
            else
            {
                _context.CurriculumVitaes.Add(curriculum);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                });
            }
        }
        [HttpPut]
        public CurriculumVitae EditCV(CurriculumVitae curriculumVitae)
        {
            var Cv = _context.CurriculumVitaes.Update(curriculumVitae);
            return Cv.Entity;
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using VLU_CV.Models;
using System.Threading.Tasks;
using VLU_CV.Data;

namespace VLU_CV.Controllers
{
    [Route("api/createcv")]
    [ApiController]
    public class CreateCVController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CreateCVController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<IActionResult> PostCV( CurriculumVitae curriculum)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CurriculumVitaes.Add(curriculum);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetCV", new { id = curriculum.Id }, curriculum);
        }
    }
}

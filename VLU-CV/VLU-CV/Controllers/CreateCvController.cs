using Microsoft.AspNetCore.Mvc;
using VLU_CV.Repository;
using VLU_CV.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace VLU_CV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreateCvController : ControllerBase
    {
        private readonly IRepository _repository;
        public CreateCvController(IRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CurriculumVitae>>> CVList()
        {
            return await _repository.SelectAll<CurriculumVitae>();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CurriculumVitae>> GetCV(long id)
        {
            var model = await _repository.SelectById<CurriculumVitae>(id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCV(long id, CurriculumVitae model)
        {
            if (id != model.Id)
            {
                return BadRequest();
            }

            await _repository.UpdateAsync<CurriculumVitae>(model);

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<CurriculumVitae>> InsertCV([FromBody] CurriculumVitae model)
        {
            await _repository.CreateAsync<CurriculumVitae>(model);
            return CreatedAtAction("GetCV", new { id = model.Id }, model);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<CurriculumVitae>> DeleteCV(long id)
        {
            var model = await _repository.SelectById<CurriculumVitae>(id);

            if (model == null)
            {
                return NotFound();
            }

            await _repository.DeleteAsync<CurriculumVitae>(model);

            return model;
        }
    }
}

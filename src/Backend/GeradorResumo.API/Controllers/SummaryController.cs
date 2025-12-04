using GeradorResumo.Application.UseCases;
using Microsoft.AspNetCore.Mvc;

namespace GeradorResumo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SummaryController : ControllerBase
    {
        
        [HttpPost("resumo")]
        public async Task<IActionResult> Summarize([FromServices] ISumarryIAUseCase useCase, [FromBody] string text)
        {
            var response = await useCase.Execute(text);

            return Ok(response);
        }
    }
}

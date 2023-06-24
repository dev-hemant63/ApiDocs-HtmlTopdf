using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApiDocs.Controllers
{
    [Route("api/")]
    [ApiController]
    public class TransController : ControllerBase
    {
        [HttpGet(nameof(Test)+"/{Id}")]
        public async Task<IActionResult> Test(int Id)
        {
            return Ok(Id);
        }
    }
}

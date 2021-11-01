using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCadastro.Context;

namespace MyCadastro.Controllers {

    [ApiController]
    [Route("api/cadastro")]
    public class CadastroControllers : ControllerBase {
            private readonly AppDbContext _appDbContext;
        public CadastroControllers(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetCadastro(){
            return Ok(
                    new {
                        success = false,
                        data = await _appDbContext.Cadastros.ToListAsync()
                });
       }
    }
}
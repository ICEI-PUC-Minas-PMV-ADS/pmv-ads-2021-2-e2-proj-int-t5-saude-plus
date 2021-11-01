using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyCadastro.Context;
using MyCadastro.Models;

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
                        success = true,
                        data = await _appDbContext.Cadastros.ToListAsync()
                });
       }
       [HttpPost]
       public async Task<IActionResult> PostCadastro(Cadastro Cadastro){
           _appDbContext.Cadastros.Add(Cadastro);
           await _appDbContext.SaveChangesAsync();
           return Ok(new {success = true, data = Cadastro});
       }
    }
}

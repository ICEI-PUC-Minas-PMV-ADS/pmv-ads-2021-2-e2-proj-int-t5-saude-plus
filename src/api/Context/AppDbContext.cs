using Microsoft.EntityFrameworkCore;
using MyCadastro.Models;

namespace MyCadastro.Context {
    public class AppDbContext : DbContext {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options){}
        public DbSet<Cadastro> Cadastros { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            optionsBuilder.UseSqlServer(@"Data Source=(local);Database=MyCadastro;Integrated Security=false;User ID=sa;Password=yourStrong(!)Password");
        }
    }
}

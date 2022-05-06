using System.Net.Mime;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using VLU_CV.Data;
using VLU_CV.Models;

namespace VLU_CV
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(
                options =>
                {
                    options.AddPolicy(
                        name: "AllowOrigin",
                        builder =>
                        {
                            builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                        }
                    );
                }
            );
            services.AddControllers().ConfigureApiBehaviorOptions(options =>
            {
                options.InvalidModelStateResponseFactory = context =>
                {
                    var result = new ValidationFailedResult(context.ModelState);
                    // TODO: add `using System.Net.Mime;` to resolve MediaTypeNames
                    result.ContentTypes.Add(MediaTypeNames.Application.Json);
                    return result;
                };
            });
            services.AddSwaggerGen();
            services.AddRazorPages();
            services.AddDbContext<ApplicationDbContext>(
                options =>
                    options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"))
            );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }
            app.UseSwagger();
            app.UseSwaggerUI(
                c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "CV V1");
                    c.RoutePrefix = string.Empty;
                }
            );
            app.UseRouting();
            app.UseCors("AllowOrigin");

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.UseEndpoints(
                endpoints =>
                {
                    endpoints.MapControllerRoute(
                        name: "default",
                        pattern: "{controller=Home}/{action=Index}/{id?}"
                    );
                    endpoints.MapRazorPages();
                }
            );
        }
    }
}

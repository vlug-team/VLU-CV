using System;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using VLU_CV.Data;
using VLU_CV.Models;

namespace VLU_CV.Controllers
{
    [ApiController]
    [Route("api/auth")]
    [EnableCors("AllowOrigin")]

    public class AccountController : ControllerBase
    {
 
    }
}


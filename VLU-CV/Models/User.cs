using Microsoft.AspNetCore.Identity;

namespace VLU_CV.Models
{
    public class User : IdentityUser
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
    }
}

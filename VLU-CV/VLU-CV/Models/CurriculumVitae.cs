using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VLU_CV.Models
{
    public class CurriculumVitae
    {
        [Key]
        public int Id { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string FullName { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string Position { get; set; }
        [Required(AllowEmptyStrings = false)]
        public string PersonalStatement { get; set; }
        public DateTime BirthDay { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string Email { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string PhoneNumber { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string FacebookUrl { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string Address { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string Skill_1 { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string SkillDecription_1 { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string Skill_2 { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string SkillDecription_2 { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string Specialized { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string SchoolName { get; set; }
        [Required(AllowEmptyStrings = false)]

        public double GPA { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string Positioned_1 { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string Worked_1 { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string Description_1 { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string Positioned_2 { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string Worked_2 { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string Description_2 { get; set; }
        [Required(AllowEmptyStrings = false)]

        public string Achievement { get; set; }
    }
}

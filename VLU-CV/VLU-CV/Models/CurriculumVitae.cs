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
       
        public string FullName { get; set; }
        public string Position { get; set; }
        public string PersonalStatement { get; set; }
        public DateTime BirthDay { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string FacebookUrl { get; set; }
        public string Address { get; set; }
        public string Skill_1 { get; set; }
        public string SkillDecription_1 { get; set; }
        public string Skill_2 { get; set; }
        public string SkillDecription_2 { get; set; }
        public string Specialized { get; set; }
        public string SchoolName { get; set; }
        public double GPA { get; set; }
        public string Positioned_1 { get; set; }
        public string Worked_1 { get; set; }
        public string Description_1 { get; set; }
        public string Positioned_2 { get; set; }
        public string Worked_2 { get; set; }
        public string Description_2 { get; set; }
        public string Achievement { get; set; }
        public string ImageSrc { get; set; }
    }
}

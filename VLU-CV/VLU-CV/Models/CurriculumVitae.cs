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
        [Column(TypeName = "nvarchar")]
        public string Title { get; set; }
        [Column(TypeName = "nvarchar")]
        public string ImageAvatar { get; set; }
        [Column(TypeName = "nvarchar")]
        public string Introduce { get; set; }
    }
}

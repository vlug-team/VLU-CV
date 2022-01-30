using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VLU_CV.Models
{
    [Table("CurriculumVitae")]
    public class CurriculumVitae
    {
        [Key]
        public int Id { get; set; }
        [Column("title")]
        public string Title { get; set; }
        [Column("image_avatar")]
        public string ImageAvatar { get; set; }
        [Column("introduce")]
        public string Introduce { get; set; }
    }
}

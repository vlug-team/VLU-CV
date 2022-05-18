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

        public string UserId { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập họ tên", AllowEmptyStrings = false)]
        [StringLength(50)]
        public string FullName { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập vị trí", AllowEmptyStrings = false)]
        public string Position { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập nơi mô tả", AllowEmptyStrings = false)]
        public string PersonalStatement { get; set; }

        public DateTime BirthDay { get; set; }
        public DateTime CreatedAt { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập địa chỉ mail", AllowEmptyStrings = false)]
        public string Email { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập số điện thoại", AllowEmptyStrings = false)]
        [
            RegularExpression(
                @"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$",
                ErrorMessage = "Số điện thoại không đúng định dạng"
            ),
            StringLength(10, MinimumLength = 10, ErrorMessage = "Số điện thoại phải có 10 số")
        ]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập địa chỉ facebook", AllowEmptyStrings = false)]
        public string FacebookUrl { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập địa chỉ", AllowEmptyStrings = false)]
        public string Address { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập nghề nghiệp", AllowEmptyStrings = false)]
        public string Skill_1 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập nghề nghiệp", AllowEmptyStrings = false)]
        public string SkillDecription_1 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập nghề nghiệp", AllowEmptyStrings = false)]
        public string Skill_2 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập nghề nghiệp", AllowEmptyStrings = false)]
        public string SkillDecription_2 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập chuyên ngành", AllowEmptyStrings = false)]
        public string Specialized { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập trường học", AllowEmptyStrings = false)]
        public string SchoolName { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập điểm tốt nghiệp", AllowEmptyStrings = false)]
        public double GPA { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập vị trí", AllowEmptyStrings = false)]
        public string Positioned_1 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập địa chỉ", AllowEmptyStrings = false)]
        public string Worked_1 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập mô tả", AllowEmptyStrings = false)]
        public string Description_1 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập vị trí", AllowEmptyStrings = false)]
        public string Positioned_2 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập địa chỉ", AllowEmptyStrings = false)]
        public string Worked_2 { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập mô tả", AllowEmptyStrings = false)]
        public string Description_2 { get; set; }

        [Required(ErrorMessage = " Vui lòng nhập Thành tích", AllowEmptyStrings = false)]
        public string Achievement { get; set; }

        [Required(ErrorMessage = "Vui lòng upload đại diện", AllowEmptyStrings = false)]
        public string ImageSrc { get; set; }
    }

    public class DashBoard
    {
        public int Id { get; set; }
        public int Count { get; set; }
        public string Day { get; set; }
    }
}

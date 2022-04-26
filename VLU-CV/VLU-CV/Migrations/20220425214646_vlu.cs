using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace VLU_CV.Migrations
{
    public partial class vlu : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CurriculumVitaes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Position = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PersonalStatement = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BirthDay = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FacebookUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Skill_1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SkillDecription_1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Skill_2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SkillDecription_2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Specialized = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SchoolName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GPA = table.Column<double>(type: "float", nullable: false),
                    Positioned_1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Worked_1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description_1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Positioned_2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Worked_2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description_2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Achievement = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImageSrc = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CurriculumVitaes", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CurriculumVitaes");
        }
    }
}

using System.Threading.Tasks;
using System;
using VLU_CV.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace VLU_CV.Controllers
{
    [Route("api/mail/sendmail")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class EmailController : ControllerBase
    {
        [HttpPost]
        public IActionResult SendMail([FromBody] Email email)
        {
            var client = new System.Net.Mail.SmtpClient("smtp.google.com", 587);
            client.UseDefaultCredentials = false;
            client.EnableSsl = true;
            client.Credentials = new System.Net.NetworkCredential(
                "duta08042000@gmail.com",
                "C57htr7gy1"
            );
            try
            {

                var mailMessage = new System.Net.Mail.MailMessage();
                mailMessage.From = new System.Net.Mail.MailAddress("duta08042000@gmail.com");
                mailMessage.To.Add("moclaw210@gmail.com");
                mailMessage.Subject = "VLU-CV";

                mailMessage.Body = $"Khách hàng cần liên lạc:\n Tên: {email.Name}\n Số điện thoại: {email.NumberPhone}\n mail: {email.Mail}\n ghi chú: {email.Text}"; ;
                client.Send(mailMessage);
                return Ok(new { StatusCode=200});
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}

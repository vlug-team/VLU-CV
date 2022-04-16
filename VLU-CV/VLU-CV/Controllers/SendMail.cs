using System.Threading.Tasks;
using System;
using VLU_CV.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Net;
using System.Net.Mail;

namespace VLU_CV.Controllers
{
    [Route("api/mail")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class EmailController : ControllerBase
    {
        [HttpGet("sendmail")]
        public IActionResult SendMail([FromQuery] Email email)
        {
            if (email == null)
            {
                return BadRequest();
            }
            else
            {
                MailMessage message = new MailMessage(
                    from: "duta08042000@gmail.com",
                    to: "daonguyenduytan1@gmail.com",
                    subject: "VLU-CV",
                    body: $"<h1>Yêu cầu liên hệ:</h1>"
                        + $"<p> Tên: {email.Name}</p>"
                        + $"<p>Số điện thoại: {email.NumberPhone}</ p >"
                        + $"<p>Email: {email.Mail}</p>"
                        + $"<p>Ghi chú: {email.Text}</p>"
                );

                message.BodyEncoding = System.Text.Encoding.UTF8;
                message.SubjectEncoding = System.Text.Encoding.UTF8;
                message.IsBodyHtml = true;
                message.ReplyToList.Add(new MailAddress("duta08042000@gmail.com"));
                message.Sender = new MailAddress("duta08042000@gmail.com");

                try
                {
                    using (SmtpClient client = new SmtpClient("smtp.gmail.com"))
                    {
                        client.Port = 587;
                        client.Credentials = new NetworkCredential(
                            "duta08042000@gmail.com",
                            "C57htr7gy1"
                        );
                        client.EnableSsl = true;
                        client.Send(message);
                        return Ok(new { StatusCode = 200 });
                    }
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
            }
        }
    }
}

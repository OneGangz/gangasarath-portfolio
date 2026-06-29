using Microsoft.AspNetCore.Mvc;
using Portfolio.Application.Common.Interfaces;
using Portfolio.Domain.Entities;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IApplicationDbContext _context;
    private readonly IEmailService _emailService;

    public ContactController(IApplicationDbContext context, IEmailService emailService)
    {
        _context = context;
        _emailService = emailService;
    }

    [HttpPost]
    public async Task<IActionResult> SendMessage(ContactMessage message)
    {
        _context.ContactMessages.Add(message);
        await _context.SaveChangesAsync(default);

        // Forward contact details via email to gangasaraths@gmail.com
        var recipient = "gangasaraths@gmail.com";
        var subject = $"New Contact Message from {message.Name}";
        var body = $@"
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> {message.Name}</p>
            <p><strong>Email:</strong> {message.Email}</p>
            <p><strong>Message:</strong></p>
            <p style='white-space: pre-wrap;'>{message.Message}</p>
        ";

        try
        {
            await _emailService.SendEmailAsync(recipient, subject, body);
        }
        catch (Exception)
        {
            // Do not crash the API request if email sending fails
        }

        return Ok(new { success = true, message = "Message sent successfully!" });
    }
}

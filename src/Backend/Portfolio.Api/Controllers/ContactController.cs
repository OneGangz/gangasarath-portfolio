using Microsoft.AspNetCore.Mvc;
using Portfolio.Application.Common.Interfaces;
using Portfolio.Domain.Entities;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IApplicationDbContext _context;

    public ContactController(IApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> SendMessage(ContactMessage message)
    {
        _context.ContactMessages.Add(message);
        await _context.SaveChangesAsync(default);
        return Ok(new { success = true, message = "Message sent successfully!" });
    }
}

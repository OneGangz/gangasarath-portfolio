using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Portfolio.Application.Common.Interfaces;
using System.Net;
using System.Net.Mail;

namespace Portfolio.Infrastructure.Services;

public class EmailService : IEmailService
{
    private readonly IConfiguration _configuration;
    private readonly ILogger<EmailService> _logger;

    public EmailService(IConfiguration configuration, ILogger<EmailService> logger)
    {
        _configuration = configuration;
        _logger = logger;
    }

    public async Task SendEmailAsync(string to, string subject, string body)
    {
        var host = _configuration["SmtpSettings:Host"];
        var portStr = _configuration["SmtpSettings:Port"];
        var username = _configuration["SmtpSettings:Username"];
        var password = _configuration["SmtpSettings:Password"];
        var enableSslStr = _configuration["SmtpSettings:EnableSsl"];

        if (string.IsNullOrWhiteSpace(host) || string.IsNullOrWhiteSpace(username))
        {
            _logger.LogWarning("SMTP configuration is incomplete. Falling back to log-only email delivery.");
            _logger.LogInformation("Email simulated delivery: To: {To}, Subject: {Subject}\nBody:\n{Body}", to, subject, body);
            return;
        }

        int port = int.TryParse(portStr, out var p) ? p : 587;
        bool enableSsl = !bool.TryParse(enableSslStr, out var ssl) || ssl; // default to true

        try
        {
            using var mailMessage = new MailMessage();
            mailMessage.From = new MailAddress(username);
            mailMessage.To.Add(to);
            mailMessage.Subject = subject;
            mailMessage.Body = body;
            mailMessage.IsBodyHtml = true;

            using var smtpClient = new SmtpClient(host, port);
            smtpClient.Credentials = new NetworkCredential(username, password);
            smtpClient.EnableSsl = enableSsl;

            await smtpClient.SendMailAsync(mailMessage);
            _logger.LogInformation("Email successfully sent to {To} with subject '{Subject}'", to, subject);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to send email to {To} via SMTP", to);
            throw;
        }
    }
}

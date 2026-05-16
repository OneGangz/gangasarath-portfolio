using Portfolio.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Portfolio.Infrastructure.Persistence;

public static class DbInitializer
{
    public static async Task SeedAsync(ApplicationDbContext context)
    {
        if (!context.Skills.Any())
        {
            context.Skills.AddRange(
                new Skill { Name = ".NET 10", Category = "Backend", Proficiency = 95, Icon = "dotnet" },
                new Skill { Name = "React 18", Category = "Frontend", Proficiency = 90, Icon = "react" },
                new Skill { Name = "SQL Server", Category = "Database", Proficiency = 85, Icon = "sqlserver" },
                new Skill { Name = "Clean Architecture", Category = "Architecture", Proficiency = 95, Icon = "architecture" }
            );
        }

        if (!context.Services.Any())
        {
            context.Services.AddRange(
                new Service { Title = "Custom Software Development", Description = "Tailored solutions using modern .NET and React stacks.", Icon = "code" },
                new Service { Title = "Architecture Consulting", Description = "Designing scalable and maintainable Clean Architecture systems.", Icon = "layers" },
                new Service { Title = "Mentoring & Team Lead", Description = "Guiding teams and individuals to achieve technical excellence.", Icon = "users" }
            );
        }

        if (!context.Projects.Any())
        {
            context.Projects.AddRange(
                new Project { Title = "DotNet Clean API", Description = "A boilerplate for Clean Architecture in .NET.", Technologies = ".NET, EF Core, SQL Server", GithubUrl = "https://github.com/OneGangz/dotnet-clean-api" },
                new Project { Title = "Portfolio Website", Description = "This premium portfolio website.", Technologies = "React, Vite, .NET 10", GithubUrl = "https://github.com/OneGangz/portfolio" }
            );
        }

        await context.SaveChangesAsync();
    }
}

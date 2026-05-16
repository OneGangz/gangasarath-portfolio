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
                new Skill { Name = "C# & .NET Core", Category = "Backend", Proficiency = 95, Icon = "code" },
                new Skill { Name = "ASP.NET Core Web API", Category = "Backend", Proficiency = 95, Icon = "api" },
                new Skill { Name = "Microservices & Clean Architecture", Category = "Backend", Proficiency = 95, Icon = "layers" },
                new Skill { Name = "SQL Server & T-SQL", Category = "Data", Proficiency = 90, Icon = "database" },
                new Skill { Name = "Query Performance Tuning", Category = "Data", Proficiency = 90, Icon = "zap" },
                new Skill { Name = "JWT & OAuth2 Security", Category = "Security", Proficiency = 95, Icon = "shield" },
                new Skill { Name = "Microsoft Azure", Category = "Cloud", Proficiency = 80, Icon = "cloud" }
            );
        }

        if (!context.Services.Any())
        {
            context.Services.AddRange(
                new Service { Title = "Microservices & API Architecture", Description = "Designing high-performance, resilient, and secure enterprise RESTful APIs following SOLID principles.", Icon = "cpu" },
                new Service { Title = "Database Performance Tuning", Description = "Optimizing SQL Server schemas, stored procedures, indexing, and T-SQL queries for maximum efficiency.", Icon = "database" },
                new Service { Title = "Clean Architecture Consulting", Description = "Helping teams modularize complex monoliths into clean, maintainable, and testable architectures.", Icon = "layers" }
            );
        }

        if (!context.Experiences.Any())
        {
            context.Experiences.AddRange(
                new Experience 
                { 
                    Company = "Nominate IT PVT LTD", 
                    Role = "Senior Software Engineer", 
                    Duration = "Oct 2016 – Present", 
                    Description = "Developed and optimized 15+ backend services and RESTful APIs using .NET Core. Reduced complex report query times from 18s to 2s.",
                    IsCurrent = true 
                },
                new Experience 
                { 
                    Company = "Consummate Technologies PVT LTD", 
                    Role = "Software Engineer", 
                    Duration = "Jul 2015 – Sep 2016", 
                    Description = "Built REST APIs using ASP.NET Web API deployed on Microsoft Azure. Optimized T-SQL queries.",
                    IsCurrent = false 
                },
                new Experience 
                { 
                    Company = "Prasad Solutions", 
                    Role = "Software Engineer", 
                    Duration = "Nov 2014 – Apr 2015", 
                    Description = "Developed backend components and REST APIs for mobile applications using Xamarin Forms.",
                    IsCurrent = false 
                }
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

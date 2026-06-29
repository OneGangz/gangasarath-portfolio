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
                new Skill { Name = "C# & .NET Core / .NET 6/7/8", Category = "Microsoft Technologies", Proficiency = 95, Icon = "code" },
                new Skill { Name = "ASP.NET Core MVC & Web API", Category = "Microsoft Technologies", Proficiency = 95, Icon = "api" },
                new Skill { Name = "Technical Leadership & Mentoring", Category = "Core Competencies", Proficiency = 90, Icon = "users" },
                new Skill { Name = "Software Architecture & System Design", Category = "Core Competencies", Proficiency = 90, Icon = "layout" },
                new Skill { Name = "Microservices & Clean Architecture", Category = "Architecture & Design", Proficiency = 95, Icon = "layers" },
                new Skill { Name = "Domain-Driven Design (DDD)", Category = "Architecture & Design", Proficiency = 85, Icon = "package" },
                new Skill { Name = "SQL Server & T-SQL", Category = "Database", Proficiency = 90, Icon = "database" },
                new Skill { Name = "Entity Framework Core & LINQ", Category = "Database", Proficiency = 95, Icon = "git-pull-request" },
                new Skill { Name = "Query & DB Performance Tuning", Category = "Database", Proficiency = 90, Icon = "zap" },
                new Skill { Name = "JWT & OAuth2 Security", Category = "Security", Proficiency = 95, Icon = "shield" },
                new Skill { Name = "Microsoft Azure Services", Category = "Cloud & DevOps", Proficiency = 80, Icon = "cloud" },
                new Skill { Name = "Docker & CI/CD Pipelines", Category = "Cloud & DevOps", Proficiency = 85, Icon = "terminal" },
                new Skill { Name = "IIS Administration", Category = "Cloud & DevOps", Proficiency = 85, Icon = "server" },
                new Skill { Name = "In-memory Caching", Category = "Caching & Performance", Proficiency = 90, Icon = "cpu" },
                new Skill { Name = "Unit & Integration Testing (xUnit)", Category = "Testing & Quality", Proficiency = 90, Icon = "check-square" },
                new Skill { Name = "Serilog & Observability", Category = "Logging & Observability", Proficiency = 90, Icon = "eye" },
                new Skill { Name = "REST API Design & Swagger", Category = "API & Integration", Proficiency = 95, Icon = "file-text" },
                new Skill { Name = "HTML5, CSS3, JS & jQuery", Category = "Frontend Technologies", Proficiency = 85, Icon = "globe" },
                new Skill { Name = "React (basic exposure)", Category = "Frontend Technologies", Proficiency = 60, Icon = "play" }
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
                    Company = "Nominate IT Pvt Ltd", 
                    Role = "Senior Software Engineer", 
                    Duration = "Oct 2016 – Present", 
                    Description = "Revised, updated, refactored and debugged existing applications. Built frontend components using React.js with Vite. Designed scalable REST APIs and microservices. Acted as tech lead. Tuned SQL Server databases (reduced query time from 18s to 2s).",
                    IsCurrent = true 
                },
                new Experience 
                { 
                    Company = "Consummate Technologies Pvt Ltd", 
                    Role = "Software Engineer", 
                    Duration = "Jul 2015 – Sep 2016", 
                    Description = "Designed and developed secure ASP.NET Web API services and cloud-native applications deployed on Microsoft Azure. Optimized complex T-SQL queries and reporting modules.",
                    IsCurrent = false 
                },
                new Experience 
                { 
                    Company = "Prasad Solutions", 
                    Role = "Software Engineer", 
                    Duration = "Nov 2014 – Apr 2015", 
                    Description = "Developed REST APIs and backend modules for Xamarin Forms mobile applications. Customized and extended NopCommerce core components.",
                    IsCurrent = false 
                },
                new Experience 
                { 
                    Company = "Progressive Cybernetics Pvt Ltd", 
                    Role = "Software Engineer", 
                    Duration = "Jan 2013 – Aug 2014", 
                    Description = "Developed and maintained ERP applications using C#, ASP.NET, and SQL Server. Created SOAP/RESTful web services. Administered SVN server, client and server OS.",
                    IsCurrent = false 
                },
                new Experience 
                { 
                    Company = "AlignMinds Technologies", 
                    Role = "Software Engineer", 
                    Duration = "Nov 2011 – Jan 2013", 
                    Description = "Developed complex reporting modules using RDLC and SQL Server. Integrated Google Calendar API. Built lightweight JSON-based web services.",
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

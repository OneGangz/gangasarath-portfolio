# Gangasarath Portfolio Website

A premium portfolio website built with modern technologies and Clean Architecture.

## Tech Stack
- **Backend**: ASP.NET Core 10.0 Web API, EF Core 10, SQL Server.
- **Frontend**: React 18, Vite, TypeScript, TanStack Query, Framer Motion.
- **Architecture**: Domain-Driven Design (DDD) & Clean Architecture.
- **Security**: OWASP Top 10, JWT, Rate Limiting, Input Validation.
- **Observability**: Serilog, OpenTelemetry, Health Checks.

## Project Structure
- `src/Backend/Portfolio.Domain`: Core entities and domain logic.
- `src/Backend/Portfolio.Application`: Application logic, interfaces, and DTOs.
- `src/Backend/Portfolio.Infrastructure`: Data persistence, Identity, and external services.
- `src/Backend/Portfolio.Api`: Presentation layer (Web API).
- `src/Frontend`: React application.

## Getting Started

### Prerequisites
- .NET 10 SDK
- Node.js & npm
- SQL Server

### Installation

1. **Clone the repository** (if applicable).
2. **Setup Backend**:
   - Navigate to `src/Backend/Portfolio.Api`.
   - Update the connection string in `appsettings.json`.
   - Run `dotnet run`.
3. **Setup Frontend**:
   - Navigate to `src/Frontend`.
   - Run `npm install`.
   - Run `npm run dev`.

## Features
- **Hero Section**: Animated introduction and social links.
- **About Me**: Professional summary.
- **Skills**: Interactive skill grid with progress bars.
- **Services**: Description of architecture, development, and mentoring services.
- **Contact**: Functional contact form (connected to API).
- **Responsive Design**: Works perfectly on all devices.

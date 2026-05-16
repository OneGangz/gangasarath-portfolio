namespace Portfolio.Domain.Entities;
using Portfolio.Domain.Common;

public class Skill : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public int Proficiency { get; set; }
    public string Icon { get; set; } = string.Empty;
}

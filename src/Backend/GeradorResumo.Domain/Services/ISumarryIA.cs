namespace GeradorResumo.Domain.Services
{
    public interface ISumarryIA
    {
        Task<string> SumarryAsync(string text);      
    }
}

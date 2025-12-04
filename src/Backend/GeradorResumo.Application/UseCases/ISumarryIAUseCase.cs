namespace GeradorResumo.Application.UseCases
{
    public interface ISumarryIAUseCase 
    {

        Task<string> Execute(string text);
    }
}

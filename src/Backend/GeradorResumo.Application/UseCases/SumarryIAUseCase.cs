using GeradorResumo.Domain.Services;

namespace GeradorResumo.Application.UseCases
{
    public class SumarryIAUseCase : ISumarryIAUseCase
    {

        private readonly ISummaryIA _summaryIA;

        public SumarryIAUseCase(ISummaryIA summaryIA)
        {
            _summaryIA = summaryIA;
        }

        public async Task<string> Execute(string text)
        {
            var response = await _summaryIA.SummaryAsync(text);

            return response;
        }
    }
}

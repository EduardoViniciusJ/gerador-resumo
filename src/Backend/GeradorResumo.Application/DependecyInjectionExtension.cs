using GeradorResumo.Application.UseCases;
using Microsoft.Extensions.DependencyInjection;

namespace GeradorResumo.Application
{
    public static class DependecyInjectionExtension
    {
        public static void AddApplication(this IServiceCollection services)
        {
            AddUseCases(services);
        }

        public static void AddUseCases(IServiceCollection services)
        {
            services.AddScoped<ISumarryIAUseCase, SumarryIAUseCase>();
        }
    }
}

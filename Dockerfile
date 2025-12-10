# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Define o diretório de trabalho
WORKDIR /src

# Copia os arquivos .csproj de todos os projetos
COPY src/Backend/GeradorResumo.API/GeradorResumo.API.csproj Backend/GeradorResumo.API/
COPY src/Backend/GeradorResumo.Application/GeradorResumo.Application.csproj Backend/GeradorResumo.Application/
COPY src/Backend/GeradorResumo.Domain/GeradorResumo.Domain.csproj Backend/GeradorResumo.Domain/
COPY src/Backend/GeradorResumo.Infrastructure/GeradorResumo.Infrastructure.csproj Backend/GeradorResumo.Infrastructure/

# Restaura dependências usando cache (restaura direto no projeto, que resolve dependências automaticamente)
RUN dotnet restore Backend/GeradorResumo.API/GeradorResumo.API.csproj

# Copia TODO o código
COPY src/Backend/ Backend/

# Compila e publica o projeto da API
WORKDIR /src/Backend/GeradorResumo.API
RUN dotnet publish -c Release -o /app/publish

# Stage 2: Runtime (imagem final)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final

WORKDIR /app

# Copia os arquivos publicados da etapa de build
COPY --from=build /app/publish .

# Expõe a porta 8080
EXPOSE 8080

ENV ASPNETCORE_URLS=http://+:8080
ENV ASPNETCORE_ENVIRONMENT=Production

ENTRYPOINT ["dotnet", "GeradorResumo.API.dll"]

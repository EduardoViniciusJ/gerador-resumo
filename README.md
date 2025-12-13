# 📝 Gerador de Resumo — Web API .NET + Angular + Gemini

Aplicação para gerar resumos automáticos usando **.NET Web API (C#)** no backend, **Angular + Tailwind** no frontend e **Google Gemini** para a inteligência artificial, com **Docker** para containerização e **deploy**.

---

#### Tecnologias

### 🔹 Backend
- .NET 8 — Web API  
- C#  
- Integração com Google Gen AI

### 🔹 Frontend
- Angular (standalone components)  
- TailwindCSS  
- HttpClient + RxJS  
- FormsModule

---

#### Funcionalidades

### 🔹 IA / Resumo
- Envie um texto e receba resumo automático gerado pelo Gemini.  
- Sem necessidade de banco de dados.  
- Exibição direta na tela.  

### 🔹 Frontend
- Interface leve com Tailwind.  
- Caixa de texto grande para inserir artigos/documentos.  
- Botão para gerar resumo.  
- Exibição do resumo abaixo.  
- Mensagens de erro ou carregamento.

### 🔹 Backend
- API utilizando o padrão de projeto DDD.  
- Endpoint único para geração de resumo.  
- Validações de tamanho e conteúdo do texto.  
- Tratamento de exceções customizadas.
- O backend é executado em **container Docker**, facilitando o deploy e garantindo consistência entre ambientes.

---

## 🔹 Deploy
- **Frontend** hospedado na **Vercel** (Angular)  
- **Backend** hospedado no **Render** (.NET Web API)  
- Comunicação via HTTP com **CORS configurado**
- https://gerador-resumo.vercel.app  



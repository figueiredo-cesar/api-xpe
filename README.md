# 📋 Resumo da API

Esta é uma API RESTful para gerenciamento de clientes, construída com **Node.js**, **Express** e **PostgreSQL**.  
Adota a arquitetura **MVC** (Model-View-Controller), separando responsabilidades em camadas para garantir organização, manutenibilidade e escalabilidade.

## 🛠️ Principais Tecnologias

- **Node.js**
- **Express**
- **Knex.js** (query builder)
- **PostgreSQL**

## 🗂️ Organização do Código

- **Controller** → Recebe e responde às requisições.
- **Service** → Centraliza a lógica de negócio.
- **Model** → Faz a comunicação com o banco de dados.

A estrutura modular permite fácil expansão e aplicação de boas práticas de desenvolvimento.

## 🚀 Como iniciar o projeto

1. Certifique-se de que o **PostgreSQL** esteja instalado e rodando na sua máquina.
2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente (se necessário) para a conexão com o banco de dados.
4. Inicie a API:

   ```
   npm start
   ```

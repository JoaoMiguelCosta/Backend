# Movie Trailer Rating API

## Descrição

A **Movie Trailer Rating API** é uma API RESTful desenvolvida com **TypeScript** e **Express.js** para fornecer acesso a trailers de filmes. O objetivo da API é permitir que os usuários descubram, assistam e avaliem trailers de filmes. Para acessar os trailers, os usuários devem se registrar e fazer login.

A API também oferece **controle de acesso baseado em funções (RBAC)**, permitindo que apenas administradores possam adicionar, editar e excluir filmes, além de gerenciar contas de usuário.

---

## Objetivo

O objetivo deste projeto é criar uma API segura e eficiente utilizando as tecnologias **TypeScript**, **Express.js**, **MongoDB** e **JWT** para autenticação de usuários. A API deve suportar:

- Registro e login de usuários
- Visualização de trailers de filmes
- Controle de acesso baseado em funções para administradores
- Gerenciamento de filmes (adicionar, editar, excluir) restrito aos administradores

---

## Funcionalidades Implementadas

### 🚀 **Autenticação de Usuário**
- **Registro de Usuários**: Usuários podem se registrar fornecendo nome, e-mail e senha.
- **Login de Usuários**: Usuários podem fazer login para obter um **JWT** (JSON Web Token).
- **JWT**: Implementação de autenticação JWT para garantir que apenas usuários autenticados possam acessar certos endpoints da API.

### 🎬 **Visualização de Trailers**
- **Listagem de Filmes**: Usuários podem visualizar uma lista de filmes, incluindo detalhes como título, data de lançamento, gênero e o link do trailer.
- **Pesquisa de Filmes**: Implementação de filtros e paginação para facilitar a busca de filmes por nome, gênero ou data de lançamento.

### 🔒 **Controle de Acesso Baseado em Funções**
- **Funções de Usuário**: Dois papéis são definidos: "User" e "Admin".
- **Administração de Filmes**: Apenas usuários com o papel "Admin" podem adicionar, editar ou excluir filmes da plataforma.

### 📸 **Gerenciamento de Imagens de Cartazes**
- **Armazenamento de Cartazes**: Os cartazes dos filmes são armazenados em uma pasta estática no servidor e referenciados nos detalhes do filme.

---

## Tecnologias Utilizadas

- **TypeScript**: Para garantir um código mais seguro e fácil de manter.
- **Express.js**: Framework minimalista para construir APIs no Node.js.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar informações sobre os usuários e filmes.
- **Mongoose**: ODM (Object Data Modeling) para interação com o MongoDB.
- **JWT (JSON Web Tokens)**: Para autenticação e comunicação segura entre cliente e servidor.
- **Bcrypt**: Para hashing e salting de senhas dos usuários.
- **CORS**: Middleware para habilitar o compartilhamento de recursos entre diferentes domínios.
- **Swagger**: Para documentação da API, permitindo que os endpoints sejam visualizados e testados diretamente no navegador.

---

## Endpoints da API

### 🚀 **Autenticação**

- **POST** `/auth/register`: Registro de usuário.
- **POST** `/auth/login`: Login para obter um JWT.
- **GET** `/auth/users`: (Admin somente) Buscar lista de usuários.
- **PUT** `/auth/users/:id`: (Admin somente) Atualizar detalhes de usuário.
- **DELETE** `/auth/users/:id`: (Admin somente) Deletar usuário.

### 🎬 **Filmes**

- **GET** `/api/movies`: (Somente usuários autenticados) Buscar lista de filmes com detalhes.
- **GET** `/api/movies/search`: (Somente usuários autenticados) Buscar filmes com filtros de nome, gênero e data de lançamento.
- **POST** `/api/movies`: (Admin somente) Adicionar um novo filme.
- **PUT** `/api/movies/:id`: (Admin somente) Atualizar detalhes de um filme.
- **DELETE** `/api/movies/:id`: (Admin somente) Deletar um filme.

### 📸 **Imagens de Cartazes**

- **GET** `/posters/{imageName}`: Acessar os cartazes dos filmes armazenados.

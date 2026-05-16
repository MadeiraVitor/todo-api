<h1 align="center">
  Todo API
</h1>

API para fazer o gerenciamento de tarefas usando Node.js, TypeScript, Express, Prisma e PostgreSQL.

---

## 📄 Descrição

API de tarefas (Todo) feita com Node.js, TypeScript, Express e Prisma, com persistência em PostgreSQL. Possui documentação Swagger e endpoints para criar, listar e remover tarefas.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Swagger UI
- Docker Compose

---

## ⚙️ Funcionalidades

- Criar tarefas com validação de duplicidade por titulo (case-insensitive)
- Listar todas as tarefas cadastradas
- Deletar tarefas por ID
- Documentação interativa via Swagger

---

## ▶️ Como rodar o projeto

1. Clone o repositório:

```
git clone https://github.com/MadeiraVitor/todo-api.git
```

2. Instale as dependências:

```
npm install
```

3. Suba o banco com Docker:

```
docker-compose up -d
```

4. Crie um arquivo `.env` na raiz com a variável `DATABASE_URL`. Exemplo:

```
DATABASE_URL=postgresql://user:password@localhost:5432/db-name?schema=public
```

5. Rode as migrações do Prisma (se necessário) e gere o client:

```
npx prisma migrate dev
npx prisma generate
```

6. Inicie o servidor em modo desenvolvimento:

```
npm run dev
```

Servidor: `http://localhost:3000`

Swagger: `http://localhost:3000/docs`

## 📌 Endpoints

- `POST /todo`
  - Cria uma nova tarefa.
  - Corpo JSON esperado:

```
{
  "title": "Minha tarefa",
  "done": false
}
```

- `GET /todo`
  - Lista todas as tarefas.

- `DELETE /todo/:id`
  - Remove a tarefa com o ID informado.

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foi possível praticar:

- Estruturação de API REST com Express
- Uso do Prisma com adaptador para PostgreSQL
- Configuração de variáveis de ambiente com dotenv
- Documentação de API com Swagger
- Integração com Docker Compose para banco local

## 👤 Autor

<div align="center">
    <p>Desenvolvido por <strong>Vitor Madeira</strong></p>
    <a href="https://www.linkedin.com/in/vitor-madeira/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
    <a href = "mailto:vitorsoutom@hotmail.com"><img src="https://img.shields.io/badge/-Email-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>

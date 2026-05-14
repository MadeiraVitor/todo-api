import express from "express";
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const port = 3000;
const app = express();

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

app.use(express.json());

app.post("/todo", async (req, res) => {
  const { title, done } = req.body;

  try {
    const existingTodo = await prisma.todo.findFirst({
      where: { title: { equals: title, mode: "insensitive" } },
    });

    if (existingTodo) {
      return res.status(409).send({ message: "Essa Todo já existe" });
    }

    await prisma.todo.create({
      data: {
        title,
        done,
      },
    });
  } catch (error) {
    return res.status(500).send({ message: "Erro ao criar o Todo" });
  }

  res.status(201).send("Todo criado com sucesso");
});

app.get("/todo", async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
});

app.delete("/todo/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const todo = await prisma.todo.findUnique({ where: { id } });

    if (!todo) {
      return res.status(404).send({ message: "Todo não encontrado" });
    }

    await prisma.todo.delete({
      where: { id },
    });
  } catch (error) {
    return res.status(500).send({ message: "Erro ao deletar o Todo" });
  }

  res.status(204).send("Todo deletado com sucesso");
});

app.listen(port, () => {
  console.log(`Servidor em execução em http://localhost:${port}`);
});

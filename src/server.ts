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

app.get("/todo", (req, res) => {
  res.send("buscar todos os Todos cadastrados");
});

app.delete("/todo/:id", (req, res) => {
  res.send("deletar um Todo específico");
});

app.listen(port, () => {
  console.log(`Servidor em execução em http://localhost:${port}`);
});

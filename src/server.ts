import express from 'express';
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const port = 3000;
const app = express();

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

app.post('/todo', (req, res) => {
   res.send('cadastrar um novo Todo');
});

app.get('/todo', (req, res) => {
   res.send('buscar todos os Todos cadastrados');
});

app.delete('/todo/:id', (req, res) => {
   res.send('deletar um Todo específico');
});

app.listen(port, () => {
   console.log(`Servidor em execução em http://localhost:${port}`);
});
import express from 'express';

const port = 3000;
const app = express();

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
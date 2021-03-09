// Exportação das bibliotecas
const express = require('express');
const cors = require('cors');
const router = require('./routes/router');

// criação da aplicação
const app = express();


// TODO: configurar o servidor
app.use(express.json()); // faz o trabalho do body-parser, que está depreciado.
app.use(cors()); // filtro que permite criar requisitos de acesso à app.

router(app);

// TODO: levantar o serviço
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port localhost:${port}.`);
});

// Exportação do módulo
export default app;
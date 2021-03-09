//-- Arquivo responsável pela gestão das versões de rota
const { Router } = require('express'); //-- importando a propriedade Router do express
const { name, version } = require('../../package.json');
const cursoRoutesV1 = require('../routes/v1/curso-route');


module.exports = (app) => {

  const router = Router(); //-- criação de instância de Router

  // HealthCheck
  router.route('/').get((req, res) => {
    res.send({ name, version });
  });

  cursoRoutesV1(router);

  app.use('/v1', router); // o app vai começar em /v1 e a partir desta vai utilizar as rotas criadas com o router.

};
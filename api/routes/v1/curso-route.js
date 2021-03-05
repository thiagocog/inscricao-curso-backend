const Joi = require('joi');
const cursosController = require('../../controllers/curso-controller')


module.exports = (router) => {

  router.route('/curso')
  .get(
    cursosController.getAllCursos
  )

}
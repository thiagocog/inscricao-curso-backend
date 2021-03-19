const cursosController = require('../../controllers/curso-controller')


module.exports = (router) => {

  router.route('/curso')
  .get(
    cursosController.getAllCursos
  )

  router.route('/curso/:idcurso')
  .get(
    cursosController.getCursoById
  )

  router.route('/curso/:idcurso/inscricao')
  .post(
    cursosController.postCursoInscricao
  )

  router.route('/curso/:idcurso/inscricao/:idinscricao')
  .delete(
    cursosController.deleteInscricao
  )

}
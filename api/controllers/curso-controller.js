const db = require('../models/Index');

const getAllCursos = (req, res, next) => {
  db.curso.findAll({})
  .then((dataFromDb) => {
    res.status(200).send(dataFromDb.map((item) => {
      return {
        id: item.id,
        name: item.name
      }
    }))
  });
};


const getCursoById = (req, res) => {
  db.curso.findOne(
  {
    where: {
      id: req.params.idcurso
    },
    include: {
      model: 'db.inscricao',
      as: 'inscricoes'
    }
    // attributes: ['id', 'name', 'status']
  }) .then((result) => 
  {
    res.status(200).send(result)
  })
}


module.exports = {
  getAllCursos,
  getCursoById
}
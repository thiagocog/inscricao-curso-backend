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

    // res.status(200).send([
    //   {
    //     id: 1,
    //     name: 'teste mock'
    //   }
    // ])

  });

};


const getCursoById = (req, res) => {
  db.curso.findOne({
    where: {
      id: req.params.idcurso
    },
    // attributes: ['id', 'name', 'status']
  }). then((result) => {
    res.status(200).send(result)
  })

}




module.exports = {
  getAllCursos,
  getCursoById
};
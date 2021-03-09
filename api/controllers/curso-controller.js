const db = require('../models/index');

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


module.exports = {
  getAllCursos
};
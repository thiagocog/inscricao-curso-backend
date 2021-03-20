const { cursos, inscricoes } = require('../models')


const getAllCursos = async (req, res, next) => {
  const result = await cursos.findAll({})
  
  res.status(200).send(result.map((item) => {
    return {
      id: item.id,
      name: item.name
    }
  }) || [])
}


const getCursoById = async (req, res, next) => {
  try {
    const result = await cursos.findOne(
    {
      where: {
        id: req.params.idcurso
      },
      include: {
        model: inscricoes,
        as: 'inscricoes'
      }
    })
    
    const data = {
      id: result.id,
      name: result.name,
      coordinator: result.coordinator,
      status: result.status,
      subscriptions: result.inscricoes
    } 
    
    res.status(200).send(data)
    
  }  
  catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal server error!!' });
  }
}


const postCursoInscricao = async (req, res, next) => {

  try {

    const { idcurso } = req.params
    // console.log('idcurso: ' + idcurso)

    const body = req.body
    // console.log('body: ' + body)

    const model = {
      curso_id: idcurso,
      name: body.name,
      email: body.email,
      data_nascimento: body.data_nascimento
    }

    await inscricoes.create(model)


    res.status(200).send({ message: 'inscrição incluída com sucesso!' })

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal server error!!' })
  }

}




const deleteInscricao = async (req, res, next) => {
  try {

    const { idinscricao } = req.params

    await inscricoes.destroy({
      where: {
        id: idinscricao
      }
    })


    res.status(200).send({ message: 'inscrição deletada com sucesso!' })
    
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal server error!!' })
  }
}



module.exports = {
  getAllCursos,
  getCursoById,
  postCursoInscricao,
  deleteInscricao
}
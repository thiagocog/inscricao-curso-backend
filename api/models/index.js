const path = require('path');
const fs = require('fs');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../db/config.js');

// const modelCurso = require('./curso');
// const modelInscricao = require('./inscricao');


const db = {};

let sequelize;

if(config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    ...config,
    pool: {
      max: 2,   //essa parte de pool só foi incluída por causa do heroku
      min: 0,
      idle: 5000
    }
  })
}


// db.curso = modelCurso(sequelize, Sequelize.DataTypes)
// db.inscricao = modelInscricao(sequelize, Sequelize.DataTypes)

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {           // tentar entender esse bloco
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
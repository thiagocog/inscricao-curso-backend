// Não é preciso fazer referência ao sequelize nesse arquivo, pois no .sequelizerc já é referido que o sequelize deve procurar os models na pasta models.

module.exports = (sequelize, DataTypes) => {
  const cursos = sequelize.define(
    'cursos',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      name: DataTypes.TEXT,
      coordinator: DataTypes.TEXT,
      start_date: DataTypes.DATE,
      status: DataTypes.BOOLEAN
    },
    {
      underscored: true,
      paranoid: true,
      timestamps: false
    }
  );

  return cursos;

};
module.exports = (sequelize, DataTypes) => {
  const inscricoes = sequelize.define(
    'inscricoes',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      aluno_name: DataTypes.TEXT,
      aluno_email: DataTypes.TEXT,
      aluno_data_nascimento: DataTypes.DATE,
    },
    {
      underscored: true,
      paranoid: true,
      timestamps: false
    }
  );

  inscricoes.associate = function (models) {
    inscricoes.belongsTo(models.cursos, {
      foreignKey: 'curso_id',
      as: 'cursos'
    })
  }

  return inscricoes;
}
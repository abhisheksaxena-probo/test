module.exports = (sequelize, DataTypes) => {
  const ContractSchema = sequelize.define(
    "contracts",
    {
      id: {
        type: DataTypes.BIGINT(20),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      name: { type: DataTypes.STRING },
      display_name: { type: DataTypes.STRING },
      description: { type: DataTypes.TEXT },
    },
    {
      sequelize,
      tableName: "contracts",
      timestamps: false,
    }
  );

  return ContractSchema;
};

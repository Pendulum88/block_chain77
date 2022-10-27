const Sequelize = require("sequelize");
const { associate } = require("../../../models/table1");

module.exports = class Table1 extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        idx: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        id: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        pw: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "NewTable1",
        tableName: "new_table1",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.NewTable1;
  }
};

const Sequelize = require("sequelize");

const sequelize = new Sequelize("my_db", "root", "password", { logging: false });

const NodeSequelizeTest = sequelize.define("NodeSequelizeTest", {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  title: { type: Sequelize.STRING, allowNull: false, unique: true },
  text: Sequelize.TEXT
});

NodeSequelizeTest.sync().error(err => {
  console.log(err);
});

const chainer = new Sequelize.Utils.QueryChainer();

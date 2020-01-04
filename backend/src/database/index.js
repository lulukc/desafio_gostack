import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import Admin from '../app/models/Admin';
import Students from '../app/models/Students';
import Plans from '../app/models/Plans';
import Enrollments from '../app/models/Enrollments';
import HelpOrders from '../app/models/HelpOrders';

import databaseConfig from '../config/database';

const models = [Admin, Students, Plans, Enrollments, HelpOrders];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongooseConnection = mongoose.connect(`${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();

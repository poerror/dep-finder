const mongoose = require('mongoose');

const dependencySchema = mongoose.Schema({
  type: String,
  name: String,
  version: Number
});

module.exports = {
  dependencySchema,
  Dependency: mongoose.model('Project', dependencySchema)
};

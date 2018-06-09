const mongoose = require('mongoose');

const { dependencySchema } = require('./dependency');

const dependencySourceSchema = mongoose.Schema({
  type: String,
  fileUrl: String,
  dependencies: [dependencySchema]
});

const projectSchema = mongoose.Schema({
  name: String,
  author: String,
  repositoryUrl: String,
  dependencySources: [dependencySourceSchema]
});

module.exports = {
  projectSchema,
  Project: mongoose.model('Project', projectSchema)
};

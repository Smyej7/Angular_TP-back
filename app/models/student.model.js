const Joi = require('joi');
const BaseModel = require('../utils/base-model');

module.exports = new BaseModel('Student', {
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  notes: Joi.string(),
  img: Joi.string(),
});
const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Ticket', {
  title: Joi.string().required(),
  description: Joi.string(),
  date: Joi.date().required(),
  studentId: Joi.number(),
  major: Joi.string().required(),
  archived: Joi.boolean().required()
});
const Joi = require('joi');

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const applicationSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().allow(''),
  tariff: Joi.string().valid('base', 'standard', 'vip', 'not-specified'),
  message: Joi.string().allow(''),
});

module.exports = {
  registerSchema,
  loginSchema,
  applicationSchema,
};

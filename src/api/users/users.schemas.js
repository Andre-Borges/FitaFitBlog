import Joi from '@hapi/joi';

export const create = {
  payload: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  })
};

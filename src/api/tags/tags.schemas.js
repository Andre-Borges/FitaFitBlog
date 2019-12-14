import * as Joi from '@hapi/joi';

const postSchema = {
  postId: Joi.number().required()
};

export const params = Joi.object({
  ...postSchema,
  id: Joi.number().required()
});

export const payload = Joi.object({
  name: Joi.string().min(3).max(100).required()
});

export const create = {
  params: Joi.object(postSchema),
  payload,
};

export const update = {
  params,
  payload
};

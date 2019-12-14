import Boom from '@hapi/boom';

export async function getObjectOr404(model, options) {
  const instance = await model.findOne(options);

  if (!instance) {
    throw Boom.notFound();
  }

  return instance;
}

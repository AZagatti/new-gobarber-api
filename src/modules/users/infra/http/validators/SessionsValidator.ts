import { celebrate, Segments, Joi } from 'celebrate';

export default {
  create: celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
};

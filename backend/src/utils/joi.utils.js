const Joi = require('joi');

module.exports = {
  joiLogin: async (data) => { 
    try {
      const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(32).required()
      });
      const { error } = await schema.validate(data);
      return error;
    }
    catch (err) {
      throw new Error(err.message);
    }
  },
  joiAddAdmin: async (data) => {
    try {
      const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(50).required(),
        role: Joi.string().valid("admin", "user").required(),
      });
      const { error } = schema.validate(data);
      return error;
    }
    catch (err) {
      throw new Error(err.message);
    };
  }
}
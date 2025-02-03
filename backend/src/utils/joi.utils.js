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
  }
}
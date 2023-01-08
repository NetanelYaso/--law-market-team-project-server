const Joi = require("@hapi/joi");

module.exports =  validateDeparment = (department) => {
    console.log(department,"fdfdfdf");
    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        active: Joi.boolean().required(),
        coverImage: Joi.required(),
        // lawyers: Joi.required(),
        categories:Joi.required(),
    });
    const{error}=schema.validate(department, {abortEarly:false});
    return {error}
};

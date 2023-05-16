import Joi from "joi";

export const validateEvent = Joi.object({
    name: Joi.string(),
    description: Joi.string()
})
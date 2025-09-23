import { body } from "express-validator";

export const createUserValidation = [
  body("first_name").notEmpty().withMessage("First name is required"),
  body("last_name").notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 chars"),
  body("corporate_id").notEmpty().withMessage("Corporate ID is required"),
  body("roleId").notEmpty().withMessage("Role ID is required"),
];

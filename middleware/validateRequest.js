import { body } from "express-validator";

export const createUserValidation = [
  body("first_name")
    .notEmpty()
    .withMessage("First name is required")
    .isString()
    .withMessage("First name must be a string"),

  body("last_name")
    .notEmpty()
    .withMessage("Last name is required")
    .isString()
    .withMessage("Last name must be a string"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be valid"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),

  body("corporate_id")
    .notEmpty()
    .withMessage("Corporate ID is required"),

  body("roleId")
    .notEmpty()
    .withMessage("Role ID is required"),

  body("profile_picture")
    .optional()
    .isURL()
    .withMessage("Profile picture must be a valid URL"),
];

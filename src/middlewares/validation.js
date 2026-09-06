import { body, validationResult } from "express-validator";

const validateUser = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("username").trim().notEmpty().withMessage("Username is required"),
  body("email").trim().isEmail().withMessage("Valid email is required"),
  body("password").notEmpty().withMessage("Password is required"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

const validateCat = [
  body("cat_name").trim().notEmpty().withMessage("Cat name is required"),

  body("weight").isFloat({ min: 0 }).withMessage("Weight must be a positive number"),

  body("owner").isInt({ min: 1 }).withMessage("Owner must be a valid user ID"),

  body("birthdate").notEmpty().withMessage("Birthdate is required"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

const validateLogin = [
  body("username").trim().notEmpty().withMessage("Username is required"),

  body("password").notEmpty().withMessage("Password is required"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

export { validateUser, validateCat, validateLogin };

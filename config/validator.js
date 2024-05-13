const { check, validationResult,sanitize } = require("express-validator");


const userSignUpValidationRules = () => {
  const allowedDomains = ['gmail.com', 'outlook.com', 'protonmail.com'];

  const emailValidator = (value) => {
    const emailParts = value.split('@');
    const domain = emailParts[emailParts.length - 1];
    if (!allowedDomains.includes(domain)) {
      throw new Error('Email domain should be Gmail, Outlook, or Protonmail');
    }
    return true;
  };

  return [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Invalid email").not().isEmpty().isEmail().custom(emailValidator),
    check("password", "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character")
    .not()
    .isEmpty()
    .isLength({ min: 5 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{4,}$/),
  ];
};


const userSignInValidationRules = () => {
  return [
    check("email", "Invalid email").not().isEmpty().isEmail(),
    check("password", "Invalid password").not().isEmpty().isLength({ min: 4 }),
  ];
};

const userContactUsValidationRules = () => {
  return [
    check("name", "Please enter a name").not().isEmpty(),
    check("email", "Please enter a valid email address")
      .not()
      .isEmpty()
      .isEmail(),
    check("message", "Please enter a message with at least 10 words")
      .not()
      .isEmpty()
      .isLength({ min: 10 }),
  ];
};

const validateSignup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    var messages = [];
    errors.array().forEach((error) => {
      messages.push(error.msg);
    });
    req.flash("error", messages);
    return res.redirect("/user/signup");
  }
  next();
};

const validateSignin = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    var messages = [];
    errors.array().forEach((error) => {
      messages.push(error.msg);
    });
    req.flash("error", messages);
    return res.redirect("/user/signin");
  }
  next();
};

const validateContactUs = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    var messages = [];
    errors.array().forEach((error) => {
      messages.push(error.msg);
    });
    console.log(messages);
    req.flash("error", messages);
    return res.redirect("/pages/contact-us");
  }
  next();
};

module.exports = {
  userSignUpValidationRules,
  userSignInValidationRules,
  userContactUsValidationRules,
  validateSignup,
  validateSignin,
  validateContactUs,
};

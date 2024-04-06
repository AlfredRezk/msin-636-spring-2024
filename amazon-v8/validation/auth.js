const { body } = require("express-validator");

exports.login = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Please provide an Email")
      .isEmail()
      .withMessage("Please Provide a valid email")
      .trim()
      .normalizeEmail(),
    body("password")
      .notEmpty()
      .withMessage("Please provide password")
      .isLength({ min: 4 })
      .withMessage("Password is 4 character minimum")
      .trim(),
  ];
};


exports.signup=()=>{
    return [
        body("email")
          .notEmpty()
          .withMessage("Please provide an Email")
          .isEmail()
          .withMessage("Please Provide a valid email"),
        body("password")
          .notEmpty()
          .withMessage("Please provide password")
          .isLength({ min: 4 })
          .withMessage("Password is 4 character minimum"),
        body('password2')
        .notEmpty()
        .withMessage("Please provide confimed password")
        .isLength({ min: 4 })
        .withMessage(" Confirmed Password is 4 character minimum")
        .custom((value, {req})=>{
            return value===req.body.password;
        }).withMessage('Password must match')
      ];

}

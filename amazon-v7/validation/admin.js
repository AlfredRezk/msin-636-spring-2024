const { body } = require("express-validator");

exports.addProduct = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("Please provide a title")
      .isLength({ min: 5 })
      .withMessage("Title is 5 character Min"),
    body("price").notEmpty().withMessage("Please provide a price"),
  ];
};

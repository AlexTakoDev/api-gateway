const { body } = require('express-validator');
//test
const testDTO = [
    body("name").exists().isString().notEmpty()
];

module.exports = {
    testDTO
};
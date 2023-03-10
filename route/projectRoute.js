const express = require('express');
const router = express.Router();
require('dotenv').config()
const auth = require('../middleware/auth');
const DTO = require('../dto/dtos')
const Controller = require("../controller/controllers");


router.post("/create", auth, DTO.project.create, Controller.projectController.create);

router.put("/update/:uuid", auth, DTO.project.update, Controller.projectController.update);

router.get('/', Controller.projectController.getAll);
router.get("/:uuid", DTO.project.get, Controller.projectController.get);
router.get("/user/:uuid", DTO.project.get, Controller.projectController.getByUser);

module.exports = router;
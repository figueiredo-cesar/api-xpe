const express = require("express");
const router = express.Router();
const ClienteController = require("../controllers/ClienteController");

router.get("/", ClienteController.findAll);
router.get("/count", ClienteController.count);
router.get("/byId/:id", ClienteController.findById);
router.get("byName/:name", ClienteController.findByName);
router.post("/", ClienteController.create);
router.put("/:id", ClienteController.update);
router.delete("/:id", ClienteController.delete);

module.exports = router;

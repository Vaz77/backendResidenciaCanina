const router = require("express").Router();
const serviceController = require("../controllers/serviceController");
const authMiddleware = require("../middlewares/verifyToken");

router.post("/register", serviceController.register);

module.exports = router;

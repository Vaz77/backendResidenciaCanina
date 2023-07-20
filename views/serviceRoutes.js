const router = require("express").Router();
const serviceController = require("../controllers/serviceController");
const authMiddleware = require("../middlewares/verifyToken");

router.post("/register", serviceController.register);
router.get("/getAllServices", serviceController.getAllServices);
router.put("/update/:id", serviceController.updateService);

module.exports = router;

const router = require("express").Router();
const serviceController = require("../controllers/serviceController");
const authMiddleware = require("../middlewares/verifyToken");
const isAdmin = require('../middlewares/isAdmin')

router.post("/register", authMiddleware, isAdmin, serviceController.register);
router.get("/getAllServices", serviceController.getAllServices);
router.put("/update/:id", serviceController.updateService);
router.delete("/delete/:id", authMiddleware, isAdmin, serviceController.deleteService);

module.exports = router;

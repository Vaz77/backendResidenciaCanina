const router = require("express").Router();
const serviceController = require("../controllers/serviceController");
const authMiddleware = require("../middlewares/verifyToken");
const isAdmin = require('../middlewares/isAdmin')

router.post("/register", authMiddleware, isAdmin, serviceController.register);
router.get("/getAllServices", authMiddleware, isAdmin, serviceController.getAllServices);
router.put("/update/:id", authMiddleware, isAdmin, serviceController.updateService);
router.delete("/delete/:id", authMiddleware, isAdmin, serviceController.deleteService);

module.exports = router;

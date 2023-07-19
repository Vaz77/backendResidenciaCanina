const router = require("express").Router();
const dogController = require('../controllers/dogController');
const authMiddleware = require("../middlewares/verifyToken");

router.post("/register", dogController.register);
router.delete("/delete/:id", dogController.deleteDog);
router.put("/profile/:id", authMiddleware, dogController.updateDog);

module.exports = router;
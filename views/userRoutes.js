const router = require("express").Router();

const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
const auth = require("../middlewares/verifyToken");

router.get("/getAllUsers",authMiddleware, isAdmin, userController.getAllUsers);
router.put("/profile", authMiddleware, userController.updateUser);
router.get("/getUserByDni/:dni", userController.getUserByDni);
router.get('/profile/:id', userController.getProfile);
router.delete('/profile/:id', userController.deleteProfile);

module.exports = router;

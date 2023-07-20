const router = require("express").Router();
const dogController = require("../controllers/dogController");
const isAdmin = require("../middlewares/isAdmin");
const authMiddleware = require("../middlewares/verifyToken");

router.post("/register", authMiddleware, dogController.register);
router.delete("/delete/:id", authMiddleware, dogController.deleteDog);
router.put("/profile/:id", authMiddleware, dogController.updateDog);
router.get("/getAllDogs", authMiddleware, isAdmin, dogController.getAlldogs);
router.get("/getAllDogsByUserId", authMiddleware, dogController.getAllDogsByUserId);

module.exports = router;

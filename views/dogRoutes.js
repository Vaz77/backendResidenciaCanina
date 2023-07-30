const router = require("express").Router();
const dogController = require("../controllers/dogController");
const isAdmin = require("../middlewares/isAdmin");
const authMiddleware = require("../middlewares/verifyToken");

router.post("/register", dogController.register);
router.delete("/delete/:id", authMiddleware, isAdmin, dogController.deleteDog);
router.put("/profile/:id", dogController.updateDog);
router.get("/getAllDogs", dogController.getAlldogs);
router.get("/getAllDogsByUserId", authMiddleware, dogController.getAllDogsByUserId);

module.exports = router;

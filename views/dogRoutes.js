const router = require("express").Router();
const dogController = require("../controllers/dogController");
const authMiddleware = require("../middlewares/verifyToken");

router.post("/register", dogController.register);
router.delete("/delete/:id", dogController.deleteDog);
router.put("/profile/:id", authMiddleware, dogController.updateDog);
router.get("/getAllDogs", dogController.getAlldogs);
router.get(
  "/getAllDogsByUserId",
  authMiddleware,
  dogController.getAllDogsByUserId
);

module.exports = router;

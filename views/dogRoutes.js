const router = require("express").Router();
const dogController = require('../controllers/dogController')

router.post("/register", dogController.register);
router.delete("/delete/:id", dogController.deleteDog);

module.exports = router;
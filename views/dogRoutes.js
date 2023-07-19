const router = require("express").Router();
const dogController = require('../controllers/dogController')

router.post("/register", dogController.register);

module.exports = router;
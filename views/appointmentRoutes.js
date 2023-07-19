const router = require('express').Router();
const appointmentController = require("../controllers/appointmentController");
const authMiddleware = require("../middlewares/verifyToken");

router.post("/",authMiddleware, appointmentController.createAppointment)

module.exports = router
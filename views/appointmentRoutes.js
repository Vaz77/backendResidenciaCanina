const router = require("express").Router();
const appointmentController = require("../controllers/appointmentController");
const authMiddleware = require("../middlewares/verifyToken");

router.post("/", authMiddleware, appointmentController.createAppointment);
router.get("/getAllAppointments", appointmentController.getAllAppointments);
router.put("/update/:id", appointmentController.updateAppointment);
router.delete("/delete/:id", appointmentController.deleteAppointment);


module.exports = router;

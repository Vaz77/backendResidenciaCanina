const router = require("express").Router();
const appointmentController = require("../controllers/appointmentController");
const authMiddleware = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin")

router.post("/", authMiddleware, appointmentController.createAppointment);
router.get("/getAllAppointments", authMiddleware, isAdmin, appointmentController.getAllAppointments);
router.put("/update/:id", authMiddleware, appointmentController.updateAppointment);
router.delete("/delete/:id", authMiddleware, appointmentController.deleteAppointment);


module.exports = router;

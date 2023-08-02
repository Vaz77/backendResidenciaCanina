const router = require("express").Router();
const appointmentController = require("../controllers/appointmentController");
const authMiddleware = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");

router.post("/", authMiddleware, appointmentController.createAppointment);
router.get("/getAllAppointments", authMiddleware, isAdmin, appointmentController.getAllAppointments);
router.put("/update/:id", authMiddleware, appointmentController.updateAppointment);
router.delete("/delete/:id", appointmentController.deleteAppointment);
router.get('/getAppointment/:dogName', appointmentController.getAppointmentByDogName);
router.get("/appointment/dog/:dogId", appointmentController.getAppointmentByDogId);
router.get("/getAppointmentsByEmail/:email", authMiddleware, appointmentController.getAppointmentsByEmail);





module.exports = router;

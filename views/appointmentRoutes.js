const router = require("express").Router();
const appointmentController = require("../controllers/appointmentController");
const authMiddleware = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin")

router.post("/", appointmentController.createAppointment);
router.get("/getAllAppointments", appointmentController.getAllAppointments);
router.put("/update/:id", authMiddleware, appointmentController.updateAppointment);
router.delete("/delete/:id", appointmentController.deleteAppointment);
router.get('/getAppointment/:dogName', appointmentController.getAppointmentByDogName);
router.get("/appointment/dog/:dogId", appointmentController.getAppointmentByDogId);





module.exports = router;

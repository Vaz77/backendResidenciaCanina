const { Appointment } = require("../models");

const appointmentController = {};
const isActive = true;
appointmentController.createAppointment = async (req, res) => {
    let body = req.body;
    try {
      const newAppointment = await Appointment.create({
       time: body.time,
       status: isActive,
       date: body.date,
       observations: body.observations,
       dog_id: body.dogId,
       service_id: body.service_id,
      });
      return res.json({
        message: "Reserva creada",
        data: newAppointment,
      });
    } catch (error) {
      console.error(error);
    }
  };
  (module.exports = appointmentController);

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

appointmentController.getAllAppointments = async (req, res) => {
  try {
    let appointments = await Appointment.findAll({});
    res.json({
      message: "Appointments found successfully",
      data: appointments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Appointments not found",
      error: error,
    });
  }
};

appointmentController.updateAppointment = async (req, res) => {
  try {
    // Recojo los datos del body
    const body = req.body;
    const appointmentId = req.params.id;
    const appointment = await Appointment.findOne({
      where: {
        id: appointmentId,
      },
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }
    await Appointment.update(
      {
        time: body.time,
        status: body.status,
        date: body.date,
        observations: body.observations,
        service_id: req.params.id,
      },
      {
        where: {
          id: appointmentId,
        },
      }
    );
    res.json({
      message: "appointment updated",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Could not update appointment",
      error: error,
    });
  }
};

module.exports = appointmentController;

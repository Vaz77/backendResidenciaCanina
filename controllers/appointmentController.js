const { Appointment, Dog } = require("../models");

const appointmentController = {};
appointmentController.createAppointment = async (req, res) => {
  let body = req.body;
  try {
    const existingAppointment = await Appointment.findOne({
      where: {
        date: body.date,
        time: body.time,
      },
    });
    if (existingAppointment) {
      return res.status(409).json({
        success: false,
        message: "The appointment slot is already taken.",
      });
    }
    const newAppointment = await Appointment.create({
      date: body.date,
      time: body.time,
      observations: body.observations,
      dog_id: body.dog_id,
      dog_name: body.dog_name,
      duration: body.duration,
      service_id: body.service_id,
      service_name: body.service_name,
    });
    return res.status(201).json({
      success: true,
      message: "Reserva creada exitosamente",
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
        service_id: body.service_id,
        dog_id: body.dog_id,
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

appointmentController.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findOne({
      where: { id },
    });
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    await appointment.destroy();
    return res.json({
      success: true,
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Could not delete appointment",
      error: error,
    });
  }
};

appointmentController.getAppointmentByDogName = async (req, res) => {
  try {
    const dogName = req.params.dogName;
    // Buscar el perro por su nombre
    const dog = await Dog.findOne({
      where: {
        name: dogName,
      },
    });
    if (!dog) {
      return res.status(404).json({
        success: false,
        message: "Dog not found",
      });
    }
    // Buscar las citas asociadas al perro por su id
    const appointments = await Appointment.findAll({
      where: {
        dog_id: dog.id,
      },
    });
    if (appointments.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No appointments found for the dog",
      });
    }
    return res.json({
      success: true,
      message: "Appointments found successfully",
      data: appointments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error finding appointments",
      error: error,
    });
  }
};

appointmentController.getAppointmentByDogId = async (req, res) => {
  try {
    const dogId = req.params.dogId;
    const dog = await Dog.findOne({
      where: {
        id: dogId,
      },
    });
    if (!dog) {
      return res.status(404).json({
        success: false,
        message: "Dog not found",
      });
    }
    const appointments = await Appointment.findAll({
      where: {
        dog_id: dog.id,
      },
    });
    if (appointments.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No appointments found for the dog",
      });
    }
    return res.json({
      success: true,
      message: "Appointments found successfully",
      data: appointments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error finding appointments",
      error: error,
    });
  }
};

module.exports = appointmentController;

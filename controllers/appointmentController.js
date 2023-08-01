const { Appointment, Dog, Service } = require("../models");

const appointmentController = {};

appointmentController.createAppointment = async (req, res) => {
  let body = req.body;
  try {
    const [dog, createdDog] = await Dog.findOrCreate({
      where: { dog_name: body.dog_name },
      defaults: { dog_name: body.dog_name, user_id: req.userId },
    });
    const [service, createdService] = await Service.findOrCreate({
      where: { service_name: body.service_name },
      defaults: { service_name: body.service_name },
    });
    const newAppointment = await Appointment.create({
      duration: body.duration,
      time: body.time,
      date: body.date,
      observations: body.observations,
      dog_id: dog.id,
      dog_name: body.dog_name,
      service_id: service.id,
      service_name: body.service_name,
    });
    return res.status(201).json({
      success: true,
      message: "Reserva creada exitosamente",
      data: newAppointment,
    });
  } catch (error) {
    console.error("Error al crear la cita:", error);
    return res.status(500).json({
      success: false,
      message: "Error al crear la cita",
      error: error.message,
    });
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

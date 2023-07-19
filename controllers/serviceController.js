const { Service } = require("../models");

const serviceController = {};

serviceController.register = async (req, res) => {
  let body = req.body;
  try {
    const newService = await Service.create({
      name: body.name,
      price: body.price,
      description: body.description,
      appointment_id: body.appointmentId,
    });
    return res.json({
      message: "Servicio creado",
      data: newService,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = serviceController;

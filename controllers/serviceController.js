const { Service } = require("../models");

const serviceController = {};

serviceController.register = async (req, res) => {
  let body = req.body;
  try {
    const newService = await Service.create({
      name: body.name,
      price: body.price,
      description: body.description,
    });
    return res.json({
      message: "Servicio creado",
      data: newService,
    });
  } catch (error) {
    console.error(error);
  }
};

serviceController.getAllServices = async (req, res) => {
  try {
    let services = await Service.findAll({});
    res.json({
      message: "Services found successfully",
      data: services,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Services not found",
      error: error,
    });
  }
};

module.exports = serviceController;

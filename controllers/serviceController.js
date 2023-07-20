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

serviceController.updateService = async (req, res) => {
  try {
    // Recojo los datos del body
    const body = req.body;
    const serviceId = req.params.id;
    const service = await Service.findOne({
      where: {
        id: serviceId,
      },
    });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "service not found",
      });
    }
    await Service.update(
      {
        name: body.name,
        price: body.price,
        description: body.description,
      },
      {
        where: {
          id: serviceId,
        },
      }
    );
    res.json({
      message: "service updated",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Could not update service",
      error: error,
    });
  }
};

module.exports = serviceController;

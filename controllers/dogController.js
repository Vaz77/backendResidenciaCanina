const { Dog, User } = require("../models");

const dogController = {};

dogController.register = async (req, res) => {
  const { userDni } = req.body;
  console.log("userDni:", userDni);

  try {
    const user = await User.findOne({ where: { dni: userDni } });
    if (!user) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    const newDog = await Dog.create({
      dog_name: req.body.dog_name,
      breed: req.body.breed,
      age: req.body.age,
      wheight: req.body.wheight,
      pathologies: req.body.pathologies,
      user_id: user.id,
      user_dni: req.body.userDni,
    });
    return res.json({
      message: "Perro creado",
      data: newDog,
    });
  } catch (error) {
    console.error(error);
  }
};

dogController.deleteDog = async (req, res) => {
  try {
    const dogId = req.params.id;
    const dog = await Dog.findByPk(dogId);
    if (!dog) {
      return res.status(404).json({
        success: false,
        message: "Dog not found",
      });
    }
    await dog.destroy();
    return res.json({
      success: true,
      message: "Dog deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Could not delete dog",
      error: error,
    });
  }
};

dogController.updateDog = async (req, res) => {
  try {
    const body = req.body;
    const dogId = req.params.id;
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
    await Dog.update(
      {
        name: body.name,
        breed: body.breed,
        age: body.age,
        wheight: body.wheight,
        pathologies: body.pathologies,
      },
      {
        where: {
          id: dogId,
        },
      }
    );
    res.json({
      message: "Dog updated",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Could not update dog",
      error: error,
    });
  }
};

dogController.getAlldogs = async (req, res) => {
  try {
    let dogs = await Dog.findAll({});
    res.json({
      message: "Dogs found successfully",
      data: dogs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Dogs not found",
      error: error,
    });
  }
};

dogController.getAllDogsByUserId = async (req, res) => {
  try {
    const userId = req.userId;
    let dogs = await Dog.findAll({
      where: {
        user_id: userId,
      },
    });

    res.json({
      message: "Dogs found successfully",
      data: dogs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Dogs not found",
      error: error,
    });
  }
};

module.exports = dogController;

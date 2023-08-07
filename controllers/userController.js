const { User } = require("../models");

const userController = {};

userController.getAllUsers = async (req, res) => {
  try {
    let users = await User.findAll({});
    res.json({
      message: "Users found successfully",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Usersnot found",
      error: error,
    });
  }
};

userController.getUserByDni = async (req, res) => {
  try {
    const dni = req.params.dni;
    const user = await User.findOne({ where: { dni: dni } });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.json({
      message: "User found successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Could not get user",
      error: error,
    });
  }
};

userController.updateUser = async (req, res) => {
  try {
    const body = req.body;
    const { userId } = req;
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const updatedUser = await user.update({
      name: body.name,
      surname: body.surname,
      email: body.email,
      dni: body.dni,
      phone: body.phone,
    });
    return res.json({
      name: updatedUser.name,
      surname: updatedUser.surname,
      email: updatedUser.email,
      phone: updatedUser.phone,
      role_id: updatedUser.role_id,
      id: updatedUser.id
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Could not update user",
      error: error,
    });
  }
};

userController.getProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    return res.json({
      name: user.name,
      surname: user.surname,
      email: user.email,
      phone: user.phone,
      role_id: user.role_id,
      id: user.id
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch user profile",
      error: error.message,
    });
  }
};

userController.deleteProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    await user.destroy();
    return res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Could not delete user",
      error: error,
    });
  }
};

module.exports = userController;

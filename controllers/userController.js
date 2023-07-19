// Si quiero utilizar un modelo, lo importo aquí. Lo importo desestructurado para coger únicamente uno de los modelos desde el índice.
const { User, Role } = require("../models");

// Creo un objeto vacío para almacenar todos los controladores que voy a crear. Luego lo exportaré y accederé a cada controlador a través de los métodos que voy a crearle dentro de este archivo.
const userController = {};

userController.getAllUsers = async (req, res) => {
  try {
    // Quiero traerme todos los usuarios, por lo que utilizo directamente el método findAll sin ningún criterio concreto de búsqueda. El resultado lo almaceno en la variable users.
    let users = await User.findAll({
      // Si quiero excluir algún campo, lo incluyo aquí
      attributes: {
        exclude: ["password"],
      },
      // Si quiero incluir los datos de una tabla relacionada, también lo pongo aquí
      include: [{ model: Role }],
    });
    // Devuelvo los datos al usuario
    res.json({
      message: "Users found successfully",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Users not found",
      error: error,
    });
  }
};

userController.getUserByDni = async (req, res) => {
  try {
    // Obtener el DNI del usuario de los parámetros de la URL
    const dni = req.params.dni;
    const user = await User.findOne(
      // Buscar el usuario por su DNI
      { where: { dni: dni } }
    );
    if (!user) {
      // Si no se encuentra el usuario, devolver un mensaje de error
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
    // Recojo los datos del body
    const body = req.body;
    // Recojo la id del usuario del token. Si utilizo esto para encontrar a mi usuario aseguro que solo puedo editar MI perfil, del usuario que está logueado.
    const userId = req.userId;

    // Elimino del body los campos que sé que no quiero poder cambiar. De mi usuario no me interesa que nunca se pueda cambiar ni el email, ni la contraseña ni el nombre de usuario. Quizá luego crearía otro controlador únicamente para cambiar la contraseña.
    delete body.email;
    delete body.password;
    delete body.username;

    // Utilizo el método update del modelo user para actualizar los datos.
    await User.update(
      // En este primer objeto recojo los elementos del body y los cambio dentro del usuario.
      {
        name: body.name,
        surname: body.surname,
      },
      //   Busco el usuario que quiero actualizar. Al hacerlo desde el token directamente aseguro que estoy editando mi usuario y ningún otro.
      {
        where: {
          id: userId,
        },
      }
    );

    // Si todo ha ido bien, devuelvo un mensaje al usuario. En este caso no almaceno nada como datos ni lo devuelvo porque la respuesta del método update es un booleano.
    res.json({
      message: "User updated",
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
    const userId = req.userId;
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
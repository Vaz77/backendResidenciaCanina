// Instancio el elemento Router para poder usar las funciones de enrutado de Express
const router = require("express").Router();
// Importo los controladores que tengo dentro de mi carpeta de controladores y concretamente de mi archivo de controladores de autenticación
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/verifyToken");

router.get("/getAllUsers", userController.getAllUsers);
router.put("/profile", authMiddleware, userController.updateUser);

// Exporto para poder utilizar esto dentro del archivo router.js
module.exports = router;

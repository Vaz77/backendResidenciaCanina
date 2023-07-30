// Instancio el elemento Router para poder usar las funciones de enrutado de Express
const router = require("express").Router();
// Importo los controladores que tengo dentro de mi carpeta de controladores y concretamente de mi archivo de controladores de autenticación
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");

router.get("/getAllUsers", userController.getAllUsers);
router.put("/profile/:id", userController.updateUser);
router.get("/getUserByDni/:dni", userController.getUserByDni);
router.get('/profile/:id', userController.getProfile);
router.delete('/profile/:id', userController.deleteProfile);

// Exporto para poder utilizar esto dentro del archivo router.js
module.exports = router;

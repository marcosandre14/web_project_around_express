const router = require("express").Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateAvatar,
} = require("../controllers/users");

// GET /users — retorna todos os usuários
router.get("/", getUsers);

// GET /users/:userId - retorna um usuário por _id
router.get("/:userId", getUserById);

// POST /users — cria um novo usuário
router.post("/", createUser);

router.patch("/me", updateProfile);
router.patch("/me/avatar", updateAvatar);

module.exports = router;

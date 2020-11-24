import { Router } from "express";
import usuariocontroller from "../controllers/usuariosController";
const router = Router();
const Modulo = "usuarios";

/**********************
 * URLs DEL SERVIDOR QUe VA A MANEJAR.
 */
/**************URL DE USUARIOS******************************/

router.get(`/api/${Modulo}`, usuariocontroller.AllUsuarios);
router.get(`/api/${Modulo}/:id`, usuariocontroller.OneUsuario);
router.post(`/api/${Modulo}`, usuariocontroller.insertarUsuario);
router.delete(`/api/${Modulo}/:id`, usuariocontroller.eliminarUsuario);
router.put(`/api/${Modulo}/:id`, usuariocontroller.actualizarUsuario);
router.put(
  `/api/${Modulo}/password/:id`,
  usuariocontroller.actualizarContraseña
);

module.exports = router;

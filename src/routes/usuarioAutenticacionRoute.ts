import { Router } from 'express';
import autenticacioncontroller from '../controllers/usuarioAutenticacionController';
const router = Router();
const Modulo = 'auth'

/**********************
 * URLs DEL SERVIDOR QUe VA A MANEJAR.
 */
/**************URL DE USUARIOS******************************/
router.post(`/api/${Modulo}`,autenticacioncontroller.Autenticacion)


module.exports = router;
import express from 'express';
import playerController from '../controllers/playerController.mjs';
import loginAuth from '../middlewares/loginAuth.mjs';

const router = express.Router();

router.get('/',loginAuth ,playerController.getPlayers);
router.get('/:id', loginAuth,playerController.getPlayerById);
router.delete('/:id',loginAuth, playerController.deletePlayer);
router.put('/:id',loginAuth ,playerController.updatePlayer);
router.post('/',loginAuth, playerController.createPlayer);
router.post('/convocados',loginAuth, playerController.convocarJugadores);
router.get('/convocados',loginAuth, playerController.getConvocados);

export default router;
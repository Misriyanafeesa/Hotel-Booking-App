
const express = require('express');
const { addRoom, getRooms, getRoomById, updateRoom, deleteRoom } = require('../controllers/room');
const { adminMiddleware } = require('../middleware/auth');
const router = express.Router();

router.post('/:hotelId/rooms', adminMiddleware, addRoom);
router.get('/', getRooms);
router.get('/:id', getRoomById);
router.put('/:id', adminMiddleware, updateRoom);
router.delete('/:id', adminMiddleware, deleteRoom);

module.exports = router;

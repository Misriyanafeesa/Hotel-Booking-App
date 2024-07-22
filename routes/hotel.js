
const express = require('express');
const { createHotel, getHotels, getHotelById, updateHotel, deleteHotel } = require('../controllers/hotel');
const { adminMiddleware } = require('../middleware/auth');
const router = express.Router();

router.post('/', adminMiddleware, createHotel);
router.get('/', getHotels);
router.get('/:id', getHotelById);
router.put('/:id', adminMiddleware, updateHotel);
router.delete('/:id', adminMiddleware, deleteHotel);

module.exports = router;

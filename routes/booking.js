
const express = require('express');
const { createBooking, getBookings, getBookingById, updateBooking, deleteBooking } = require('../controllers/Booking');
const router = express.Router();

router.post('/:roomId/book', createBooking);
router.get('/', getBookings);
router.get('/:id', getBookingById);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

module.exports = router;

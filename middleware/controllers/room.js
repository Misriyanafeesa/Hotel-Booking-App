
const Room = require('../models/Room');
const Hotel = require('../models/Hotel');

exports.addRoom = async (req, res) => {
  try {
    const room = new Room({ ...req.body, hotelId: req.params.hotelId });
    await room.save();

    const hotel = await Hotel.findById(req.params.hotelId);
    hotel.rooms.push(room._id);
    await hotel.save();

    res.status(201).json(room);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ msg: 'Room not found' });
    res.json(room);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!room) return res.status(404).json({ msg: 'Room not found' });
    res.json(room);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) return res.status(404).json({ msg: 'Room not found' });
    res.json({ msg: 'Room deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

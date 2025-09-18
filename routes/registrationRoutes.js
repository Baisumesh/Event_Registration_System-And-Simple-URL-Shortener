const express = require("express");
const Registration = require("../models/Registration");
const Event = require("../models/Event");
const User = require("../models/User");
const router = express.Router();

// Register a user for an event
router.post("/", async (req, res) => {
  try {
    const { userId, eventId } = req.body;

    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if already registered
    const existing = await Registration.findOne({ user: userId, event: eventId });
    if (existing) return res.status(400).json({ message: "Already registered" });

    const registration = new Registration({ user: userId, event: eventId });
    await registration.save();

    res.status(201).json({ message: "Registration successful", registration });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all registrations of a user
router.get("/user/:userId", async (req, res) => {
  try {
    const registrations = await Registration.find({ user: req.params.userId }).populate("event");
    res.json(registrations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Cancel a registration
router.delete("/:id", async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);
    if (!registration) return res.status(404).json({ message: "Registration not found" });

    registration.status = "cancelled";
    await registration.save();

    res.json({ message: "Registration cancelled", registration });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

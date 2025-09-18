
// routes/eventRoutes.js
// routes/eventRoutes.js
import express from "express";
import Event from "../models/Event.js"; // make sure path is correct

const router = express.Router();

// POST /api/events
router.post("/", async (req, res) => {
  console.log("POST /api/events called"); // 🔹 debug
  const event = new Event(req.body);
  try {
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/events
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/:id/cancel", async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);
    if (!registration) return res.status(404).json({ message: "Not found" });
    registration.status = "cancelled";
    await registration.save();
    res.json({ message: "Registration cancelled", data: registration });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) return res.status(404).json({ message: "Event not found" });
    res.json({ message: "Event deleted successfully", data: deletedEvent });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

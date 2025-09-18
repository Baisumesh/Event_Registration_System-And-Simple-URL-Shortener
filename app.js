
import express from "express";
import mongoose from "mongoose";
import eventRoutes from "./routes/eventRoutes.js";

const app = express();

// ✅ Must be before routes
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// ✅ Mount routes
app.use("/api/events", eventRoutes);

const PORT = 1000;
const MONGO_URI = "mongodb+srv://umesh:codeAlpha%40123@cluster0.wigvsin.mongodb.net/urlshortener?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error("❌ MongoDB connection error:", err));

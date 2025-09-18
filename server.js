import express from "express";
import mongoose from "mongoose";
import eventRoutes from "./routes/eventRoutes.js";  // ✅ must include .js

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(
  "mongodb+srv://umesh:codeAlpha%40123@cluster0.wigvsin.mongodb.net/urlshortener?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Root route
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

app.get("/", (req, res) => {
  console.log("🔥 Root route hit!");
  res.send("✅ Express root is working from server.js!");
});

// Event routes
app.use("/api/events", eventRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));






// import express from "express";
// import eventRoutes from "./routes/eventRoutes.js";
// import mongoose from "mongoose";


// const app = express();

// // Middleware
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(
//   "mongodb+srv://umesh:codeAlpha%40123@cluster0.wigvsin.mongodb.net/urlshortener?retryWrites=true&w=majority&appName=Cluster0"
// )
// .then(() => console.log("✅ Connected to MongoDB Atlas"))
// .catch(err => console.error("❌ MongoDB connection error:", err));

// // Test route
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // Event routes
// app.use("/api/events", eventRoutes);

// const PORT = 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("✅ Express is working!");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Test server running on http://localhost:${PORT}`));

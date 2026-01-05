const express = require("express");
const cors = require("cors");
const path = require("path");

const { analyzeComplaint } = require("./logic");
const { complaints } = require("./data");

const app = express();

/* -----------------------------
   MIDDLEWARE
----------------------------- */
app.use(cors());
app.use(express.json());

/* -----------------------------
   SUBMIT COMPLAINT
----------------------------- */
app.post("/complaint", (req, res) => {
  const { text } = req.body;

  if (!text || !text.trim()) {
    return res.status(400).json({ error: "Complaint text required" });
  }

  const analysis = analyzeComplaint(text);

  const record = {
    id: complaints.length + 1,
    text,
    ...analysis,
    status: "Queued",
    timestamp: new Date()
  };

  complaints.push(record);

  res.json(record);
});

/* -----------------------------
   ADMIN FETCH
----------------------------- */
app.get("/complaints", (req, res) => {
  res.json(complaints);
});

/* -----------------------------
   SERVE FRONTEND (FOR DEPLOYMENT)
----------------------------- */
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

/* -----------------------------
   START SERVER
----------------------------- */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});

const express = require("express");
const cors = require("cors");

const { analyzeComplaint } = require("./logic");
const { complaints } = require("./data");

const app = express();
app.use(cors());
app.use(express.json());

/* -----------------------------
   SUBMIT COMPLAINT
----------------------------- */
app.post("/complaint", (req, res) => {
  const { text } = req.body;

  if (!text) {
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

app.listen(3000, () => {
  console.log("✅ Backend running on http://localhost:3000");
});

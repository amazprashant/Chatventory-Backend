const express = require("express");
const dotenv = require("dotenv");
const pool = require("./db");
const userRoutes = require("./routes/userRoutes.js");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", userRoutes);

app.get("/check-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "Connected ✅", time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ status: "Failed ❌", error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

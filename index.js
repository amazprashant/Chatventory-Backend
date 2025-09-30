const express = require("express");
const dotenv = require("dotenv");
const pool = require("./db");
const userRoutes = require("./routes/userRoutes.js");
const customerRoutes = require("./routes/customerRoutes.js");
const prospectRoutes = require("./routes/prospectRoutes.js");


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", customerRoutes);
app.use("/api",prospectRoutes);


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

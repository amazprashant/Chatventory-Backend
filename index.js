const express = require('express');
const app = express();
const pool = require('./db');
const dotenv = require('dotenv');
const { user } = require('pg/lib/defaults');
const userRoutes = require('./routes/userRoutes.js');

const port = process.env.PORT;

app.use(express.json());
app.use("/api",userRoutes);


app.get("/check-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "Connected ✅", time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ status: "Failed ❌", error: err.message });
  }
});



app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
})
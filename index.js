// write basic express server with a single route that returns "Hello World" type: module
import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";
import config from "./config/config.js";

import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = config.PORT;

// Middleware to parse JSON requests
app.use(express.json());
// Middleware to handle CORS
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// add a user (login/register) route
app.use("/api/auth", userRoutes);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`> Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("> Failed to start the server.", err);
  }
};

start();

// id: 6836c203c959019764954d80
/* token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODM2YzIwM2M5NTkwMTk3NjQ5NTRkODAiLCJpYXQiOjE3NDg0MTkwODcsImV4cCI6MTc0ODQyMjY4N30.C6fguQlpUMJ82aa5vKbttr_dG7OWZ-fTmlIalkiEx4M */

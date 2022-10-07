// require('dotenv').config()
// const express = require('express')
// const app = express();
const path = require("path");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// app.listen(process.env.PORT, () => {
//     console.log(`Listening on ${process.env.PORT}`)
// })

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/profile", require("./routes/profileRoutes"));

app.use(errorHandler);

// Server Frontend
if (process.env.NODE_ENV === "production") {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (_, res) =>
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Event Suggester" });
  });
}

app.listen(PORT, () =>
  console.log(`Backend Server Running on port ${PORT}! ✨😁✨`)
);

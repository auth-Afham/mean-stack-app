require("dotenv").config();
const express = require("express");
// const mongoose = require("mongoose"); // ❌ MongoDB is commented out
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

/*
// Connect to MongoDB (Commented Out)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
*/

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

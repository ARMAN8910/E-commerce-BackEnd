const mongoose = require("mongoose");

const mongoDbUrl = 'mongodb+srv://armanahmad7318:F3pY1l4B3tq4JDZm@cluster0.c7dfy.mongodb.net/Cluster0?retryWrites=true&w=majority';

const connectDb = async () => {
    try {
        await mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = { connectDb };
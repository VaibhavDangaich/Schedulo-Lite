const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const slotRoute=require('./routes/slotRoute');
app.use(express.json());
const PORT = process.env.PORT || 5000;
const MONGO_URL=process.env.MONGO_URL || 'mongodb://localhost:27017/booking-system';
app.use('/api/slots', slotRoute);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

const dbConnect=async()=>{
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
dbConnect();
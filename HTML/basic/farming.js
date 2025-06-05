const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// User Schema & Model
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});
const User = mongoose.model('User', UserSchema);

// Register User
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

// Login User
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (user) {
            res.json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
});

// Fetch Market Prices (Dummy Data for Now)
app.get('/market-prices', (req, res) => {
    res.json({
        wheat: '$200/ton',
        rice: '$180/ton',
        corn: '$150/ton'
    });
});

// Fetch Weather Updates (Dummy Data for Now)
app.get('/weather', (req, res) => {
    res.json({
        temperature: '28°C',
        humidity: '65%',
        conditions: 'Partly Cloudy'
    });
});

// AI Model for Soil Monitoring (Dummy Prediction for Now)
app.post('/predict-soil', (req, res) => {
    const { nitrogen, phosphorus, potassium, pH, moisture } = req.body;
    
    // Simple AI logic (to be replaced with actual model integration)
    let recommendation = "Optimal soil condition.";
    if (pH < 5.5) {
        recommendation = "Increase pH levels with lime application.";
    } else if (moisture < 30) {
        recommendation = "Increase irrigation for better moisture balance.";
    } else if (nitrogen < 20) {
        recommendation = "Apply nitrogen-based fertilizers.";
    }
    
    res.json({
        status: "Success",
        recommendation
    });
});

// Serve Farming HTML Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'farming.html'));
});

// Serve AI Module JavaScript File
app.get('/ai-module.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ai-module.js'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

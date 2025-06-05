const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/soilDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const SoilSchema = new mongoose.Schema({
    moisture: Number,
    pH: Number,
    temperature: Number
});

const SoilData = mongoose.model('SoilData', SoilSchema);

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY
}));

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    
    socket.on('sendData', async (data) => {
        const { moisture, pH, temperature } = data;
        const soilEntry = new SoilData({ moisture, pH, temperature });
        await soilEntry.save();

        const prompt = `The soil has moisture: ${moisture}%, pH level: ${pH}, and temperature: ${temperature}°C. Based on these conditions, provide specific recommendations for farmers to improve soil health and optimize crop growth.`;
        
        try {
            const aiResponse = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{ role: "system", content: prompt }],
                max_tokens: 150
            });
            const recommendation = aiResponse.data.choices[0].message.content.trim();
            socket.emit('aiResponse', { recommendation });
        } catch (error) {
            socket.emit('aiResponse', { recommendation: "Error generating recommendation. Please try again." });
        }
    });
});

server.listen(5000, () => console.log("Server running on port 5000"));

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 3001;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// History Schema
const historySchema = new mongoose.Schema({
  input: String, // Anonymized or hashed if needed
  verdict: String,
  riskScore: Number,
  timestamp: { type: Date, default: Date.now }
});
const History = mongoose.model('History', historySchema);

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.get('/status', (req, res) => {
  res.json({ status: 'OK', message: 'Phishing Detection API is running' });
});

app.post('/analyze', async (req, res) => {
  const { text, consent } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  // Sanitize input (basic)
  const sanitizedText = text.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  try {
    // Call ML service
    const mlResponse = await fetch('http://localhost:5000/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: sanitizedText }),
    });
    const result = await mlResponse.json();

    // Save to DB if consent given
    if (consent) {
      const history = new History({
        input: sanitizedText.substring(0, 100), // Truncate for privacy
        verdict: result.verdict,
        riskScore: result.riskScore
      });
      await history.save();
    }

    res.json(result);
  } catch (error) {
    console.error('ML service error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
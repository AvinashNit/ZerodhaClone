require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', // Adjust if frontend port differs (e.g., 3000)
  credentials: true,
}));

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  uuid: { type: String, unique: true, default: uuidv4 },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model('User', userSchema);

// Authentication Middleware
function authenticateToken(req, res, next) {
  const token = req.cookies.jwt;
  console.log('Received JWT token in /protected:', token); // Debug
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.uuid = decoded.uuid;
    next();
  } catch (err) {
    console.error('Token verification error:', err.message);
    res.status(403).json({ message: 'Invalid or expired token' });
  }
}

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign({ uuid: user.uuid }, JWT_SECRET, { expiresIn: '24h' });
    console.log('Setting JWT cookie in /login:', token); // Debug

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // False for local dev
      sameSite: 'Lax', // 'Lax' works for local dev; adjust if needed
      maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    });

    res.json({ success: true, message: 'Logged in successfully', uuid: user.uuid });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Signup Route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: existingUser.email === email ? 'Email already exists' : 'Username already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      username,
      password: hashedPassword,
      uuid: uuidv4(),
      email,
    });
    await user.save();

    const token = jwt.sign({ uuid: user.uuid }, JWT_SECRET, { expiresIn: '24h' });
    console.log('Setting JWT cookie in /signup:', token); // Debug

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ success: true, message: 'Signed up successfully', uuid: user.uuid });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Protected Route
app.get('/protected', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ uuid: req.uuid }).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ success: true, user });
  } catch (error) {
    console.error('Protected route error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Logout Route
app.post('/logout', (req, res) => {
  res.clearCookie('jwt', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Lax', // Match signup/login
  });
  res.json({ success: true, message: 'Logged out successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const User = require('../models/User');

// Register user
exports.register = async (req, res) => {
    try {
        console.log('Register request body:', req.body); // Add this line for debugging
        const { name, email, password, number } = req.body;

        // Validate inputs
        if (!name || !email || !password || !number) {
            console.log('Missing fields:', { name, email, password, number }); // Debug log
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields',
                missing: {
                    name: !name,
                    email: !email,
                    password: !password,
                    number: !number
                }
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid email address'
            });
        }

        // Validate phone number
        if (!/^\d{10}$/.test(number)) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid 10-digit phone number'
            });
        }

        // Check if user exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered'
            });
        }

        // Create user
        const user = await User.create({
            name,
            email,
            password,
            number
        });

        // Create token
        const token = user.getSignedJwtToken();

        res.status(201).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                number: user.number
            }
        });
    } catch (error) {
        console.error('Register error details:', error); // Add detailed error logging
        res.status(500).json({
            success: false,
            message: error.message || 'Server Error',
            error: process.env.NODE_ENV === 'development' ? error : undefined
        });
    }
};

// Login user
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate email & password
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Please provide email and password' });
        }

        // Check for user
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Check if password matches
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Create token
        const token = user.getSignedJwtToken();

        res.status(200).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
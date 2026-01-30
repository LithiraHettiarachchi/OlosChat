const User = require('../../models/admin/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (userData) => {
    const { name, email, password } = userData;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error('User already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    return user;
};

const loginUser = async (email, password) => {
    // Check for user
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid credentials');
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    // Generate Token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });

    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token
    };
};

module.exports = {
    registerUser,
    loginUser
};

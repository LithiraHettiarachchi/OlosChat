const authService = require('../../services/admin/authService');

const register = async (req, res) => {
    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await authService.loginUser(email, password);
        res.json(userData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    register,
    login
};

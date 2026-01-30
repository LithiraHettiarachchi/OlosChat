const businessService = require('../../services/admin/businessService');

const createBusiness = async (req, res) => {
    try {
        // req.user is set by auth middleware
        const business = await businessService.createBusiness(req.body, req.user._id);
        res.status(201).json(business);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getBusinesses = async (req, res) => {
    try {
        const businesses = await businessService.getBusinesses();
        res.json(businesses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBusiness = async (req, res) => {
    try {
        const business = await businessService.getBusinessById(req.params.id);
        if (!business) {
            return res.status(404).json({ message: 'Business not found' });
        }
        res.json(business);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBusiness = async (req, res) => {
    try {
        const business = await businessService.updateBusiness(req.params.id, req.body);
        if (!business) {
            return res.status(404).json({ message: 'Business not found' });
        }
        res.json(business);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteBusiness = async (req, res) => {
    try {
        await businessService.deleteBusiness(req.params.id);
        res.json({ message: 'Business removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createBusiness,
    getBusinesses,
    getBusiness,
    updateBusiness,
    deleteBusiness
};

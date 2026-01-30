const Business = require('../../models/admin/businessModel');

const createBusiness = async (data, ownerId) => {
    const business = await Business.create({
        ...data,
        ownerId
    });
    return business;
};

const getBusinesses = async (ownerId) => {
    // If admin, maybe return all? For now, let's return only owned businesses or all if admin?
    // Let's assume admin sees all, regular user sees theirs. 
    // Given the task is "Admin Backend", checking all businesses is valid.
    // But let's support filtering by owner.

    // For now, return all for simplicity as it's an Admin panel.
    const businesses = await Business.find().populate('ownerId', 'name email');
    return businesses;
};

const getBusinessById = async (id) => {
    const business = await Business.findById(id).populate('ownerId', 'name email');
    return business;
};

const updateBusiness = async (id, data) => {
    const business = await Business.findByIdAndUpdate(id, data, { new: true });
    return business;
};

const deleteBusiness = async (id) => {
    await Business.findByIdAndDelete(id);
    return { message: 'Business deleted' };
};

module.exports = {
    createBusiness,
    getBusinesses,
    getBusinessById,
    updateBusiness,
    deleteBusiness
};

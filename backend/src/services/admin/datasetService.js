const Dataset = require('../../models/admin/datasetModel');

const createDatasetRecord = async (fileData, businessId) => {
    const dataset = await Dataset.create({
        businessId,
        filename: fileData.filename,
        originalName: fileData.originalname,
        mimeType: fileData.mimetype,
        size: fileData.size,
        path: fileData.path,
        status: 'uploaded'
    });
    return dataset;
};

const getDatasetsByBusiness = async (businessId) => {
    const datasets = await Dataset.find({ businessId });
    return datasets;
};

const getDatasetById = async (id) => {
    const dataset = await Dataset.findById(id);
    return dataset;
};

module.exports = {
    createDatasetRecord,
    getDatasetsByBusiness,
    getDatasetById
};

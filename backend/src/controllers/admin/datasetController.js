const datasetService = require('../../services/admin/datasetService');

const uploadDataset = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const { businessId } = req.body;
        if (!businessId) {
            return res.status(400).json({ message: 'Business ID is required' });
        }

        const dataset = await datasetService.createDatasetRecord(req.file, businessId);
        res.status(201).json(dataset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getDatasets = async (req, res) => {
    try {
        const { businessId } = req.query;
        if (!businessId) {
            return res.status(400).json({ message: 'Business ID query param is required' });
        }
        const datasets = await datasetService.getDatasetsByBusiness(businessId);
        res.json(datasets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getDataset = async (req, res) => {
    try {
        const dataset = await datasetService.getDatasetById(req.params.id);
        if (!dataset) {
            return res.status(404).json({ message: 'Dataset not found' });
        }
        res.json(dataset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    uploadDataset,
    getDatasets,
    getDataset
};

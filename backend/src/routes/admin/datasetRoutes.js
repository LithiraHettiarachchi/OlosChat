const express = require('express');
const router = express.Router();
const datasetController = require('../../controllers/admin/datasetController');
const upload = require('../../middleware/fileUpload');
const { protect } = require('../../middleware/auth');

router.use(protect); // Protect all routes

router.post('/', upload.single('dataset'), datasetController.uploadDataset);
router.get('/', datasetController.getDatasets);
router.get('/:id', datasetController.getDataset);

module.exports = router;

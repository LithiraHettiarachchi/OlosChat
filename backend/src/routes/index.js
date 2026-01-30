const express = require('express');
const router = express.Router();

// Import Admin Routes
const adminAuthRoutes = require('./admin/authRoutes');
const adminBusinessRoutes = require('./admin/businessRoutes');
const adminDatasetRoutes = require('./admin/datasetRoutes');

// Mount Admin Routes
router.use('/admin/auth', adminAuthRoutes);
router.use('/admin/businesses', adminBusinessRoutes);
router.use('/admin/datasets', adminDatasetRoutes);

module.exports = router;

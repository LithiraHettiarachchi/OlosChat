const express = require('express');
const router = express.Router();
const businessController = require('../../controllers/admin/businessController');
const { protect } = require('../../middleware/auth');

router.use(protect); // Protect all routes

router.route('/')
    .get(businessController.getBusinesses)
    .post(businessController.createBusiness);

router.route('/:id')
    .get(businessController.getBusiness)
    .put(businessController.updateBusiness)
    .delete(businessController.deleteBusiness);

module.exports = router;

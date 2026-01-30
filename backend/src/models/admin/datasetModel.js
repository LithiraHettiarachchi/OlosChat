const mongoose = require('mongoose');

const datasetSchema = new mongoose.Schema({
    businessId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    originalName: {
        type: String,
        required: true
    },
    mimeType: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['uploaded', 'processing', 'ready', 'error'],
        default: 'uploaded'
    }
}, { timestamps: true });

module.exports = mongoose.model('Dataset', datasetSchema);

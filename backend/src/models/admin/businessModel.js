const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    config: {
        // Example config fields
        chatbotName: { type: String, default: 'AI Assistant' },
        primaryColor: { type: String, default: '#000000' }
    }
}, { timestamps: true });

module.exports = mongoose.model('Business', businessSchema);

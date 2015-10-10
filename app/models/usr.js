var mongoose = require('mongoose');

module.exports = mongoose.model('Usr', {
    name: {
        type: String,
        default: ''
    }
    
    location: {
        type: String,
        required: true
    }
});
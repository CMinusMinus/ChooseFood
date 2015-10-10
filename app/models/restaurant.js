var mongoose = require('mongoose');

module.exports = mongoose.model('Restaurant', {
    name: {
        type: String,
        required: true
    },
    
    location: {
        type: String,
        required: true
    },
    
    withinRadius: {
        type: Boolean,
        default: false
    },
    
    isOpen: {
        type: Boolean,
        default: true //Can we use function here?
    },
    
    priceRange: {
        type: Number,
        required: false
    }

});
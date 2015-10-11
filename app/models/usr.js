var mongoose = require('mongoose');

module.exports = mongoose.model('Usr', {
    name: {
        type: String,
        default: 'Anonymous'
    },
    
    location: {
        type: String
    },
                                
    _id: {
        type: Number
    }
});
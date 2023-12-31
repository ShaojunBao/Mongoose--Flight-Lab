const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationsSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'ATL']
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Delta'],
        required: true
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'ATL'], 
        required: true
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            const today = new Date();
            const nextYear = new Date().setFullYear(today.getFullYear() + 1);
            return nextYear;
        }
    },
    destinations: [destinationsSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);


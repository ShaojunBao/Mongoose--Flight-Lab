const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest','United', 'Delta'],
        required: true
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
        
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
      }
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema);


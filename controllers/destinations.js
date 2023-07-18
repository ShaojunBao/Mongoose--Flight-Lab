const Flight = require('../models/flight');

async function create(req,res){
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body)
    try{
        // save any changes made to the flight document
        await flight.save()
    } catch(err){
        console.log(err)
    }
    // respond to the request
    res.redirect(`/flights/${flight._id}`);
}




module.exports = {
    create
}
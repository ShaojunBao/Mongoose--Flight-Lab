const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

async function newTicket(req, res) {
    const tickets = await Ticket.find({}).sort('price');
    const flights = await Flight.find({}); // fetch all flights
    const flightId = req.params.id
    res.render('tickets/new', {
        title: 'Add Ticket', 
        tickets,
        flights,// pass flights to the view
        flightId
    });
}

async function create(req, res) {
    try {
        req.body.flight = req.params.id;
        if (!req.body.seat || !req.body.price || !req.body.flight) {
            throw new Error('Invalid request body');
        }
        await Ticket.create(req.body);
        res.redirect('/tickets/new');
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
}



module.exports = {
    new: newTicket,
    create
}
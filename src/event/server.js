const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static('public'));

// In-memory storage for events and registrations
let events = [
  {
    id: 1,
    name: "Tech Innovators Conference 2024",
    date: "2024-05-15",
    location: "San Francisco, CA",
    description: "Join us for the biggest tech conference of the year!",
  },
];

let registrations = [];

// API to get event details
app.get('/api/events', (req, res) => {
  res.json(events);
});

// API to register for an event
app.post('/api/register', (req, res) => {
  const { name, email, eventId } = req.body;

  if (!name || !email || !eventId) {
    return res.status(400).json({ error: 'Please provide name, email, and event ID.' });
  }

  const event = events.find((e) => e.id === parseInt(eventId));
  if (!event) {
    return res.status(404).json({ error: 'Event not found.' });
  }

  const registration = { id: registrations.length + 1, name, email, eventId };
  registrations.push(registration);

  res.status(201).json({ message: 'Registration successful!', registration });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
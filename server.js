const express = require('express');
const path = require('path');


const app = express();
const PORT = 3000;


// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


// Example API endpoint
app.get('/api/status', (req, res) => {
res.json({
company: 'Quantum',
status: 'Operational',
year: new Date().getFullYear()
});
});


app.listen(PORT, () => {
console.log(`Quantum server running at http://localhost:${PORT}`);
});
require('dotenv').config();
const bodyParser=require('body-parser')
const bcrypt = require('bcrypt');
const userRoutes = require('./routes/UserRoutes');
const reviewsRoutes = require('./routes/reviewsRoutes')
const coachesRoutes = require('./routes/coachesRoutes')
const gamesRoutes = require('./routes/gamesRoutes')
const videoRoutes = require('./routes/videoRoutes')
const connectDB = require(`./config/db`);
const express = require('express');
const app = express();
var cors = require('cors')

const port = process.env.PORT || 5000; // Set the port


connectDB();
// Middleware
app.use(cors())
app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use('/upload', express.static('upload'));
app.use('/users',userRoutes);
app.use('/coaches',coachesRoutes);
app.use('/games',gamesRoutes);
app.use('/reviews',reviewsRoutes)
app.use('/videos',videoRoutes)
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
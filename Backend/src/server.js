const env = require('dotenv').config();
const { json } = require('body-parser');
const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); 
app.use(cors());

// routes
const guestRoutes = require('./routes/guest');
const orgGuest = require('./routes/orgGuest');
const adminRoutes = require('./routes/admin/admin');
const instructorRoutes = require('./routes/instructor');
const courseRoutes = require('./routes/course');
const passwordReset = require("./routes/resetPassword");



   
// app.use
app.use(express.json());  
app.use('/api', guestRoutes);
app.use('/api', adminRoutes);
app.use('/api', orgGuest);
app.use('/api', instructorRoutes); 
app.use('/api', courseRoutes);
app.use("/api/password-reset", passwordReset);



// server listening
app.listen(port, () => console.log(`server running on port ${port}`)); 

//mongo db & mongoose
mongoose.connect(
    `mongodb+srv://tarun:tarun@cluster0.2qrwukj.mongodb.net/`,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,

    }
).then(() => {
    console.log(`database connected`);
});

 



app.get('/', (req, res, next) => {
    res.send(`checked `);

});
app.post('/data', (req, res, next) => {
    res.status(200).json({message : req.body});

});






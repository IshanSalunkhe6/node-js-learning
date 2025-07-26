const express = require('express');
const mongoose = require('mongoose');
const path=require("path");
const URL = require('./models/url');
const urlRoute=require("./routes/url");  // ./ means current directory 
const staticRouter=require("./routes/staticRouter")
const {logReqRes}=require('./middleware');

const app=express();

//Connection
mongoose
    .connect('mongodb://127.0.0.1:27017/urlshortner', // mongosh in terminal for link
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

// Handle connection events
const db = mongoose.connection;
db
    .on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});




//middlewares
app.use(express.urlencoded({extended:false}));

app.use(logReqRes("log.txt"));

app.use(express.json())  // to parse incoming body data



// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));



// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'))




// setup for routing
app.use('/url',urlRoute);
app.use('/',staticRouter);

app.get('/url/:shortId', async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  return res.redirect(entry.redirectURL);
});



app.listen(8001, () => {
  console.log(`Server is listening at http://localhost:8001`);
});
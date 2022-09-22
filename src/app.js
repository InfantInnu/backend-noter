const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
// app.use(express.json());
require('./db/mongoose.js');


const app = express();
app.use(cors());
app.use(express.json());

const noteRouter = require("./routers/note-routers.js");
const userRouter = require("./routers/user-routers");


app.use((req, res, next) => {
    res.set("Access-Control-Allow-Orgin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    next();
});

app.use(noteRouter);
app.use(userRouter);

app.get("/", (req, res) =>
  res.send(`Hello Noter app`)
);


// if(process.env.NODE_ENV === 'production')
//  {
//      app.use('/' , express.static('client/build'))

//      app.get("*", (req, res) => {

//           res.sendFile(path.join(__dirname, 'client/build/index.html'))
       
//      });
//  }

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
});





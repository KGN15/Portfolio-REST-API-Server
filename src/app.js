const express = require('express');
const path = require('path');
const app = express();
const authRouter = require('./router/auth.routes')
const messageRouter = require('./router/message.route')
const projectRouter = require('./router/project.routes')
const cors = require('cors');
const cookieParser = require("cookie-parser");



const allowedOrigins = [
  process.env.PORTFOLIO_URL,   
  process.env.ADMIN_URL,        
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));


app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.send('Express server Working!');
});

app.use('/api/auth', authRouter)
app.use('/api/message', messageRouter)
app.use('/api/project', projectRouter)



module.exports = app


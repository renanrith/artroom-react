const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());

const userRoute = require('./User');
app.use('/user', userRoute);

const uploadRoute = require('./Upload');
app.use('/upload', uploadRoute);

app.listen(8080, (req, res) => {
    console.log("server rodando")
});
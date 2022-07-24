const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const apiRouter = require('./router/router');

app.use(cors());

app.use(express.json());
app.get('/', (req, res) => res.send('welcome'));
app.use('/api', apiRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server on port : ${process.env.PORT}`);
});

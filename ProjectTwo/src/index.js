const express = require('express');
const errorHandler = require('./api/middleware/errorHandler');
const connectDb = require('./api/config/dbConnection');
require('dotenv').config();

connectDb();
const app = express();

const port = 5000 || process.env.PORT;

app.use(express.json());
app.use('/api/person', require('./api/routes/personRoutes'));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

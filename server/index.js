const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const routes = require('./src/routes/api');

app.use(cors());
app.use(express.json());
app.use('/static', express.static('public'));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

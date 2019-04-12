const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(express.json({urlencoded: true}));
app.use(cors());
app.use(express.static('dist'));

const PORT = process.env.PORT || 3020;

app.listen(PORT, (err, res) => {
  if (err) {
      console.log(err)
  } else {
      console.log(`The army of ${PORT} has arrived`);
  }
});
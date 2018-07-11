const express = require('express');

const app = express();
const theseRobots = require('./models/robots');


app.get('/robots', (req, res) => {
  console.log(theseRobots)
  res.render('index.ejs', {
    robots: theseRobots
  })
});

// Delete Route
app.delete('/robots/:index', (req, res) => {
  Fruits.splice(req.params.index, 1);
  res.redirect('/robots');
  res.send('delete working');
});



app.listen(3000, () => {
  console.log("Server is on and listening");
});

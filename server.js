var express = require('express')
var app = express()
var moment = require('moment')

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

app.get('/:reqDate', function(req, res) {
  if (moment(req.params.reqDate, "X", true).isValid()) {
    res.json({
      unix: req.params.reqDate,
      natural: moment.unix(req.params.reqDate).format('MMMM DD, YYYY')
    });
  } else if (moment(req.params.reqDate).isValid()) {
    res.json({
      unix: moment(req.params.reqDate).format("X"),
      natural: moment(req.params.reqDate).format('MMMM DD, YYYY')
   });
 } else {
   res.json({
     unix: null,
     natural: null
   });
 }
});


app.listen(process.env.PORT || 3000);

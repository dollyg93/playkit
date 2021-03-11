const path = require('path');
const express = require('express');

const app = express();


var distDir = './dist/';

app.use(express.static(path.join(__dirname, distDir)))
app.use('/auth', (req, res) => {
  res.sendFile(path.join(__dirname, distDir + '/index.html'));
});

console.log(distDir);

// app.use((req, res, next) => {
//   const err = new httpError(404)
//   return next(err);
// });

// app.use((err, req, res, next) => {

//   res.status(err.status || 500).json({
//     message: err.message
//   });
//   next(err);
// });

app.listen(process.env.PORT || 3000, () => {
    console.info(`server started on port 3000`);
});

module.exports = app;
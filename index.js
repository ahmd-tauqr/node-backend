const express = require('express');

const pageRoutes = require('./src/routes/page-routes');

// application
const app = express();

// middlewares
app.use(express.json());

// routing
// app.get('/', (req, res, next) => {
//   res.status(200).send({
//     success: true,
//     data: 'some data...',
//     error: null,
//   });
// });
// app.get('/about-us', (req, res) => {
//   res.send('This is about us page');
// });
// app.post('/hello', (req, res, next) => {
//   console.log(req.body);
//   if (req.body.name) {
//     //   store to db
//     res.send(`Hello ${req.body.name}`);
//   }
//   res.send('Hello');
// });
// post
// delete
// put
// get
// options
// head

app.use('/pages', pageRoutes);

app.listen(3000, () => {
  console.log('server is running on port 3000');
});

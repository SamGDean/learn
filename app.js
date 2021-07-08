var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
const bookRouter = express.Router();

bookRouter.route("/books")
  .get((req, res) => {
    const response = { hello: 'This is my API' };
    res.json(response);
  });
app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

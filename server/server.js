const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.get(express.static('../client/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log(`Now listening on ${PORT}!`);
});
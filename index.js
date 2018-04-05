const express = require('express');

app = express();
app.set('view engine', 'html')
app.get('/', (req, res) => res.render('src/index.html'));

app.listen(8000, () => console.log('server listening at 8000'));

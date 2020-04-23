const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => console.log('I-Am-three-D app listening on port 3000!'));
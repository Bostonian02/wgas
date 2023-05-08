const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const postsRouter = require('./routes/posts');

app.use(cors())
app.use('/api/posts', postsRouter);

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
})
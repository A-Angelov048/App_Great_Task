const express = require('express');

const expressConfig = require('./config/expressConfig');
const router = require('./router');

const app = express();
const port = 3000;

expressConfig(app);
app.use(router);

app.listen(port, () => console.log(`Express server running on port: ${port}. You can make requests to http://localhost:${port}`));
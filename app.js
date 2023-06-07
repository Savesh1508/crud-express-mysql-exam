const express = require('express');
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 3030;

const routes = require("./routes/index.js");

app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server ${PORT} - da ishlamoqda`);
})
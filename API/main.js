const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./src/routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/", apiRouter);

app.listen(PORT, () =>{
    console.log(`API is listening on port ${PORT}`);
});
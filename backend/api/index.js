const express = require("express");
const routes = require("./routes");
var cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());

routes(app);

app.listen(port, () => {
  console.log(`Servidor rodando na ${port}`);
});

module.epxorts = app;

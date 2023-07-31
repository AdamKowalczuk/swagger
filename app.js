const express = require("express");
const serverless = require("serverless-http");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = YAML.load("./swagger.yaml"); // Load the Swagger YAML file
const app = express();
app.use("/swagger", swaggerUI.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports.handler = serverless(app);

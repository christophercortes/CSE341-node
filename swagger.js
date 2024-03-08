const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "localhost:3001",
  schemes: ["https", "http"],
};

const outputFile = "./swagger.json";
const routes = ["./routes/index.js"];

// This will generate swagger.json
swaggerAutogen(outputFile, routes, doc);

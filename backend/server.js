const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const port = 3001;
const routes = require("./routes");

main().catch((err) => console.log(err));

async function main() {

  const app = express(); 
  
  await mongoose.connect("mongodb://mongo:27017/todos", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  app.use(cors({
    origin: '*'  // Permite todos los orígenes
  }));
  app.use(express.json());
  app.use("/api", routes);

  app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
  });
}


//hola

const express = require("express");
const formMiddleware = require("express-formidable");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(formMiddleware());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("public/index.html");
});

app.post("/api/fileanalyse", (req, res) => {
  console.log(req.fields);
  console.log(req.files);
  const file = req.files[0]
  console.log(file);
  console.log("-------------------------------");
  
  res.send({message: "Recieved"});
})

app.listen(PORT, ()=>console.log("Server on"));


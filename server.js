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
  console.log(req.files);
  if(req.files.upfile) {
    const {name, type, size} = req.files.upfile;
    res.status(201).send({name, type, size});
  } else {
    res.status(404).send({error: "No file was found in the request object"});
  }
  
})

app.listen(PORT, ()=>console.log("Server on"));


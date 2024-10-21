import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req,res) => {
  res.render("index.ejs");
});

app.get("/muaythai", (req,res) => {
    res.render("muaythai.ejs");
  });

app.get("/boxing", (req,res) => {
  res.render("boxing.ejs");
});

app.get("/bjj", (req,res) => {
    res.render("bjj.ejs");
  });
  
app.get("/mma", (req,res) => {
    res.render("mma.ejs");
});
  
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
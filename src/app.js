const express=require("express");
const app=express();
const hbs=require("hbs");
const path=require("path");
const port=process.env.PORT || 3000 ;//default it will take port number which will to assigned to it else it will take 3000
const staticPath=path.join(__dirname,'../public');
const partialPath=path.resolve("partials");
console.log(partialPath);
hbs.registerPartials(partialPath);
app.set("view engine","hbs");
 app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
   res.render("404");
});
app.listen(port,()=>console.log(`listening to port ${port}`));
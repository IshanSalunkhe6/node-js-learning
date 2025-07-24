const express=require("express");

const app=express();

app.get('/',(req,res)=>{
    return res.send("Home page");
});

app.listen(3000, 'localhost', () => {
  console.log(`Server running at http://localhost:${3000}/`);
});

const express = require('express');
const users=require("./MOCK_DATA.json")  // import data from directory
const app = express();

app.get('/', (req, res) => {
  res.send('<h1> Hello, World! </h1>');
});

app.get("/api/users",(req,res)=>{
  return res.json(users);
})

// app.get("/api/users/:id",(req,res)=>{
//   const id=Number(req.params.id);
//   const user=users.find((user)=>user.id===id);
//   return res.json(user);
// })

app
   .route("/api/users/:id")
   .get((req,res)=>{
  const id=Number(req.params.id);
  const user=users.find((user)=>user.id===id);
  return res.json(user);
})
   .patch((req,res)=>{
    return res.json({"status":"pending"});

   });

app.get("/users",(req,res)=>{
  const html=`
  <ul> 
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html)
})

app.listen(8080, () => {
  console.log(`Server is listening at http://localhost:8080`);
});
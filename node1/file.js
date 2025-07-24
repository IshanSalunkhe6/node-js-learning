const fs=require('fs');
const os=require('os')

// console.log(os.cpus().length)
//8 thread

// // sync write
// const r=fs.writeFileSync("./test.txt","Hello world");

// // async write
// fs.writeFile("./test.txt","hellow world async",(err)=>{});

//sync read

// const result=fs.readFileSync('./test.txt','utf-8');
// console.log(r)

//async read

// fs.readFile('./test.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }else{
//         console.log(result);
//     }
// });


//None-Blocking opr

// console.log("1")

// fs.readFile('./test.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }else{
//         console.log(result);
//     }
// });

// console.log("2")

// 1
// 2
// hellow world async

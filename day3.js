//prommises for asynchronous is an object
//js is single threaded
/*
const promiseOne=new Promise((resolve,reject)=>{
console.log("promise task 1");
reject("Promises passed by using resolvee");
let msg=true;
if(msg==true){
    console.log("message using promises failed");
}else{
    console.log("error...");
}
setTimeout(()=>{
    console.log(reject("hello"));
    
},1000)
});
promiseOne.then((result)=>{
    console.log(result);
}).catch((error)=>{
console.log(error);
})
*/
//async/await

/*
console.log("1");
async function test(){
console.log("2");
 await console.log("3");
console.log("4");   //4 baad mein

}
t1=test();
console.log("5");
*/
//create promises that will print username and password using resolve and if username 
//and password not found then it will call reject state and print ERROR.....
/*
 new promise((resolve, reject)=>{
setTimeout(function(){
    let err=true;
    if(!err){
        resolve("user: ABC, pssword:1223");
    }else{
        reject("ERROR...:data fail");
    }
 },2000);
}).then((result)=>{
    console.log(result);
    
}).catch((error)=>
{
console.log(error);
});  */


async function test(){
    console.log("message:2");
  const response=   await fetch("./students.json");
  console.log(response.status);
  
    const stdn=await response.json();
    return stdn;
    console.log("message:3");
    
}
test().then((res)=>{
    console.log(res);
    
}).catch((error)=>{
    console.log(error);
    
})
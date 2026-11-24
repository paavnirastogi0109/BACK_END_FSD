//Event
//Eventemitter-on(emit event param, callabck)-register event or event listener,emit()-trigger event/create event/fire event
const EventEmitter=require('events');
class MyEvent extends EventEmitter{
}
const events= new MyEvent();
events.once("greet",(name)=>{
console.log(`hello cse 24 my name is ${name}`);//template literals- `${var}`
})
events.on("exit",()=>{})
events.emit("greet","Satwik");
events.emit("greet","Satwik");
events.emit("greet","Satwik");
events.emit("exit");
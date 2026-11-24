//stimulate dom-like event handling in node.js using events
//addEventlistener-.on()
//dispatchEvent-.emit()
const EventEmitter=require('events');
const emitter=new EventEmitter();
emitter.on("click",()=>{
    console.log("click event triggered");
    console.log(`hello cse 24${name}`)
});
emitter.on("mouseover",()=>{
    console.log("mouseover event triggered");
});
emitter.emit('click','paavni');
emitter.emit('mouseover');
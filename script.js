const incr=document. getElementById("incr");
const decr=document. getElementById("decr");
const res=document. getElementById("res")
const display=document. querySelector("span");
let count=0;
display.textContent=count;

function increment(){
    count++;
    display.textContent=count;

}

function decrement(){
    count--;
    display.textContent=count;
}

function reset(){
    count=0;
    display.textContent=count;
}

incr.addEventListener("click",()=>{
    setTimeout(()=>{
        increment()
    }, 200);
})
decr.addEventListener("click",()=>{
     setTimeout(()=>{
        decrement()
     }, 200);
})

res.addEventListener("click",()=>{
    setTimeout(()=>{
        reset()
    }, 200);
})
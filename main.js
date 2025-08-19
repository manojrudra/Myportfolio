var typed= new Typed(".ji",{
    strings:["Frontend Developer","FullStack Developer"]    ,
    typeSpeed: 50,
    backspeed:100,
    backDealy:1000,
    loop:true

});

console.log("cjb")

const btn = document.querySelector("#menu")
const box  = document.querySelector(".small-container")
let checked = 0

const hidden =   box.children

let arr = Array.from(hidden)
console.log(arr)

arr.forEach((e)=>{
    e.addEventListener("click",()=>{
         box.style.display="none"
    })
})

btn.addEventListener("click",()=>
    {
    console.log("ready")
   
    if(checked==0){
        box.style.display="block"
        checked=1
    }
    else{
        box.style.display="none"
        checked=0
    
    }
})

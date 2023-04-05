const You={
    x:0,
    y:0,
    color:"white",
    set:()=>{

    },
    move:()=>{

    }
}
const Pixel={
    x:document.querySelector(".pixel").clientWidth,
    y:document.querySelector(".pixel").clientHeight
}
const Wrapper={
    x:document.querySelector("#wrapper").clientWidth,
    y:document.querySelector("#wrapper").clientHeight
}
function createPixel(){
    const newPixel=document.createElement("div");
    newPixel.classList.add("pixel");
    const wrapper=document.querySelector("#wrapper");
    wrapper.appendChild(newPixel);
}
window.addEventListener("load",()=>{
    for(let i=0;i<40*60-1;i++){
        createPixel();
    }
})
console.log(Wrapper.y/Pixel.y);

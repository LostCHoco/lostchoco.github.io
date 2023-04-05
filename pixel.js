const Wrapper={
    width:window.innerWidth,
    height:window.innerHeight,
    setSize:(x,y)=>{
        Wrapper.width=x;
        Wrapper.height=y;
        const wrapper=document.querySelector("#wrapper");
        wrapper.style.width=Wrapper.width+"px";
        wrapper.style.height=Wrapper.height+"px";
        wrapper.style.gridTemplateRows="repeat("+Wrapper.height/10+",1fr)";
        wrapper.style.gridTemplateColumns="repeat("+Wrapper.width/10+",1fr)";
    },
    remake:()=>{
        const wrapper=document.querySelector("#wrapper");
        wrapper.remove();
        const newWrapper=document.createElement("section");
        newWrapper.id="wrapper";
        document.body.appendChild(newWrapper);
    }
}
document.body.style.gridTemplateColumns
function createPixel(){
    const newPixel=document.createElement("div");
    newPixel.classList.add("pixel");
    const wrapper=document.querySelector("#wrapper");
    wrapper.appendChild(newPixel);
}
window.addEventListener("load",()=>{
    for(let i=0;i<60*80;i++){
        createPixel();
    }
})
window.addEventListener("resize",(x,y)=>{
    x=window.innerWidth-window.innerWidth%10;
    y=window.innerHeight-window.innerHeight%10;
    Wrapper.remake();
    Wrapper.setSize(x,y);
})

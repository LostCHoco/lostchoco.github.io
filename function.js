let outerScope=null;
function brightMode(){
    let btn=document.querySelector("#brightBtn");
    let all=document.querySelectorAll("*");
    if(btn.textContent=="Light Mode"){
        btn.textContent="Dark Mode";
        all.forEach(i=>i.classList.add("dark"));
        btn.classList.remove("light");
    }else if(btn.textContent=="Dark Mode"){
        btn.textContent="Light Mode";
        all.forEach(i=>i.classList.remove("dark"));
        btn.classList.add("light");
    }
}
document.querySelector("#brightBtn").innerHTML="Light Mode";
brightMode();

function tag(tag){
    return document.createElement(tag);
}
const Notepad={
    input:(a)=>{
        const body=document.querySelector("#notepad");
    let txt=a.key;
    const actionKey=["Enter","Backspace","Delete","Escape"];
    if(txt.length<2||txt in actionKey){
        switch(a.key){
            case 'Enter':{
                body.appendChild(tag("br"));
                break;
            }
            case "Backspace":
            case "Delete":{
                body.innerHTML=body.innerHTML.slice(0,-1);
                break;
            }
            case "Escape":{
                body.innerHTML="";
                break;
            }
            default:{
                body.innerHTML+=txt;
            }
        }
    }
    }
}

//pixel part
class You {
    x=0;
    y=0;
    color="white";
    setCssClass() {
        const myPixel=document.querySelectorAll(".bigPixel")[this.x+this.y*60];
        myPixel.classList.add("you");
    }
    setPosition(e){
            switch(e.keyCode){
                case 37:
                    if(this.x!==0)this.x--;
                    break;
                case 38:
                    if(this.y!==0)this.y--;
                    break;
                case 39:
                    if(this.x!==59)this.x++;
                    break;
                case 40:
                    if(this.y!==39)this.y++;
                    break;
            }
            console.log(this.x,this.y);
        
    }
    move(){
        const beforePixel=document.querySelector(".you");
        beforePixel.classList.remove("you");
        this.setCssClass();
    }
    constructor(){
        this.x=0;
        this.y=0;
        this.setCssClass();
    }
}
function createPixel(){
    const newPixel=document.createElement("div");
    newPixel.classList.add("bigPixel");
    const wrapper=document.querySelector("#wrapper");
    wrapper.appendChild(newPixel);
}

//windows part

window.addEventListener("keydown",(a=>{
    const body=document.querySelector("#notepad");
    Notepad.input(a);

    if(body.innerHTML.includes("/text<br>")){
        let text=document.createElement("input");
        text.type="text";
        body.after(text);
        body.innerHTML=body.innerHTML.replace("/text<br>","");
    }else if(body.innerHTML.includes("/radio<br>")){
        let radio=document.createElement("input");
        radio.type="radio"
        body.after(radio);
        body.innerHTML=body.innerHTML.replace("/radio<br>","");
    }else if(body.innerHTML.includes("/checkbox<br>")){
        let checkbox=document.createElement("input");
        checkbox.type="checkbox";
        body.after(checkbox);
        body.innerHTML=body.innerHTML.replace("/checkbox<br>","");
    }else if(body.innerHTML.includes("/delete<br>")){
        let x=document.querySelectorAll("#notepad+*");
        x.forEach(n=>n.remove());
        body.innerHTML=body.innerHTML.replace("/delete<br>","");
        outerScope=null;
    }else if(body.innerHTML.includes("/deleteall<br>")){
        let x=document.querySelectorAll("#notepad~*");
        x.forEach(n=>n.remove());
        body.innerHTML=body.innerHTML.replace("/deleteall<br>","");
        outerScope=null;
    }else if(body.innerHTML.includes("/pixel<br>")){
        let wrapper=document.createElement("div");
        wrapper.id="wrapper";
        body.after(wrapper);
        body.innerHTML=body.innerHTML.replace("/pixel<br>","");
        for(let i=0;i<40*60;i++){
            createPixel();
        }
        const me=new You();
         outerScope=me;
    }
    if(outerScope!==null){
        outerScope.setPosition(a);
        outerScope.move();
    }
}))
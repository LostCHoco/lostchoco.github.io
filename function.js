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
window.onkeydown=(a)=>{
    const body=document.querySelector("#notepad");
    let txt=a.key;
    const arr=["Control", "Shift", "Alt", "Tab",
            "HangulMode", "HanjaMode", "Meta",
            "ArrowLeft", "ArrowRight",
            "ArrowUp", "ArrowDown",
            "Insert", "Home", "End", "Process",
            "PageUp", "PageDown", "CapsLock",
            "ScrollLock", "NumLock", "Pause",
            "F1","F2","F3","F4","F5","F6",
            "F7","F8","F9","F10","F11","F12"]
    if(a.key=="Enter"){
        body.appendChild(tag("br"));
    }else if(arr.includes(a.key)){
        txt="";
    }else if(a.key=="Backspace"||a.key=="Delete"){
        body.innerHTML=body.innerHTML.slice(0,-1);
    }else if(a.key=="Escape"){
        body.innerHTML="";
    }else{
        body.innerHTML+=txt;
    }

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
    }else if(body.innerHTML.includes("/deleteall<br>")){
        let x=document.querySelectorAll("#notepad~*");
        x.forEach(n=>n.remove());
        body.innerHTML=body.innerHTML.replace("/deleteall<br>","");
    }
}
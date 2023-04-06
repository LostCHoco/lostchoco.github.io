function addZero(n){
    if(n<10){
        n="0"+n;
    }else{
        n=n.toString();
    }
    return n;
}
function getCharMorphology(n){
    let arr=new Array(15);
    switch(n){
        case 1:{
            arr=[0,0,1,0,0,1,0,0,1,0,0,1,0,0,1];
            break;
        }
        case 2:{
            arr=[1,1,1,0,0,1,1,1,1,1,0,0,1,1,1];
            break;
        }
        case 3:{
            arr=[1,1,1,0,0,1,1,1,1,0,0,1,1,1,1];
            break;
        }
        case 4:{
            arr=[1,0,1,1,0,1,1,1,1,0,0,1,0,0,1];
            break;
        }
        case 5:{
            arr=[1,1,1,1,0,0,1,1,1,0,0,1,1,1,1];
            break;
        }
        case 6:{
            arr=[1,1,1,1,0,0,1,1,1,1,0,1,1,1,1];
            break;
        }
        case 7:{
            arr=[1,1,1,0,0,1,0,0,1,0,0,1,0,0,1];
            break;
        }
        case 8:{
            arr=[1,1,1,1,0,1,1,1,1,1,0,1,1,1,1];
            break;
        }
        case 9:{
            arr=[1,1,1,1,0,1,1,1,1,0,0,1,1,1,1];
            break;
        }
        case 0:{
            arr=[1,1,1,1,0,1,1,0,1,1,0,1,1,1,1];
            break;
        } 
    }
    return arr;
}
function setChar(index,char){
    let sub=document.querySelectorAll(".subPanel").item(index);
        let pixel=sub.querySelectorAll(".pixel");
        let i=0;
        let pixelIndex=getCharMorphology(char);
        pixel.forEach(b=>{
                    if(pixelIndex[i]==1){
                        b.classList.add("on");
                    }else{
                        b.classList.remove("on");
                    }
                    i++;
        })
}
function setCol(){
    let sub=document.querySelectorAll(".subPanel");
    for(i=2;i<sub.length;i+=3){
        let pixel=sub.item(i).querySelectorAll(".pixel");
        let pixelIndex=1;
        pixel.forEach(n=>{
            if(pixelIndex==5||pixelIndex==11){
                n.classList.add("on");
            }else{
                n.classList.remove("on");
            }
            pixelIndex++;
        })
    }
}
function setSubPanel(){
    let panel=document.querySelector("#timePanel");
    let n=1;
    for(i=1;i<=11;i++){
        let subPanel=document.createElement("div");
        if(i==n*4-2){
            subPanel.className="spacePanel";
            n++;
        }else{
            subPanel.className="subPanel";
        }
        panel.appendChild(subPanel);
    }
}
function setTimePanel(){
    setSubPanel();
    let sub=document.querySelectorAll("#timePanel>div");
    for(i=0;i<sub.length;i++){
        for(j=0;j<sub.item(i).clientWidth/2;j++){
            let pixel=document.createElement("div");
            pixel.className="pixel";
            sub.item(i).appendChild(pixel);
        }
    }
    setCol();
}
function setTime(){
    let now=new Date();
    let hour=addZero(now.getHours());
    let min=addZero(now.getMinutes());
    let sec=addZero(now.getSeconds());
    let time=hour+min+sec;
    let i=0;
    let arr=[0,1,3,4,6,7];
    arr.forEach(n=>{
        setChar(n,parseInt(time.substr(i,1)));
        i++;
    })
}
window.onload=()=>{
    setTimePanel();
    setTime();
}
setInterval(setTime,1000);
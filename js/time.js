function pixelNumber(n){
    const pixel=[
        [1,1,1,1,0,1,1,0,1,1,0,1,1,1,1],  //0
        [0,0,1,0,0,1,0,0,1,0,0,1,0,0,1],  //1
        [1,1,1,0,0,1,1,1,1,1,0,0,1,1,1],  //2
        [1,1,1,0,0,1,1,1,1,0,0,1,1,1,1],  //3
        [1,0,1,1,0,1,1,1,1,0,0,1,0,0,1],  //4
        [1,1,1,1,0,0,1,1,1,0,0,1,1,1,1],  //5
        [1,1,1,1,0,0,1,1,1,1,0,1,1,1,1],  //6
        [1,1,1,0,0,1,0,0,1,0,0,1,0,0,1],  //7
        [1,1,1,1,0,1,1,1,1,1,0,1,1,1,1],  //8
        [1,1,1,1,0,1,1,1,1,0,0,1,1,1,1]   //9
    ]
    return pixel[n];
}

function setChar(index,char){
    let sub=document.querySelectorAll(".subPanel").item(index);
        let pixel=sub.querySelectorAll(".pixel");
        let i=0;
        let pixelIndex=pixelNumber(char);
        pixel.forEach(b=>{
                    if(pixelIndex[i]==1){
                        b.classList.add("on");
                    }else{
                        b.classList.remove("on");
                    }
                    i++;
        })
}
function setPixelColumn(){
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
    setPixelColumn();
}
function setPixelTime(){
    const now=new Date();
    const hour=now.getHours().toString().padStart(2,'0');
    const min=now.getMinutes().toString().padStart(2,'0');
    const sec=now.getSeconds().toString().padStart(2,'0');
    const time = hour + min + sec;
    let i=0;
    let arr=[0,1,3,4,6,7];
    arr.forEach(n=>{
        setChar(n,parseInt(time.substr(i,1)));
        i++;
    })
}
window.onload=()=>{
    setTimePanel();
    setPixelTime();
}
setInterval(setPixelTime,1000);
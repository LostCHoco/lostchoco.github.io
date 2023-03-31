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
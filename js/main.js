let btn=document.querySelector(".circle");
let h=document.querySelectorAll("h2");
let h1=document.querySelectorAll("h1");
let h2=document.querySelectorAll("h3");
let cols=document.querySelectorAll(".col");
let boxes=document.querySelectorAll(".last-sec .box");
let ps=document.querySelectorAll(".row2");
let p=document.querySelectorAll(".row1 p");
let top_p=document.querySelectorAll(".info p");





function darkmode(){
    btn.classList.add("clicked");
for(let i=0;i<h.length;i++){
    h[i].classList.add("dark");
}
for(let i=0;i<h1.length;i++){
    h1[i].classList.add("dark");
}
for(let i=0;i<h2.length;i++){
    h2[i].classList.add("dark");
}
for(let i=0;i<cols.length;i++){
    cols[i].classList.add("dark");
}
for(let i=0;i<boxes.length;i++){
    boxes[i].classList.add("dark");
}
for(let i=0;i<ps.length;i++){
    ps[i].classList.add("dark");
}
for(let i=0;i<p.length;i++){
    p[i].classList.add("dark");
}
for(let i=0;i<top_p.length;i++){
    top_p[i].classList.add("dark");
}
let background=document.querySelector("main")
background.classList.add("dark");
document.body.style.backgroundColor=" hsl(230, 17%, 14%)";
}
function lightmode(){
    btn.classList.remove("clicked");
    for(let i=0;i<h.length;i++){
        h[i].classList.remove("dark");
    }
    for(let i=0;i<h1.length;i++){
        h1[i].classList.remove("dark");
    }
    for(let i=0;i<h2.length;i++){
        h2[i].classList.remove("dark");
    }
    for(let i=0;i<cols.length;i++){
        cols[i].classList.remove("dark");
    }
    for(let i=0;i<boxes.length;i++){
        boxes[i].classList.remove("dark");
    }
    for(let i=0;i<ps.length;i++){
        ps[i].classList.remove("dark");
    }
    for(let i=0;i<p.length;i++){
        p[i].classList.remove("dark");
    }
    for(let i=0;i<top_p.length;i++){
        top_p[i].classList.remove("dark");
    }
    let background=document.querySelector("main")
    background.classList.remove("dark");
    document.body.style.backgroundColor="white";
}
btn.onclick =function(){
    if(btn.classList.contains("clicked")){
        lightmode();
    }else{
        darkmode();
    }
}

gods = window.localStorage.getItem("godinfo");
img = window.localStorage.getItem("imgtest");
godname = window.localStorage.getItem("godname");
godiformation = window.localStorage.getItem("godinformation");
console.log(godiformation);
document.getElementById("GodName").innerText = godname;
document.getElementById("bodyinfo").innerText = gods;
document.getElementById("godpic").src = img;
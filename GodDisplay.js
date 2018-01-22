gods = window.localStorage.getItem("godinfo");
img = window.localStorage.getItem("imgtest");
godiformation = window.localStorage.getItem("godinformation");
console.log(godiformation);
document.getElementById("bodyinfo").innerText = gods;
document.getElementById("godpic").src = img;
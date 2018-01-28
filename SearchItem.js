j = window.localStorage.getItem("count");
itempic = JSON.parse(window.localStorage.getItem("searchPic"));
itemdescript = JSON.parse(window.localStorage.getItem("searchDescription"));
itemname = JSON.parse(window.localStorage.getItem("searchName"))

for(i = 0; i < j; i++)
{


    var a1 = "<div class='card bg-transparent' style=\"width: 15rem;\" ><img class=card-img-top src= ";
    var a = itempic[i];
    var a2 = " ><div class='card-block'><h5 class='card-title'>";
    var a6 = itemname[i];
    var a5 = "</h3><p class='card-text'>";
    var a4 = itemdescript[i];
    var a3 = "</p></div></div>";

    var g;

    g = document.createElement('div');
    g.id = i;
    document.getElementById("searchcards").appendChild(g);
    var abc = a1 + a + a2 + a6 + a5 + a4 + a3;

    document.getElementById(g.id).innerHTML = abc;
}
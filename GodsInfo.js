gods = [];
godsinfo = [];

function ShowGods(value) {
var godPic = document.createElement('IMG');
gods.push(value);
godPic.src = value.godIcon_URL;
var godname = value.Name + "\n" + value.Title;
 var godinfo =  value.Ability1 + ": "+value.Ability_1.Description.itemDescription.description + "\nCooldown: " +
    value.Ability_1.Description.itemDescription.cooldown + "    Mana Cost: "+ value.Ability_1.Description.itemDescription.cost + "\n\n" +
    value.Ability2 + ": "+value.Ability_2.Description.itemDescription.description + "\nCooldown: " +
    value.Ability_2.Description.itemDescription.cooldown + "    Mana Cost: "+ value.Ability_2.Description.itemDescription.cost + "\n\n" +
    value.Ability3 + ": "+value.Ability_3.Description.itemDescription.description + "\nCooldown: " +
    value.Ability_3.Description.itemDescription.cooldown + "    Mana Cost: "+ value.Ability_3.Description.itemDescription.cost + "\n\n" +
    value.Ability4 + ": "+value.Ability_4.Description.itemDescription.description + "\nCooldown: " +
    value.Ability_4.Description.itemDescription.cooldown + "    Mana Cost: "+ value.Ability_4.Description.itemDescription.cost + "\n\nPassive: " +
    value.Ability5 + ": "+value.Ability_5.Description.itemDescription.description;
godsinfo.push(godinfo);
var imgtest = value.godCard_URL;
godPic.title = value.Name + "\n" + value.Title;
godPic.onclick = function () {
    //document.getElementById("GodName").innerText = "hello";
    window.localStorage.setItem("godname", godname);
    window.localStorage.setItem("godinfo", godinfo);
    window.localStorage.setItem("imgtest", imgtest);
    location.href = "GodsInfoDisplay.html";

    //alert(godinfo);
};
document.getElementById("godList").appendChild(godPic);
}



document.getElementById("searchbtn").onclick = function() {
    var x = document.getElementById("searchfor");

    $('#godSearched').children().css('display', 'none');
    for (i = 0; i < gods.length; i++) {
        if (gods[i].Name.toLowerCase().includes(x.value.toLowerCase())) {
            var image = document.createElement("IMG");
            image.src = gods[i].godIcon_URL;
            image.title = gods[i].Name + "\n" + gods[i].Title;
            var godname = gods[i].Name + "\n" + gods[i].Title;
            var godinformation = godsinfo[i];
            var imgtest = gods[i].godCard_URL;
            image.onclick = (function(x, y, z){
                return function () {
                    window.localStorage.setItem("godname", y);
                    window.localStorage.setItem("godinfo", x);
                    window.localStorage.setItem("imgtest", z);
                    location.href = "GodsInfoDisplay.html";
                }}(godinformation, godname, imgtest));

            $('#godList').children().css('display', 'none');
            document.getElementById("godSearched").appendChild(image);

            // console.log(img);
        }
        else {
            console.log("try again");
        }
    }
};

var xmlhttp = new XMLHttpRequest(),
    json;

xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200)
    {
        json = JSON.parse(xmlhttp.responseText);

        json.forEach(ShowGods);
    }
};


xmlhttp.open('GET', 'Gods.json', true);
xmlhttp.send();
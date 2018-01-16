gods = [];

function ShowGods(value) {
    console.log(value);
var godPic = document.createElement('IMG');
gods.push(value);
godPic.src = value.godIcon_URL;
var godinfo = value.Name + "\n" + value.Title;
godPic.title = godinfo;
document.getElementById("godList").appendChild(godPic);
}

document.getElementById("searchbtn").onclick = function() {
    var x = document.getElementById("searchfor");

    $('#godSearched').children().css('display', 'none');
    for (i = 0; i < gods.length; i++) {
        if (gods[i].Name.toLowerCase().includes(x.value.toLowerCase())) {
            var img = document.createElement("img");
            img.src = gods[i].godIcon_URL;
            img.title = gods[i].Name + "\n" + gods[i].Title;
            document.getElementById("godSearched").appendChild(img);
            $('#godList').children().css('display', 'none');

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
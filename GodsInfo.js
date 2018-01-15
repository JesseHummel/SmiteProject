function ShowGods(value) {
    console.log(value);
var godPic = document.createElement('IMG');
godPic.src = value.godIcon_URL;
document.getElementById("godList").appendChild(godPic);
}



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
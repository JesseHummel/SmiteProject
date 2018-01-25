items = [];
l = 0;
function ShowItems(value) {
  //  console.log(value);
    var itempic = document.createElement("img");

    items.push(value);
    // Create a text node
    var description;
    var descriptionOne;

    //itempic.src = value.itemIcon_URL;
    itempic.onclick = function(){

    };
    if(value.ItemDescription.Menuitems[0] != null && value.ItemDescription.Menuitems[1] != null && value.ItemDescription.Menuitems[2] != null && value.ItemDescription.Menuitems[3] != null)
    {
        description =  value.ItemDescription.Menuitems[0].Description +":"+ value.ItemDescription.Menuitems[0].Value +
            "--" + value.ItemDescription.Menuitems[1].Description + ":"+ value.ItemDescription.Menuitems[1].Value + "--" +
            value.ItemDescription.Menuitems[2].Description + ":"+ value.ItemDescription.Menuitems[2].Value + "--" +
    value.ItemDescription.Menuitems[3].Description +":"+ value.ItemDescription.Menuitems[3].Value;
    }
    else if (value.ItemDescription.Menuitems[0] != null && value.ItemDescription.Menuitems[1] != null && value.ItemDescription.Menuitems[2] != null)
    {
        description = value.ItemDescription.Menuitems[0].Description +":"+ value.ItemDescription.Menuitems[0].Value +
            "--" + value.ItemDescription.Menuitems[1].Description + ":"+value.ItemDescription.Menuitems[1].Value + "--" +
            value.ItemDescription.Menuitems[2].Description +":"+ value.ItemDescription.Menuitems[2].Value;
    }
    else if(value.ItemDescription.Menuitems[0] != null && value.ItemDescription.Menuitems[1] != null)
    {
       description =  value.ItemDescription.Menuitems[0].Description +":"+ value.ItemDescription.Menuitems[0].Value +
        "--" + value.ItemDescription.Menuitems[1].Description +":"+ value.ItemDescription.Menuitems[1].Value;
    }
    else if(value.ItemDescription.Menuitems[0])
    {
        description =  value.ItemDescription.Menuitems[0].Description +":"+ value.ItemDescription.Menuitems[0].Value
    }
    else
    {
        description = "";
    }

    //document.getElementById("information").innerText = description;

    var a1 = "<div class=card style=\"width: 15rem;\" ><img class=card-img-top src= ";
    var a = value.itemIcon_URL;
    var a2= " ><div class='card-block'><h5 class='card-title'>";
    var a6= value.DeviceName;
    var a5= "</h3><p class='card-text'>";
    var a4= description;
    var a3 ="</p></div></div>";

    var g;

        g= document.createElement('div');
        g.id = l;
        document.getElementById("cards").appendChild(g);
        var abc = a1+a+a2+a6+a5+a4+a3;

    document.getElementById(g.id).innerHTML=abc;


    l++;
    //itempic.title = description;
    //document.getElementById("imageList").appendChild(itempic);

    //value.ItemDescription.Menuitems.forEach(ShowDescription);
}


document.getElementById("searchButton").onclick = function(){
    var x = document.getElementById("searchbar");

    $('#itemSearched').children().css('display','none');
    for(i =0; i < items.length;i++ ) {
        if (items[i].DeviceName.toLowerCase().includes(x.value.toLowerCase())) {
            var img = document.createElement("img");
            var description;
            img.src = items[i].itemIcon_URL;
            if(items[i].ItemDescription.Menuitems[0] != null && items[i].ItemDescription.Menuitems[1] != null && items[i].ItemDescription.Menuitems[2] != null && items[i].ItemDescription.Menuitems[3] != null)
            {
                description = items[i].DeviceName + "\n" + items[i].ItemDescription.Menuitems[0].Description + items[i].ItemDescription.Menuitems[0].Value +
                    "\n" + items[i].ItemDescription.Menuitems[1].Description + items[i].ItemDescription.Menuitems[1].Value + "\n" +
                    items[i].ItemDescription.Menuitems[2].Description + items[i].ItemDescription.Menuitems[2].Value + "\n" +
                    items[i].ItemDescription.Menuitems[3].Description + items[i].ItemDescription.Menuitems[3].Value;
            }
            else if (items[i].ItemDescription.Menuitems[0] != null && items[i].ItemDescription.Menuitems[1] != null && items[i].ItemDescription.Menuitems[2] != null)
            {
                description = items[i].DeviceName + "\n" + items[i].ItemDescription.Menuitems[0].Description + items[i].ItemDescription.Menuitems[0].Value +
                    "\n" + items[i].ItemDescription.Menuitems[1].Description + items[i].ItemDescription.Menuitems[1].Value + "\n" +
                    items[i].ItemDescription.Menuitems[2].Description + items[i].ItemDescription.Menuitems[2].Value;
            }
            else if(items[i].ItemDescription.Menuitems[0] != null && items[i].ItemDescription.Menuitems[1] != null)
            {
                description = items[i].DeviceName + "\n" + items[i].ItemDescription.Menuitems[0].Description + items[i].ItemDescription.Menuitems[0].Value +
                    "\n" + items[i].ItemDescription.Menuitems[1].Description + items[i].ItemDescription.Menuitems[1].Value;
            }
            else if(items[i].ItemDescription.Menuitems[0])
            {
                description = items[i].DeviceName + "\n" + items[i].ItemDescription.Menuitems[0].Description + items[i].ItemDescription.Menuitems[0].Value
            }
            else
            {
                description = items[i].DeviceName;
            }
            img.title = description;
            document.getElementById("itemSearched").appendChild(img);
            $('#imageList').children().css('display','none');

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

        json.forEach(ShowItems);
    }
};


xmlhttp.open('GET', 'Items.json', true);
xmlhttp.send();


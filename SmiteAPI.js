items = [];
itemDescription = [];
itemName = [];
searchpic = [];
l = 0;
function ShowItems(value) {
  //  console.log(value);
    var itempic = document.createElement("img");

    items.push(value);
    // Create a text node
    var description;

    //itempic.src = value.itemIcon_URL;
    itempic.onclick = function(){

    };
    console.log(value);
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
    if(value.ItemDescription.SecondaryDescription != null && value.ItemDescription.SecondaryDescription !== "")
    {
        description += "-----" + value.ItemDescription.SecondaryDescription;
    }

    //document.getElementById("information").innerText = description;

    var a1 = "<div class='card bg-transparent' style=\"width: 15rem;\" ><img class=card-img-top src= ";
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
    var searchcount = 0;

    $('#itemSearched').children().css('display','none');
    for(i =0; i < items.length;i++ ) {
        if (items[i].DeviceName.toLowerCase().includes(x.value.toLowerCase())) {
            var img = document.createElement("img");
            var description;
            img.src = items[i].itemIcon_URL;
            if(items[i].ItemDescription.Menuitems[0] != null && items[i].ItemDescription.Menuitems[1] != null && items[i].ItemDescription.Menuitems[2] != null && items[i].ItemDescription.Menuitems[3] != null)
            {
                description =  items[i].ItemDescription.Menuitems[0].Description + items[i].ItemDescription.Menuitems[0].Value +
                    "--" + items[i].ItemDescription.Menuitems[1].Description + items[i].ItemDescription.Menuitems[1].Value + "--" +
                    items[i].ItemDescription.Menuitems[2].Description + items[i].ItemDescription.Menuitems[2].Value + "--" +
                    items[i].ItemDescription.Menuitems[3].Description + items[i].ItemDescription.Menuitems[3].Value;
            }
            else if (items[i].ItemDescription.Menuitems[0] != null && items[i].ItemDescription.Menuitems[1] != null && items[i].ItemDescription.Menuitems[2] != null)
            {
                description =  items[i].ItemDescription.Menuitems[0].Description + items[i].ItemDescription.Menuitems[0].Value +
                    "--" + items[i].ItemDescription.Menuitems[1].Description + items[i].ItemDescription.Menuitems[1].Value + "--" +
                    items[i].ItemDescription.Menuitems[2].Description + items[i].ItemDescription.Menuitems[2].Value;
            }
            else if(items[i].ItemDescription.Menuitems[0] != null && items[i].ItemDescription.Menuitems[1] != null)
            {
                description =  items[i].ItemDescription.Menuitems[0].Description + items[i].ItemDescription.Menuitems[0].Value +
                    "--" + items[i].ItemDescription.Menuitems[1].Description + items[i].ItemDescription.Menuitems[1].Value;
            }
            else if(items[i].ItemDescription.Menuitems[0])
            {
                description =  items[i].ItemDescription.Menuitems[0].Description + items[i].ItemDescription.Menuitems[0].Value
            }
            else
            {
                description = "";
            }
            if(items[i].ItemDescription.SecondaryDescription != null && items[i].ItemDescription.SecondaryDescription !== "")
            {
                description += "-----" + items[i].ItemDescription.SecondaryDescription;
            }

            itemName.push(items[i].DeviceName);
            itemDescription.push(description);
            searchpic.push(items[i].itemIcon_URL);
            searchcount++;
            //img.title = description;
            document.getElementById("itemSearched").appendChild(img);
            //$('#imageList').children().css('display','none');

           // console.log(img);
        }
        else {
            console.log("try again");
        }
    }

    window.localStorage.setItem("searchName", JSON.stringify(itemName));
    window.localStorage.setItem("searchDescription",JSON.stringify(itemDescription));
    window.localStorage.setItem("searchPic", JSON.stringify(searchpic));
    window.localStorage.setItem("count", searchcount);
    location.href = "ItemSearch.html";


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


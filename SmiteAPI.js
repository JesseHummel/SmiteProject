items = [];

function ShowItems(value) {
  //  console.log(value);
    var itempic = document.createElement("img");

    items.push(value);
    // Create a text node
    var description;
    itempic.src = value.itemIcon_URL;
    itempic.onclick = function(){

    };
    if(value.ItemDescription.Menuitems[0] != null && value.ItemDescription.Menuitems[1] != null && value.ItemDescription.Menuitems[2] != null && value.ItemDescription.Menuitems[3] != null)
    {
        description = value.DeviceName + "\n" + value.ItemDescription.Menuitems[0].Description + value.ItemDescription.Menuitems[0].Value +
            "\n" + value.ItemDescription.Menuitems[1].Description + value.ItemDescription.Menuitems[1].Value + "\n" +
            value.ItemDescription.Menuitems[2].Description + value.ItemDescription.Menuitems[2].Value + "\n" +
    value.ItemDescription.Menuitems[3].Description + value.ItemDescription.Menuitems[3].Value;
    }
    else if (value.ItemDescription.Menuitems[0] != null && value.ItemDescription.Menuitems[1] != null && value.ItemDescription.Menuitems[2] != null)
    {
        description = value.DeviceName + "\n" + value.ItemDescription.Menuitems[0].Description + value.ItemDescription.Menuitems[0].Value +
            "\n" + value.ItemDescription.Menuitems[1].Description + value.ItemDescription.Menuitems[1].Value + "\n" +
            value.ItemDescription.Menuitems[2].Description + value.ItemDescription.Menuitems[2].Value;
    }
    else if(value.ItemDescription.Menuitems[0] != null && value.ItemDescription.Menuitems[1] != null)
    {
       description = value.DeviceName + "\n" + value.ItemDescription.Menuitems[0].Description + value.ItemDescription.Menuitems[0].Value +
        "\n" + value.ItemDescription.Menuitems[1].Description + value.ItemDescription.Menuitems[1].Value;
    }
    else if(value.ItemDescription.Menuitems[0])
    {
        description = value.DeviceName + "\n" + value.ItemDescription.Menuitems[0].Description + value.ItemDescription.Menuitems[0].Value
    }
    else
    {
        description = value.DeviceName;
    }

    itempic.title = description;
    document.getElementById("imageList").appendChild(itempic);
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


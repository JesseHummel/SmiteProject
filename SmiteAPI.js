

function ShowItems(value) {
    console.log(value);
    var itempic = document.createElement("img");
    // Create a text node
    var description;
    itempic.src = value.itemIcon_URL;
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
function ShowDescription(value)
{
    //var itemDescriptionNode = document.createElement("LI");
    //var description = (value.Description + value.Value);
    //itemDescriptionNode.appendChild(description);
    return value.Description + value.Value;
    //document.getElementById("itemList").appendChild(itemDescriptionNode);

}

function itemSearch()
{
    
}

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


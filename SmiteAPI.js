

function ShowItems(value)
{
    //document.getElementById("itemName").innerHTML = value.DeviceName;
    console.log(value);
    var node = document.createElement("LI");// Create a <li> node
    var itempic = document.createElement("img");
    var textnode = document.createTextNode(value.DeviceName);       // Create a text node
    itempic.src = value.itemIcon_URL;
    node.appendChild(textnode);// Append the text to <li>
    document.getElementById("itemList").appendChild(node);
    document.getElementById("imageList").appendChild(itempic);
    value.ItemDescription.Menuitems.forEach(ShowDescription);
}
function ShowDescription(value)
{
    var itemDescriptionNode = document.createElement("LI");
    var description = document.createTextNode(value.Description + value.Value);
    itemDescriptionNode.appendChild(description);
    document.getElementById("itemList").appendChild(itemDescriptionNode);

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


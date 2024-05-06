console.log("Check connection")
//id = "items"
let itemsDiv = document.getElementById('items');
//Is items with us?
if(itemsDiv){
    //Yes
    console.log('itemsDiv')

    console.log('ClassList:', itemsDiv.classList);
    console.log('Id:', itemsDiv.id);
    console.log('ClientWidth:', itemsDiv.clientWidth);
    console.log('InnerHTML:', itemsDiv.innerHTML);
    //Add our products
    itemsDiv.innerHTML = '<div class="item"></div>';
    itemsDiv.innerHTML += '<div class="item"></div>';
    itemsDiv.innerHTML += '<div class="item"></div>';
    itemsDiv.innerHTML += '<div class="item"></div>';
} else{
    //No
    console.log('Not Found')
}

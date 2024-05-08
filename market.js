console.log("Check connection")
//Masive of products
let ItemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12 N']

//id = "items"
let itemsDiv = document.getElementById('items');
//Is items with us?
if(itemsDiv){
    //Yes
    ItemsArray.sort().forEach((item, index)=>{
        //console.log(item)
        itemsDiv.innerHTML += 
        `<div class="item">
            <h2>Товар №${index+1}</h2>
            <p>${item}</p>
        </div>`;
    })
    /*console.log('itemsDiv')
    console.log('ClassList:', itemsDiv.classList);
    console.log('Id:', itemsDiv.id);
    console.log('ClientWidth:', itemsDiv.clientWidth);
    console.log('InnerHTML:', itemsDiv.innerHTML);*/
    //Add our products
    /*for( let i=0; i<=101; i++) {
        itemsDiv.innerHTML += '<div class="item"></div>';
    }*/
    
} else{
    //No
    console.log('Not Found');
}

/*//Massive Start
let ItemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12 N',
    'Газонокосарка 430',
    'Електричний тример 130',
    'Електрична газонокосарка 320',
    'Акумуляторний оприскувач 12 E',
]
ItemsArray.sort().forEach((item, index)=>{
    console.log(index + '-й елемент:', item)
})*/
/*ItemsArray=ItemsArray.sort();

console.log(ItemsArray)
for(let i=0; i<ItemsArray.length;i++){
    console.log(i + '-й елемент:', ItemsArray[i])
}*/
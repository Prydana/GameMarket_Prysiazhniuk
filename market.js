console.log("Check connection")
//Masive of products
let ItemsArray = [
    {
        firstName:'Іван',
        lastName:'Севрук',
        age:60,
        subject:'Захист України',
        photo:'https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych-683x1024.jpg',
        url:'https://lyceum.ztu.edu.ua/team/sevruk-i-h/',

    },
    {
        firstName:'Наталія',
        lastName:'Венцель',
        age:20,
        subject:'Директор',
        photo:'https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg',
        url:'https://lyceum.ztu.edu.ua/team/ventsel-n-v/',

    },
    {
        firstName:'Віталій',
        lastName:'Шатківський',
        age:43,
        subject:'Інформатика',
        photo:'https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg',
        url:'https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/',

    },
    {
        firstName:'Вікторія',
        lastName:'Нелипович',
        age:20,
        subject:'Математика',
        photo:'https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg',
        url:'https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/',

    },
    {
        firstName:'Анжела',
        lastName:'Лознюк',
        age:20,
        subject:'Українська мова та література',
        photo:'https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg',
        url:'https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/',

    },
    {
        firstName:'Ірина',
        lastName:'Боровська-Карандюк',
        age:20,
        subject:'Зарубіжна література',
        photo:'https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg',
        url:'https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/',

    }
]
//id = "items"
let itemsDiv = document.getElementById('items');
//Is items with us?
if(itemsDiv){
    //Yes
    ItemsArray
    .sort((a,b) => a.lastName.localeCompare(b.lastName))
    .forEach((item, index)=>{
        //console.log(item)
        itemsDiv.innerHTML += 
        `<div class="item">
            <h2>Вчитель ${index+1} з ${ItemsArray.length}</h2>
            <p>${item.lastName} ${item.firstName}</p>
            <p>Вік: ${item.age}</p>
            <p><img src="${item.photo}" class="item-image"></p>
            <p><a href="${item.url}" target="_blank">Профіль</p>
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

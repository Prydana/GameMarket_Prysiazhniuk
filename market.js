console.log("Check connection")
//Masive of products
let ItemsArray = [
    {
      title:"Мотокоса 43",
      image:"img/moto.jpg",
      mono:6,
      pb:8,
      price:5499,
      lower:4497,
      bonus:4395,
    },
    {
        title:"Електричний тример 110",
        image:"img/trimer.jpg",
        mono:4,
        pb:6,
        price:4497,
        lower:3498,
        bonus:3396,
    },
    {
        title:"Електрична газонокосарка 32",
        image:"img/kosa.jpg",
        mono:5,
        pb:7,
        price:4497,
        lower:3297,
        bonus:3195,
    },
    {
        title:"Акумуляторний обприскувач 12 N",
        image:"img/pshyk.jpg",
        mono:10,
        pb:12,
        price:2190,
        lower:1698,
        bonus:1596,
    },
]
//id = "items"
let itemsDiv = document.getElementById('items');
//Is items with us?
if(itemsDiv){
    //Yes
    ItemsArray
    .forEach((item, index)=>{
        //console.log(item)
        itemsDiv.innerHTML += 
        `<div class="item">
                <!--Name-->
                <div class="item-title">${item.title}</div>
                <!--Photo-->
                <div><img src="${item.image}" class="item-image"></div>
                <!--Small parts-->
                <div class="parts-pay">
                    <div><img src="img/mono-lapka.png" alt="">${item.mono}</div>
                    <div><img src="img/pryvat.png" alt="">${item.pb}</div>
                </div>
                <!--Price-->
                <div class="price">
                    <div><span>${item.price}</span><sup>грн</sup></div>
                    <div><span>${item.lower}</span><sup>грн</sup></div>
                </div>
                <!--Bonus-->
                <div class="bonus price">
                    <div>ціна за купоном</div>
                    <div>${item.bonus}<span></span><sup>грн</sup></div>
            </div>`
    })
   
    //<p><a href="mailto:${item.email}?subject=Питання&body=Доброго дня" target="_blank" class="price">Написати</p>
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


/*{
    firstName:'Іван',
    lastName:'Севрук',
    age:60,
    subject:'Захист України',
    photo:'https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych-683x1024.jpg',
    url:'https://lyceum.ztu.edu.ua/team/sevruk-i-h/',
    email:"23@gmail.com",

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

}*/
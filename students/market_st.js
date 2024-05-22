console.log("Check connection")
//Masive of products
let ItemsArray = [
    {
        title: "Carpathians",
        author: "Присяжнюк Богдана",
        author_photo: "",
        email: "23a_pbv@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "game 01.jpg",
        game_github: "https://github.com/Prydana/Phaser2stGame",
        game_pages: "https://prydana.github.io/Phaser2stGame/",
        docs: "https://drive.google.com/drive/folders/1K--lAbvnwzUQ4BjN136Blvp46ErW0mkJ",
        forms: "https://forms.gle/HnBZ5pzJ4DLpa6E69",
        gamemarket_github: "https://github.com/Prydana/GameMarket_Prysiazhniuk",
        gamemarket_pages: "https://prydana.github.io/GameMarket_Prysiazhniuk/",
        market_pages: "https://prydana.github.io/GameMarket_Prysiazhniuk/market.html",
        stars: 5
    },
    {
        title: "Title",
        author: "Недзвецький Олег",
        author_photo: "path_to_author_photo.jpg",
        email: "23a_nom@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "game 02.jpg",
        game_github: "https://github.com/Viogoo/Phaser2stGame2",
        game_pages: "https://viogoo.github.io/Phaser2stGame2/",
        docs: "https://drive.google.com/drive/folders/1a-3VlIBE5SnalcPulY1mKWRTqvyydk5i?usp=sharing",
        forms: "https://forms.gle/bvgt8tydcyS6AXPA6",
        gamemarket_github: "https://github.com/Viogoo/Game_Market_Nedzvetskiy_Oleg",
        gamemarket_pages: "https://viogoo.github.io/Game_Market_Nedzvetskiy_Oleg/",
        market_pages: "https://viogoo.github.io/market/",
        stars: 4
    },
    {
        title: "Phaser 2nd Game",
        author: "Ніцкевич Дар'я",
        author_photo: "path_to_author_photo.jpg",
        email: "23a_ndi@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "game 03.jpg",
        game_github: "https://github.com/Daria1284/Phaser2ndGame",
        game_pages: "https://daria1284.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1sx_bP3YdCY99mFM02u-FVcmtGm8bfNc1?usp=drive_link",
        forms: "https://forms.gle/PSoFKF3f8JE8JDF18",
        gamemarket_github: "https://github.com/Daria1284/GameMarket_Nitskevich",
        gamemarket_pages: "https://daria1284.github.io/GameMarket_Nitskevich/",
        market_pages: "https://daria1284.github.io/GameMarket_Nitskevich/market.html",
        stars: 4
    },
    {
        title: "Game",
        author: "Соломонюк Богдан",
        author_photo: "path_to_author_photo.jpg",
        email: "23a_sbr@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "04.jpg",
        game_github: "https://github.com/23asbr/phaser2ndGame",
        game_pages: "https://23asbr.github.io/phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1JcIFHoj8MY56cyNeD8yoQkIgYxHIFwl3?usp=drive_link",
        forms: "https://forms.gle/DbGSNNiXNbAfQx6x6",
        gamemarket_github: "https://github.com/23asbr/Game_Market_solomoniyk",
        gamemarket_pages: "https://23asbr.github.io/Game_Market_solomoniyk/",
        market_pages: "https://23asbr.github.io/Game_Market_solomoniyk/market.html",
        stars: 4
    },
    {
        title: "Phaser 2nd Game",
        author: "Філімончук Євгеній",
        author_photo: "path_to_author_photo.jpg",
        email: "23a_fyev@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "05.jpg",
        game_github: "https://github.com/filimonchukevgeniy/Phaser2ndGame",
        game_pages: "https://filimonchukevgeniy.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1gLzj_epUzeFt_KBhcfez33Xx4fcSrSJ9",
        forms: "https://forms.gle/gd2oE6EtLB3yFCa9A",
        gamemarket_github: "https://github.com/filimonchukevgeniy/GameMarket_Filimochuk",
        gamemarket_pages: "https://filimonchukevgeniy.github.io/GameMarket_Filimochuk/",
        market_pages: "https://filimonchukevgeniy.github.io/GameMarket_Filimochuk/market.html",
        stars: 4
    },
    {
        title: "Phaser 2nd Game",
        author: "Сікалюк Артем",
        author_photo: "path_to_author_photo.jpg",
        email: "23a_sai@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "path_to_game_image.jpg",
        game_github: "https://github.com/lokloter/Phaser2ndGame",
        game_pages: "https://lokloter.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1CVaq2qHRHtju8V-IVYyI2a2bBJLlE-VH?usp=sharing",
        forms: "https://forms.gle/7oHYvp5hUw1oDwGZA",
        gamemarket_github: "https://github.com/lokloter/gamemarket",
        gamemarket_pages: "https://lokloter.github.io/gamemarket/",
        market_pages: "https://lokloter.github.io/market/",
        stars: 4
    },
    {
        title: "Phaser 2nd Game",
        author: "Якубець Денис",
        author_photo: "path_to_author_photo.jpg",
        email: "23a_yada@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "path_to_game_image.jpg",
        game_github: "https://github.com/D3nis1238/Phaser-2nd-Game",
        game_pages: "https://d3nis1238.github.io/Phaser-2nd-Game/?authuser=0",
        docs: "https://docs.google.com/document/d/1H_AWqM8u9rFfDKVAxynlz5wGyiIW2AzeI2gTvWWs7Wc/edit?usp=sharing",
        forms: "https://forms.gle/NtHkb7ErZAcexoPY7",
        gamemarket_github: "https://github.com/D3nis1238/GameMarket_Yakubets",
        gamemarket_pages: "https://d3nis1238.github.io/GameMarket_Yakubets/",
        market_pages: "https://d3nis1238.github.io/GameMarket_Yakubets/market.html?authuser=0",
        stars: 4
    },
    {
        title: "Platformer",
        author: "Будішевський Єгор",
        author_photo: "path_to_author_photo.jpg",
        email: "23a_byeyu@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "path_to_game_image.jpg",
        game_github: "https://github.com/EgorZTUkl/Platformer",
        game_pages: "https://egorztukl.github.io/Platformer/",
        docs: "https://drive.google.com/drive/folders/1Gme_cOgj7R14t3kaxbLxjPxgmTvhTKYq?usp=drive_link",
        forms: "https://forms.gle/ziZ41L7qHnzp6o7x6",
        gamemarket_github: "N/A",
        gamemarket_pages: "N/A",
        market_pages: "N/A",
        stars: 3
    },
]
//id = "items"
let itemsDiv = document.getElementById('items');
//Is items with us?
if(itemsDiv){
    //Yes
    ItemsArray
    .sort((a,b)=>a.author.localeCompare(b.author))
    .forEach((item, index)=>{
        //console.log(item)
        itemsDiv.innerHTML += 
        `<div class="item">
                <!--Name-->
                <div class="item-title">${item.title}</div>
                <div>${item.author}</div>
                <!--Info-->
                <div>${item.group}</div>
                <div><a href="${item.email}">Написати</a></div>
                <!--Photo-->
                <div><img src="img_st/${item.author_photo}" class="item-image"></div>
                <div><img src="img_st/${item.image}" class="item-image"></div>
                <!--Game-->
                <div><a href="${item.game_github}">GitHub гри</a></div>
                <div><a href=${item.game_pages}>Гра</a></div>
                <div><a href="${item.docs}">Документація</a></div>
                <div><a href=">${item.forms}">Опитування</a</div>
                <!--Market-->
                <div><a href="${item.gamemarket_github}">GitHub маркету</a></div>
                <div><a href="${item.gamemarket_pages}">Маркет ігор</a></div>
                <div><a href="${item.market_pagesb}">Маркет продуктів</a></div>
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
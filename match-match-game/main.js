/**
 * Created by Евгений on 02.11.2017.
 */
//Создаю объект в котором хранить буду размер поля и рубашку карт
let game = {
    field:null,
    shirt:null,
    fieldWidth:1044,
    fieldHeight:560,
    cardWidth:null,
    cardHeight:120,
    cardMargin:null
};
//получаю массивы элементов для выбора рубашки и размера поля
let blockFields = document.querySelectorAll('.numbers-of-cards');
let blockShirts = document.querySelectorAll('.shirt-block');
// на каждый элемент каждого массива мешаю слушатель события по клику который выбирает элемент
blockFields.forEach((x)=>{
    x.addEventListener('click',onClick,false);
});
blockShirts.forEach((x)=>{
    x.addEventListener('click',onClick,false);
});

//проверяю по какому из элементов был клик: 
//если для рубашки то прохожу по всем элементам убираю класс(если был) 
//отвечающий за визуализацию выбора и текущему элементу добавляю класс выбора.
//так же присваиваю объекту game свойства рубашки и размер поля
function onClick(e) { 
    //чтобы выделялась только одна рубашка карт
    switch(this.className){
        case 'numbers-of-cards':
            blockFields.forEach((x)=>{
                x.classList.remove('selected-item');
            });
            game.field = this.innerText.replace('x','').split('');
            game.field = +game.field[0]*(+game.field[1]);
            //создаю массив с именами карточек в зависимости от количества карточек, из этого массива забираю элемент и уменьшаю массив на 1(вырезаю этот элемент), также задаю маржины и ширину карт
            switch(game.field){
                case 12 : {
                    game.marginCard = '30px 80px'; 
                    game.cardWidth = 100;
                    game.arrImgs = [1,1,2,2,3,3,4,4,5,5,6,6];
                    break;
                };
                case 18 : {
                     game.marginCard = '30px 35px'; 
                     game.cardWidth = 100;
                     game.arrImgs = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
                    break;
                };
                case 24 : {
                    game.marginCard = '30px 20px'; 
                    game.cardWidth = 90;
                    game.arrImgs = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,4,4,7,7,1,1]
                    break;
                };
                
            };

        break;
    //чтобы выделялся только один режим игры
        case 'shirt-block':
            blockShirts.forEach((x)=>{
                x.classList.remove('selected-item');
            });
            game.shirt=this.id+'.jpg';
        break;
    };
    this.classList.add('selected-item');
};
//Находим кнопку старт игры и вешаем на нее событие по клику
let buttonStart = document.getElementById('button-start');

buttonStart.addEventListener('click',startGame,false);

function startGame(e){
    if(!game.field||!game.shirt) return alert("Plese select CARD'S SHIRT or GAME MODE"); // если не выбрали рубашку и сложность то не начнем
    //выбираем все дочерние элементы <main> и "перемещаеи за пределы экрана" 
    let moveMain = document.querySelectorAll('#main')[0];
    moveMain.style.transform="translateX("+(-2300)+"px)";
    
    let mainGame = document.createElement('div');
    mainGame.id='mainGame';
    document.body.appendChild(mainGame);
    //после того как запускаем игру после убранного выше текста создаем карты таймер и перемещаем на страницу
    setTimeout(function() {
        document.getElementById('mainGame').classList.add('main');

        //Creat timer
        var timer= document.createElement('div');
        timer.innerHTML=0;
        timer.classList.add('timer');
        document.getElementById('mainGame').appendChild(timer);
        //отсчет для таймера
        setInterval(()=>{
            timer.innerHTML=+timer.innerText+1;    
        },1000);

        let mainGame = document.getElementById('mainGame');
        
        //создаю все карты и вешаю на них событие клик
        for(let i = 0; i < game.field;i++){
            let newCart = makeCard();
            newCart.addEventListener('click',flipp,false);
            mainGame.appendChild(newCart);
        }
    }, 300);
};
//функция для создания карт
function makeCard(){

    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    let item = document.createElement('div');
    item.classList.add('item');
    let img = document.createElement('img');
    img.src='img/'+game.shirt;
    let img2 = document.createElement('img');
    let rand = Math.floor(Math.random()*game.arrImgs.length);
    item.setAttribute('data-name',game.arrImgs[rand]);
    img2.src='img/'+game.arrImgs[rand]+'.jpg';
    game.arrImgs.splice(rand,1);


    img.style.cssText='width:'+game.cardWidth+'px;height:'+game.cardHeight+'px;';
    img2.style.cssText='width:'+game.cardWidth+'px;height:'+game.cardHeight+'px;transition:transform 4s';
    item.appendChild(img);
    item.appendChild(img2);
    wrapper.appendChild(item);
    wrapper.style.cssText='width:'+game.cardWidth+'px; height:'+game.cardHeight+'px;margin:'+game.marginCard+';display:inline-block; border-radius:15px; background-size:100% 100%;';
    return wrapper;
};

let tempArr = [];
let winScore = 0;
function flipp(e) {

   let currentElem = this.querySelectorAll('.item')[0];
   if(currentElem.getAttribute('data-checked')){return};//чтобы одна и таже карта не добавлялась в массив
   currentElem.setAttribute('data-checked',true);
   currentElem.classList.toggle('flip');
   tempArr.push(currentElem);
   if(tempArr.length===2){
       if(tempArr[0].getAttribute('data-name') != tempArr[1].getAttribute('data-name')){
           setTimeout(()=>{
            tempArr.forEach((x)=>{
                x.classList.toggle('flip');
                x.removeAttribute('data-checked');
            });
            tempArr=[];
            
            },400);
       } else {
           setTimeout(()=>{
            tempArr.forEach((x,i,arr)=>{if(i<2) x.style.transform="translateX(-2100px)"});
            winScore+=2;
            if(winScore === game.field){
                clearInterval(setInterval(()=>{
                    timer.innerHTML=+timer.innerText+1;    
                },1000));
                let win = document.createElement('div');
                win.classList.add('win');   
                win.innerHTML='Yow WIN!'+'You time is : '+document.getElementsByClassName('timer')[0].innerHTML+'seconds';
                document.body.appendChild(win);
                document.getElementsByClassName('timer')[0].style.display="none";
            }
            tempArr=[];
            },500);
        }
   };
};



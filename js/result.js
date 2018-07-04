var t;
let j = document.getElementById("result-wrapper");
let j1 = document.getElementById("result-wrapper").children[0]
let j2= document.getElementById("result-wrapper").children[1]
let j3= document.getElementById("result-wrapper").children[2]
var div1 = document.createElement("div")
var ar = JSON.parse(localStorage.getItem("tg"));
var o = JSON.parse(localStorage.getItem("o"));
console.log(ar)
var mkImage=function(src){
   var img = new Image()
   img.src=src
   return img
}
arr={
 "Джуд Лоу":mkImage("C:/learn/images/polity/loy.jpg"),
 "Ричард Гир":mkImage("C:/learn/images/polity/gir.jpg"),
 "Элвис Пресли":mkImage("C:/learn/images/polity/presli.jpg"),
 "Бенедикт Камбербэтч":mkImage("C:/learn/images/polity/benedict.jpg"),
 "Брюс Уиллис":mkImage("C:/learn/images/polity/uilis.jpg"),
 "Микки Рурк":mkImage("C:/learn/images/polity/rurk.jpg"),
 "Ив Сен Лоран":mkImage("C:/learn/images/polity/loran.jpg"),
 "Джонни Депп":mkImage("C:/learn/images/polity/depp.jpg"),
 "Уилл Смит":mkImage("C:/learn/images/polity/smith.jpg"),
 "Джеймс Макэвой":mkImage("C:/learn/images/polity/makwoy.jpg"),
 "Том Круз":mkImage("C:/learn/images/polity/kruz.jpg"),
 "Роберт Де Ниро":mkImage("C:/learn/images/polity/robert_de_niro.jpg"),
 "Брэд Питт":mkImage("C:/learn/images/polity/pit.jpg"),
 "Николас Кейдж":mkImage("C:/learn/images/polity/nicolas.jpg"),
 "Герман Греф": mkImage("C:/learn/images/polity/gref.jpg"),
 "Филипп Киркоров": mkImage("C:/learn/images/polity/kirkorov.jpg" ),
 "Валентин Юдашкин":mkImage("C:/learn/images/polity/udashkin.jpg"),
 "Иосиф Кобзон": mkImage("C:/learn/images/polity/kobson.jpg"),
 "Сергей Лазарев": mkImage("C:/learn/images/polity/lasarev.jpg"),
 "Стас Михайлов":mkImage("C:/learn/images/polity/mihailov.jpg"),
 "Александр Маршал": mkImage("C:/learn/images/polity/marchal.jpg"),
 "Игорь Крутой": mkImage("C:/learn/images/polity/krutoy.jpg"),
 "Александр Розембаум":mkImage("C:/learn/images/polity/rosembaum.jpg"),
 "Иван Ургант":mkImage("C:/learn/images/polity/urgant.jpg"),
 "Арнольд Шварценеггер":mkImage("C:/learn/images/polity/arnold.jpg"),
 "Владимир Путин":mkImage("C:/learn/images/polity/putin.jpg"),
 "Дмитрий Медведев":mkImage("C:/learn/images/polity/medvedev.jpg"),
 "Александр Лукашенко": mkImage("C:/learn/images/polity/lucahenko.jpg"),
 "Сильвио Берлускони":mkImage("C:/learn/images/polity/berlusconi.jpg"),
 "Дональд Трамп":mkImage("C:/learn/images/polity/trump.jpg"),
 "Владимир Жириновский":mkImage("C:/learn/images/polity/zhirinovskiy.jpg"),
 "Павел Дуров": mkImage("C:/learn/images/polity/durov.jpg"),
 "Билл Гейтс":mkImage("C:/learn/images/polity/gate.jpg"),
 "Анатолий Чубайс":mkImage("C:/learn/images/polity/chubuys.jpg"),
 "Павел Воля":mkImage("C:/learn/images/polity/voly.jpg"),
 "Стив Джобс":mkImage("C:/learn/images/polity/stiv.jpg"),             
}
var re;
var tty
var gh;
var gh1;
var g11;
var gh2;
var le =[]
var ii = []
var h2;
 for(var v =0; v<ar.length;v++) {
  for(w in arr) {
var image1 =  arr[w]; 
 
 if(ar[0]==w){
    gh1 =w;
    
   gh = arr[w];
 
gh.style.width = 150+"%";


 }
 
if(ar[1]==w){
   tty =w;
  
   gh11 = arr[w];
      
gh11.style.width = 150+"%";
 }
 if(ar[2]==w){
  
  
    re =w;
      
   gh2 = arr[w];
 
gh2.style.width = 150+"%";
 }
 
}

}
le.push(gh1,tty,re)
console.log(le)
var h1;
var h2;
var buttont;
buttont = document.createElement("div")
 buttont.className = "button-result";
  buttont.id = "button-result";
  j.appendChild(buttont) 
  buttont.style.display = "none";
  var button5 = document.createElement("div")
 button5.className = "recom";
  j.appendChild(button5) 
  button5.style.display = "none"
var i =[]
for(var v =0; v<ar.length;v++) {
  for(h in o) {
    var ky = Object.keys(o[h])
    
var k =  o[h]; 
 
 if(ar[0]==ky[0]){
   h1 =  o[h][ky];
   i.push(h1)
    
  
 }
if(ar[1]==ky[0]){
  
   h1 =  o[h][ky];
   i.push(h1)
    
  
 }
 if(ar[2]==ky[0]){
  
   h1 =  o[h][ky];
   i.push(h1)
    
 }
}

}
ii.push(gh,g11,gh2)

function fig(ee1){
  var start10 =  Date.now();
  var sli = setInterval(function(){
 var timePassed10 = Date.now() - start10;
 if(timePassed10>500&&timePassed10<10800){
   ee1.style.height ="auto"
    ee1.style.width =ee1.getBoundingClientRect().width+(timePassed10 /2000) + "px";
     j1.style.width = j1.getBoundingClientRect().width-(timePassed10 /1250) + "px" 
 }
 if(timePassed10>11000&&timePassed10<18000){
   ee1.style.marginTop =ee1.getBoundingClientRect().top+(timePassed10 /2000) + "px";
 }
  },20)
}

function fig2(ee2){
   var start9 =  Date.now();
var tim = setInterval(function(){

  var timePassed0 = Date.now() - start9;
 
  if(timePassed0>=500&&timePassed0<7500){
    j1.style.marginTop = timePassed0 /5 + "px";
    
  }
  if(timePassed0>=8500&&timePassed0<=12800){
    ee2.style.height ="auto"
    ee2.style.width =ee2.getBoundingClientRect().width-(timePassed0 /2000) + "px";
    
  }
})
}
var b=1;
 buttont.addEventListener("click", function (){
    b++
    if(b%2==0) {
     fig(gh)
    }
    else{
      crub(gh)
    }















    if(a==2){
      fig(gh11)
    }
     if(a==3){
      fig(gh2)
    }
  })

var div;
var rt =  i[0]+" "+i[1];
var rr =  i[2]+" "+i[3];
var ry =  i[4]+" "+i[5];

function crub(image,name,har){
  let j1 = document.getElementById("result-wrapper").children[0]
   
   
 div = document.createElement("div")
var div2 = document.createElement("div")
 

 var start9 =  Date.now();

var tim = setInterval(function(){

  var timePassed0 = Date.now() - start9;
 
  if(timePassed0>=500&&timePassed0<7500){
    j1.style.marginTop = timePassed0 /5 + "px";
    
  }
  if(timePassed0>=8500&&timePassed0<=12800){
    image.style.height ="auto"
    image.style.width =image.getBoundingClientRect().width-(timePassed0 /2000) + "px";
    
  }

  if(timePassed0>=13000&&timePassed0<=13002){
 
 div.className = "name";
  div.innerHTML = name;
  j.appendChild(div)  
  }
   if(timePassed0>=13500&&timePassed0<=13502){
  div1 = document.createElement("div")
 div1.className = "haracter";
  div1.innerHTML = har;
  j.appendChild(div1)  
  }
   if(timePassed0>=14500&&timePassed0<=14502){
 
 div2.className = "tufli";
  div2.innerHTML = "какаой-то текст2";
  j.appendChild(div2)  
  }
   if(timePassed0>=15500&&timePassed0<=15502){
   buttont.style.display = "block";
  buttont.innerHTML = "Увеличить";
   
  }
  if(timePassed0>=16000&&timePassed0<=16002){
     button5.style.display = "block";
  button5.innerHTML = "Следующая рекомендация";
  j.appendChild(button5)  
  }


},20)

}
function crubt(image,name,gf) {
   div.innerHTML = ""
     gh11.style.display = "none"
      div1.innerHTML =gf;
   j1.appendChild(gh2) 
  crub(gh2,re,rt)
 }
function ct(image,name,har){
   j1.appendChild(gh)
   crub(gh,gh1,rr)
}
ct()

function cru(name,ha) {
  div.innerHTML = "";
   
  gh.style.display = "none"
   div1.innerHTML = ha
   j1.appendChild(gh11) 
  crub(gh11,tty,ry)
 }
 var a=0;
 button5.addEventListener("click", function (){
    a++
    if(a==1) {
     cru()
    }
    if(a==2){
      crubt()
    }
    console.log(a)
  })
 
var a = localStorage.getItem('arr');



















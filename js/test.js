
let button =  document.getElementById("button")

let button1 =  document.getElementById("button").children[0]
let button2 =  document.getElementById("button").children[1]
let answer = document.getElementById("answer")
let answer1 = document.getElementById("answer1")
let answer2 = document.getElementById("answer2")
let answer3 = document.getElementById("answer3")
let answer4 = document.getElementById("answer4")
let answer5 = document.getElementById("answer5")
let answer6 = document.getElementById("answer6")
let answer7 = document.getElementById("answer7")
let answer8 = document.getElementById("answer8")
let answer9 = document.getElementById("answer9")
let answer10 = document.getElementById("answer10")
let answer11 = document.getElementById("answer11")
let answer12= document.getElementById("answer12")

let result =0;
let p = 100/36*3;
 

answer1.addEventListener("click", function (e) {
	answer2.style.display ="block";
	answer1.style.display ="none";
	})

  
answer2.addEventListener("click", function(e) {
	answer3.style.display ="block";
	answer2.style.display ="none";
	})

answer3.addEventListener("click", function(e) {
	answer4.style.display ="block";
	answer3.style.display ="none";
	})


answer4.addEventListener("click", function(e) {
	answer5.style.display ="block";
	answer4.style.display ="none";
	})

answer5.addEventListener("click", function(e) {
  answer6.style.display ="block";
  answer5.style.display ="none";
  })
answer6.addEventListener("click", function(e) {
  answer7.style.display ="block";
  answer6.style.display ="none";
  })
answer7.addEventListener("click", function(e) {
  answer8.style.display ="block";
  answer7.style.display ="none";
  })
answer8.addEventListener("click", function(e) {
  answer9.style.display ="block";
  answer8.style.display ="none";
  })
answer9.addEventListener("click", function(e) {
  answer10.style.display ="block";
  answer9.style.display ="none";
  })
answer10.addEventListener("click", function(e) {
  answer11.style.display ="block";
  answer10.style.display ="none";
  })

answer11.addEventListener("click", function(e) {
  answer12.style.display ="block";
  answer11.style.display ="none";
  })
answer12.addEventListener("click", function(e) {
  answer11.style.display ="none";
  })



let m =0;
var t=1;
var arr =[]
var h = Date.now();
var g ={}

var m2;




var hh = [

{ироничный:0},        {романтичный:0},           // Джуд Лоу 
{гуманный:0},         {харизматичный:0},         // Ричард Гир
{максималист:0},      {щедрый:0},              // Элвис Пресли
{самоуверенный:0},    {юмор:0},                // Бенедикт Камбербэтч
{юмор:0},             {хитрый:0},              // Брюс Уиллис
{непокорный:0},       {агрессивный:0},         // Микки Рурк 
{своенравный:0},      {замкнутый:0},           // Ив Сен Лоран
{харизматичный:0},    {свободолюбивый:0},     // Джонни Депп
{обоятельный:0},      {общительный:0},         // Уилл Смит
{скромный:0},         {юмор:0},                // Джеймс Макэвой 
{гуманный:0},         {активный:0},            // Том Круз
{гуманный:0},         {экономный:0},           // Роберт Де Ниро
{активный:0},         {любознательный:0},      // Брэд Пит
{эксентричный:0},     {креативный:0},          // Николас Кейдж
{настойчивый:0},      {дерзкий:0},             // Герман Греф 
{харизматичный:0},    {любознательный:0},        // филипп Ккиркоров
{трудолюбивый:0},     {вкус:0},                  // Ввлентин Юдашкин
 {воля:0},            {усидчивость:0},           // Иосиф Кобзон
 {трудолюбивый:0},    {расстается:0},            // Сергей Лазарев
 {харизматичный:0},   {экспрессивный:0},         // Стас Михайлов
 {романтичный:0},     {уверенный:0},             // Александр Маршал
 {гуманный:0},        {вкус:0},                  // Игорь Крутой     
{гуманный:0},         {любознательный:0},        // Александр Розембаум 
{юмор:0},             {уверенный:0},             // Иван Ургант
{целеустремленный:0}, {изобретательный:0},     // Арнольд Шварцнеггер     
{осторожный:0},       {замкнутый:0},           // Владимир Путин
{жесткий:0},          {неуверенный:0},         // Дмитрий Медведев
{добродушный:0},      {гуманный:0},            // Александр Лукашенко
{харизматичный:0},    {юмор:0},                // Сильвио Берлускони
{энергичный:0},       {самовлюбленный:0},      // Дональд Трамп
{экцентричный:0},     {открытый:0},            // Владимир Жириновский
{экцентричный:0},     {замкнутый:0},           // Павел дуров 
{целеустремленный:0}, {гуманный:0},           // Билл Гейтс
{хитрый:0},           {позитивный:0},          // Анатолий Чубайс
{юмор:0},             {дерзкий:0},             // Павел Воля
{своенравный:0},      {агрессивный:0},         // Стив Джобс  

]
 


var o =[
  {"Джуд Лоу":"ироничный"},                    {"Джуд Лоу":"романтичный"},
  {"Ричард Гир":"гуманный"},                   {"Ричард Гир":"харизматичный"},
  {"Элвис Пресли":"максималист"},              {"Элвис Пресли":"щедрый"},
  {"Бенедикт Камбербэтч":"самоуверенный"},     {"Бенедикт Камбербэтч":"юмор"},
  {"Брюс Уиллис":"юмор"},                      {"Брюс Уиллис":"хитрый"}, 
  {"Микки Рурк":"непокорный"},                 {"Микки Рурк":"агрессивный"},
  {"Ив Сен Лоран":"своенравный"},              {"Ив Сен Лоран":"замкнутый"}, 
  {"Джонни Депп":"харизматичный"},             {"Джонни Депп":"свободолюбивый"},
  {"Уилл Смит":"обоятельный"},                 {"Уилл Смит":"общительный"}, 
  {"Джеймс Макэвой":"скромный"},               {"Джеймс Макэвой":"юмор"},
  {"Том Круз":"гуманный"},                     {"Том Круз":"активный"},            
  {"Роберт Де Ниро":"гуманный"},               {"Роберт Де Ниро":"экономный"},           
  {"Брэд Питт":"активный"},                    {"Брэд Питт":"любознательный"},     
  {"Николас Кейдж":"эксентричный"},            {"Николас Кейдж":"креативный"},         
  {"Герман Греф":"настойчивый"},               {"Герман Греф":"дерзкий"},             
  {"Филипп Киркоров":"харизматичный"},         {"Филипп Киркоров":"любознательный"},       
  {"Валентин Юдашкин":"трудолюбивый"},         {"Валентин Юдашкин":"вкус"},                 
  {"Иосиф Кобзон":"воля"},                     {"Иосиф Кобзон":"усидчивость"},           
  {"Сергей Лазарев":"трудолюбивый"},           {"Сергей Лазарев":"расстается"},            
  {"Стас Михайлов":"харизматичный"},           {"Стас Михайлов":"экспрессивный"},        
  {"Александр Маршал":"романтичный"},          {"Александр Маршал":"уверенный"},            
  {"Игорь Крутой":"гуманный"},                 {"Игорь Крутой":"вкус"},                  
  {"Александр Розембаум":"гуманный"},          {"Александр Розембаум":"любознательный"},      
  {"Иван Ургант":"юмор"},                      {"Иван Ургант":"уверенный"},           
  {"Арнольд Шварценеггер":"целеустремленный"}, {"Арнольд Шварценеггер":"изобретательный"},     
  {"Владимир Путин":"осторожный"},             {"Владимир Путин":"замкнутый"},          
  {"Дмитрий Медведев":"жесткий"},              {"Дмитрий Медведев":"неуверенный"},         
  {"Александр Лукашенко":"добродушный"},       {"Александр Лукашенко":"гуманный"},          
  {"Сильвио Берлускони":"харизматичный"},      {"Сильвио Берлускони":"юмор"},               
  {"Дональд Трамп":"энергичный"},              {"Дональд Трамп":"самовлюбленный"},     
  {"Владимир Жириновский":"экцентричный"},     {"Владимир Жириновский":"открытый"},          
  {"Павел дуров":"экцентричный"},              {"Павел дуров":"замкнутый"},           
  {"Билл Гейтс":"целеустремленный"},           {"Билл Гейтс":"гуманный"},          
  {"Анатолий Чубайс":"хитрый"},                {"Анатолий Чубайс":"позитивный"},          
  {"Павел Воля":"юмор"},                       {"Павел Воля":"дерзкий"},            
  {"Стив Джобс":"своенравный"},                {"Стив Джобс":"агрессивный"},      
]

localStorage.setItem("o", JSON.stringify(o));








 
var r=0;

answer.addEventListener("click", function (event){
 

   var timeP = Date.now() - h;
	var target = event.target;
   console.log(target.parentNode)
  var n = target.classList[0]
   ball.style.display = "block";
        ball.src = ball.src;

   

     n=n*2;
    if(target){
     keys = Object.keys(hh[n])
  
    g=(10000-timeP)/10
    
    
    hh[n][keys]=g
     h = Date.now();
     }
  

     keys = Object.keys(hh[n+1])
      
    g=(10000-timeP)/10
    hh[n+1][keys]=g
  h = Date.now();
  
    
var sum = hh.reduce((p, c) => {
  for (var i in c) {
    
    p[i] = (p[i] || 0) + c[i];
  }
  return p;
}, {});
 console.log(hh)
  keys1 = Object.keys(hh[n])
   keys12 = Object.keys(hh[n+1])
  
   keys3 = Object.keys(sum)
   for(zzz in sum) {
    if(zzz==keys1[0]){
      for(yyy in hh){
  keys2 = Object.keys(hh[yyy])
  keys4 = Object.keys(o[yyy])
        if(keys2==zzz) {

          console.log(zzz)
   o[yyy][keys4]=sum[zzz]
 
  } 
}
}
if(zzz==keys12[0]){
      for(yyy in hh){
  keys2 = Object.keys(hh[yyy])
  keys4 = Object.keys(o[yyy])
        if(keys2==zzz) {

          
   o[yyy][keys4]=sum[zzz]
 
   
}
}

}}
console.log(o)
let maxObj=o.reduce((prev,cur) => cur.keys4>prev.keys?cur:prev,{keys2:-Infinity});

console.log(o)

	setTimeout(function(){
	   if(target.tagName=="DIV") {
		      result+=p;
		    	button2.textContent = "Точность рекомендации-"+ " " + result +" "+ "процентов";		
	}
	 if(target.tagName=="DIV"&& result==99) {
          result=100;
          button2.textContent = "Точность рекомендации-"+ " " + result +" "+ "процентов";  

  }
	},900)
})
   
var s;

button1.addEventListener("click", function(){
  var sum = 0;
  for(yyy in o) {
   keys4 = Object.keys(o[yyy])
   if(isNaN(o[yyy][keys4])){
  o[yyy][keys4]=0;
  

}


  }
   
  o.forEach( function( item ){
    for(tt in item) {
        item.bal = item[tt];
       
    }
   
  
})
 console.log(o)
 var tg = []
function compare(a,b) {
  if (a.bal > b.bal)
    return -1;
  if (a.bal < b.bal)
    return 1;
  return 0;
}

o.sort(compare);
keys44 = Object.keys(o[0])
keys45 = Object.keys(o[1])
keys46 = Object.keys(o[2])
tg.push(keys44[0]) 
tg.push(keys45[0]) 
tg.push(keys46[0]) 
console.log(tg)


localStorage.setItem("tg", JSON.stringify(tg));

document.location.href = "result.html"


})
















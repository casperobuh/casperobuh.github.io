                                               //Объявление переменных 
let button_show_recomendation =  document.getElementById("button").children[0]
let button_accuracy_recomendation=  document.getElementById("button").children[1]
let block_quote = document.getElementById("answer")

let result =0;    let p = 100/36*3;         

                       
                        //Показать/скрыть блок с вопросами.
	function show_hide_block(quote_block_one,quote_block_two) {
		quote_block_one.addEventListener("click", function (e) {
		quote_block_two.style.display ="block";
		quote_block_one.style.display ="none";
	})

  }

show_hide_block(block_quote.children[0],block_quote.children[1]);     show_hide_block(block_quote.children[1],block_quote.children[2]);     show_hide_block(block_quote.children[2],block_quote.children[3]);
show_hide_block(block_quote.children[3],block_quote.children[4]);     show_hide_block(block_quote.children[4],block_quote.children[5]);     show_hide_block(block_quote.children[5],block_quote.children[6]);
show_hide_block(block_quote.children[6],block_quote.children[7]);     show_hide_block(block_quote.children[7],block_quote.children[8]);     show_hide_block(block_quote.children[8],block_quote.children[9]);
show_hide_block(block_quote.children[9],block_quote.children[10]);    show_hide_block(block_quote.children[10],block_quote.children[11]);   show_hide_block(block_quote.children[11],block_quote.children[12]);


let arr =[];  let g ={};

                         
let quality = [

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
{трудолюбивый:0},    {уверенный:0},            // Сергей Лазарев
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
 


let hero_quality =[
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
  {"Сергей Лазарев":"трудолюбивый"},           {"Сергей Лазарев":"уверенный"},            
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

localStorage.setItem("hero_quality", JSON.stringify(hero_quality));       //передача данных на другую страницу



block_quote.addEventListener("click", function (event){
 
                 //Вычисляем полученные баллы, в зависимости от того, сколько времени прошло перед тем ка посетитель выбрал цитату.
	let h = Date.now();
   let timeP = Date.now() - h;
   let target = event.target;
   let n = target.classList[0]
   ball.style.display = "block";
        ball.src = ball.src;

   
     n=n*2;
    if(target){
	     keys = Object.keys(quality[n])
	     g=(10000-timeP)/10
	     quality[n][keys]=g
	     h = Date.now();
     }
  
      keys = Object.keys(quality[n+1])
    g=(10000-timeP)/10
    quality[n+1][keys]=g
    h = Date.now();
  
          
let sum = quality.reduce((p, c) => {
  for (let i in c) {
    p[i] = (p[i] || 0) + c[i];
  }
  return p;
}, {});

  keys1 = Object.keys(quality[n])
  keys12 = Object.keys(quality[n+1])
  keys3 = Object.keys(sum)
  console.log(keys1)
for(zzz in sum) {
   if(zzz==keys1[0]){
      for(yyy in quality){
  		keys2 = Object.keys(quality[yyy])
  		keys4 = Object.keys(hero_quality[yyy])
        	if(keys2==zzz) {
   				hero_quality[yyy][keys4]=sum[zzz]
  			} 
	}
}
if(zzz==keys12[0]){
  	for(yyy in quality){
	  keys2 = Object.keys(quality[yyy])
	  keys4 = Object.keys(hero_quality[yyy])
		if(keys2==zzz) {      
		   hero_quality[yyy][keys4]=sum[zzz]  
		}
	} console.log(keys)

}}


             //Округляем процент при прохождении теста
	setTimeout(function(){
	   if(target.tagName=="DIV") {
		      result+=p;
          result=Math.ceil(result)
		    	 button_accuracy_recomendation.textContent = "Точность рекомендации-"+ " " + result +" "+ "процентов";		
	}
  		if(target.tagName=="DIV"&& result==99) {
           result=100;
           button_accuracy_recomendation.textContent = "Точность рекомендации-"+ " " + result +" "+ "процентов";  
  		}
  		if(result>100){
  			alert("Вы успешно прошли тест. Нажмите на  кнопку 'Получить рекомендачии',чтобы узнать результат");
  		}
	},900)
  
})
  
	

button_show_recomendation.addEventListener("click", function(){
  let sum = 0;
  	for(yyy in hero_quality) {
  		 keys4 = Object.keys(hero_quality[yyy])
   		if(isNaN(hero_quality[yyy][keys4])){
 			 hero_quality[yyy][keys4]=0;
		}
  	}
   
  hero_quality.forEach( function(item){
    for(tt in item) {
        item.bal = item[tt];
       
    }
   
  
})

 let tg = []

 //Сортируем баллы по убыванию
function compare(a,b) {
  if(a.bal > b.bal)
    return -1;
  if(a.bal < b.bal)
    return 1;
    return 0;
}

hero_quality.sort(compare);
keys44 = Object.keys(hero_quality[0])
keys45 = Object.keys(hero_quality[1])
keys46 = Object.keys(hero_quality[2])
tg.push(keys44[0]) 
tg.push(keys45[0]) 
tg.push(keys46[0]) 

console.log(arr)
let d =[];
      //Оставляем уникальные, не повторяющиеся качества
function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // 
   
  }

  return Object.keys(obj); 
 
}


d=(unique(tg)
)

tg=d

                //Передача данных и переход на другую страницу
localStorage.setItem("tg", JSON.stringify(tg));

document.location.href = "result.html"

})
















let j = document.getElementById("result-wrapper");
let j1 = document.getElementById("result-wrapper").children[0]
var div1 = document.createElement("div")
	div1 = document.createElement("div")
	  	divh = document.createElement("div")
var ar = JSON.parse(localStorage.getItem("tg"));
var o = JSON.parse(localStorage.getItem("o"));
var mkImage=function(src){
   var img = new Image()
   img.src=src
   return img
}
arr={
 "Джуд Лоу":mkImage("https://casperobuh.github.io/images/polity/loy.jpg"),
 "Ричард Гир":mkImage("https://casperobuh.github.io/images/polity/gir.jpg"),
 "Элвис Пресли":mkImage("https://casperobuh.github.io/images/polity/presli.jpg"),
 "Бенедикт Камбербэтч":mkImage("https://casperobuh.github.io/images/polity/benedict.jpg"),
 "Брюс Уиллис":mkImage("https://casperobuh.github.io/images/polity/uilis.jpg"),
 "Микки Рурк":mkImage("https://casperobuh.github.io/images/polity/rurk.jpg"),
 "Ив Сен Лоран":mkImage("https://casperobuh.github.io/images/polity/loran.jpg"),
 "Джонни Депп":mkImage("https://casperobuh.github.io/images/polity/depp.jpg"),
 "Уилл Смит":mkImage("https://casperobuh.github.io/images/polity/smith.jpg"),
 "Джеймс Макэвой":mkImage("https://casperobuh.github.io/images/polity/makwoy.jpg"),
 "Том Круз":mkImage("https://casperobuh.github.io/images/polity/kruz.jpg"),
 "Роберт Де Ниро":mkImage("https://casperobuh.github.io/images/polity/robert_de_niro.jpg"),
 "Брэд Питт":mkImage("https://casperobuh.github.io/images/polity/pit.jpg"),
 "Николас Кейдж":mkImage("https://casperobuh.github.io/images/polity/nicolas.jpg"),
 "Герман Греф": mkImage("https://casperobuh.github.io/images/polity/gref.jpg"),
 "Филипп Киркоров": mkImage("https://casperobuh.github.io/images/polity/kirkorov.jpg" ),
 "Валентин Юдашкин":mkImage("https://casperobuh.github.io/images/polity/udashkin.jpg"),
 "Иосиф Кобзон": mkImage("https://casperobuh.github.io/images/polity/kobson.jpg"),
 "Сергей Лазарев": mkImage("https://casperobuh.github.io/images/polity/lasarev.jpg"),
 "Стас Михайлов":mkImage("https://casperobuh.github.io/images/polity/mihailov.jpg"),
 "Александр Маршал": mkImage("https://casperobuh.github.io//images/polity/marchal.jpg"),
 "Игорь Крутой": mkImage("https://casperobuh.github.io/images/polity/krutoy.jpg"),
 "Александр Розембаум":mkImage("https://casperobuh.github.io/images/polity/rosembaum.jpg"),
 "Иван Ургант":mkImage("https://casperobuh.github.io/images/polity/urgant.jpg"),
 "Арнольд Шварценеггер":mkImage("https://casperobuh.github.io/images/polity/arnold.jpg"),
 "Владимир Путин":mkImage("https://casperobuh.github.io/images/polity/putin.jpg"),
 "Дмитрий Медведев":mkImage("https://casperobuh.github.io/images/polity/medvedev.jpg"),
 "Александр Лукашенко": mkImage("https://casperobuh.github.io/images/polity/lucahenko.jpg"),
 "Сильвио Берлускони":mkImage("https://casperobuh.github.io/images/polity/berlusconi.jpg"),
 "Дональд Трамп":mkImage("https://casperobuh.github.io/images/polity/trump.jpg"),
 "Владимир Жириновский":mkImage("https://casperobuh.github.io/images/polity/zhirinovskiy.jpg"),
 "Павел Дуров": mkImage("https://casperobuh.github.io/images/polity/durov.jpg"),
 "Билл Гейтс":mkImage("https://casperobuh.github.io/images/polity/gate.jpg"),
 "Анатолий Чубайс":mkImage("https://casperobuh.github.io/images/polity/chubuys.jpg"),
 "Павел Воля":mkImage("https://casperobuh.github.io/images/polity/voly.jpg"),
 "Стив Джобс":mkImage("https://casperobuh.github.io/images/polity/stiv.jpg"),             
}
var re; var tty;var gh1; var gh; var g11; var gh2; var le =[]; var ii = []; var h2; var div;


 for(var v =0; v<ar.length;v++) {
   	for(w in arr) {
		var image1 =  arr[w]; 
 		if(screen.width>880&&ar[0]==w){
    		gh1 =w;
   			gh = arr[w];
		gh.style.height = 145+"em";
		gh.style.width = 100+"em";

 }
 
		if(screen.width>880&&ar[1]==w){
		   	tty =w;
		   	gh11 = arr[w];
			gh11.style.width = 100+"em";
			gh11.style.height = 145+"em";

		 }

		 if(screen.width>880&&ar[2]==w){
			re =w;
		   	gh2 = arr[w]
			gh2.style.width = 100+"em";
			gh2.style.height = 145+"em";
		   
		 }
 		

 		if(screen.width>320&&screen.width<480&&ar[0]==w){
    		gh1 =w;
   			gh = arr[w];
		gh.style.height = 83+"em";
		gh.style.width = 28+"em";

 }
 
		if(screen.width>320&&screen.width<480&&ar[1]==w){
		   	tty =w;
		   	gh11 = arr[w];
			gh11.style.width = 28+"em";
			gh11.style.height = 83+"em";

		 }

		 if(screen.width>320&&screen.width<480&&ar[2]==w){
			re =w;
		   	gh2 = arr[w]
			gh2.style.width = 28+"em";
			gh2.style.height = 83+"em";
		   
		 }

		 if(screen.width>568&&screen.width<830&&ar[0]==w){
    		gh1 =w;
   			gh = arr[w];
		gh.style.height = 145+"em";
		gh.style.width = 100+"em";

 }
 
		if(screen.width>568&&screen.width<830&&ar[1]==w){
		   	tty =w;
		   	gh11 = arr[w];
			gh11.style.width = 100+"em";
			gh11.style.height = 145+"em";

		 }

		 if(screen.width>568&&screen.width<830&&ar[2]==w){
			re =w;
		   	gh2 = arr[w]
			gh2.style.width = 100+"em";
			gh2.style.height = 145+"em";
		   
		 }
	}

}
le.push(gh1,tty,re)

var h1; var h3;  var buttont; var count;

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
   			console.log(h1)
 		}
 		if(ar[2]==ky[0]){
   			h1 =  o[h][ky];
  			i.push(h1)
    
		 }
	}

}

ii.push(gh,g11,gh2)


function fig(zoom) {
	var start19 =  Date.now();
	var tim = setInterval(function(){
		var time = Date.now()-start19;
	 if(zoom.getBoundingClientRect().height<=2320&&screen.width>880&&time>=500&&time<=9000){
	 	console.log(1)
	    zoom.style.height ="auto"
	    zoom.style.width =parseInt( getComputedStyle(zoom).width)+2 + "px";
	   } 

	   if(zoom.getBoundingClientRect().top>-860&&screen.width>880&&time>=10000&&time<=19000){
	 	console.log(1)
	    j1.style.marginTop = parseInt( getComputedStyle(j1).marginTop)-2 + "px";
	   } 

	 if(zoom.getBoundingClientRect().height<=2320&&screen.width>320&&screen.width<480&&time>=500&&time<=9000){
	 	console.log(1)
	    zoom.style.height ="auto"
	    zoom.style.width =parseInt( getComputedStyle(zoom).width)+2 + "px";
	   } 

	   if(zoom.getBoundingClientRect().top>-860&&screen.width>320&&screen.width<480&&time>=10000&&time<=19000){
	 	console.log(1)
	    j1.style.marginTop = parseInt( getComputedStyle(j1).marginTop)-2 + "px";
	   } 
	  } ,20)

}










var b=1;
buttont.addEventListener("click", function (){
	b++
	if(b%2==0) {
    	fig(gh)
    	// fig(gh11)
    	// fig(gh2)
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


var rt =  i[0]+" "+i[1];
var rr =  i[2]+" "+i[3];
var ry =  i[4]+" "+i[5];

function crub(image,name,har){
	let j1 = document.getElementById("result-wrapper").children[0]
 	div = document.createElement("div")
	var div2 = document.createElement("div")
	var divi = document.createElement("div")
 	var start9 =  Date.now();
	var tim = setInterval(function(){
	 	gh2.classList.add('result');
	  	var timePassed0 = Date.now() - start9;
	  if(screen.width>880&&image.getBoundingClientRect().top<-9&&timePassed0>=500&&timePassed0<8000){
	    j1.style.marginTop = parseInt( getComputedStyle(j1).marginTop)+2 + "px";
	    
	  }
	    if(image.getBoundingClientRect().height>=800&&screen.width>880&&timePassed0>=8500&&timePassed0<=17000){
	    image.style.height ="auto"
	    image.style.width =parseInt( getComputedStyle(image).width)-2 + "px";
	    
	  }
	   if(screen.width>320&&screen.width<480&&image.getBoundingClientRect().top<-9&&timePassed0>=500&&timePassed0<8000){
	    j1.style.marginTop = parseInt( getComputedStyle(j1).marginTop)+2 + "px";
	    
	  }
	
	 if(image.getBoundingClientRect().height>=220&&screen.width>320&&screen.width<480&&timePassed0>8500&&timePassed0<100000){
	 	image.style.height ="auto"
	    image.style.width =parseInt( getComputedStyle(image).width)-2 + "px";
	  
	 }
	  if(screen.width>880&&timePassed0>=13000&&timePassed0<=13002){
		div.className = "name";
	  	div.innerHTML =  "Вам подходит:"+" ";
	  	divi.className = "pname";
	 	divi.innerHTML = name;
	  	j.appendChild(div)
	  	div.appendChild(divi)
	  	
	  }
	   if(screen.width>880&&timePassed0>=13500&&timePassed0<=13502){
	  
	  	div1.className = "haracter";
	  	div1.innerHTML = "Черты характера:"+" ";
	 	divh.className = "haracteri";
	  	divh.innerHTML = har;
	  	j.appendChild(div1)
	  	div1.appendChild(divh)

	  }
	   if(screen.width>880&&timePassed0>=14500&&timePassed0<=14502){
	 	divi2 = document.createElement("div")
		div2.className = "tufli";
	  	div2.innerHTML = "модель туфель:";
	  	divi2.className = "tuflii";
	  	divi2.innerHTML = "какаой-то текст";
	  	j.appendChild(div2)  
	  		div2.appendChild(divi2)
	  }
	   if(screen.width>880&&timePassed0>=15500&&timePassed0<=15502){
	   	buttont.style.display = "block";
	  	buttont.innerHTML = "Увеличить/уменьшить размер";
	   j.appendChild(buttont)
	  }
	  if(screen.width>880&&timePassed0>=16000&&timePassed0<=16002){
	     button5.style.display = "block";
	  	button5.innerHTML = "Следующая рекомендация";
	  	j.appendChild(button5)  
	  }
	 if(screen.width>320&&screen.width<480&&timePassed0>=13000&&timePassed0<=13002){
	 	div.className = "name";
	  	div.innerHTML =  "Вам подходит:"+" ";
	  	divi.className = "pname";
	 	divi.innerHTML = name;
	  	j.appendChild(div)
	  	div.appendChild(divi)
	  }
	   if(screen.width>320&&screen.width<480&&timePassed0>=13500&&timePassed0<=13502){
 			div1.className = "haracter";
	  	div1.innerHTML = "Черты характера:"+" ";
	 	divh.className = "haracteri";
	  	divh.innerHTML = har;
	  	j.appendChild(div1)
	  	div1.appendChild(divh)

	  }
	   if(screen.width>320&&screen.width<480&&timePassed0>=14500&&timePassed0<=14502){
	 		divi2 = document.createElement("div")
		div2.className = "tufli";
	  	div2.innerHTML = "модель туфель:";
	  	divi2.className = "tuflii";
	  	divi2.innerHTML = "какаой-то текст";
	  	j.appendChild(div2)  
	  		div2.appendChild(divi2)
	  }
	   if(screen.width>320&&screen.width<480&&timePassed0>=15500&&timePassed0<=15502){
	   	buttont.style.display = "block";
	  	buttont.innerHTML = "Увеличить";
	  	j.appendChild(buttont)
	  }
	  if(screen.width>320&&screen.width<480&&timePassed0>=16000&&timePassed0<=16002){
	     button5.style.display = "block";
	  	button5.innerHTML = "Следующая рекомендация";
	  	j.appendChild(button5)  
	  }

	 if(screen.width>568&&screen.width<830&&timePassed0>=8500&&timePassed0<9800){
	 	image.style.height ="auto"
	    image.style.width =image.getBoundingClientRect().width-2+ "px";
	  
	 }
	 if(screen.width>568&&screen.width<830&&timePassed0>=13000&&timePassed0<=13002){
		div.className = "name";
	 	div.innerHTML = name;
	 	divi.className = "pname";
	 	divi.innerHTML = "Вам подходит";
	  	j.appendChild(div)
	  	div.appendChild(divi)

	  }
	   if(screen.width>568&&screen.width<830&&timePassed0>=13500&&timePassed0<=13502){
	 	iv1.className = "haracter";
	  	div1.innerHTML = har;
	  	j.appendChild(div1)  
	  }
	   if(screen.width>568&&screen.width<830&&timePassed0>=14500&&timePassed0<=14502){
	 
	 div2.className = "tufli";
	  div2.innerHTML = "какаой-то текст2";
	  j.appendChild(div2)  
	  }
	   if(screen.width>568&&screen.width<830&&timePassed0>=15500&&timePassed0<=15502){
	   buttont.style.display = "block";
	  buttont.innerHTML = "Увеличить";
	   
	  }
	  if(screen.width>568&&screen.width<830&&timePassed0>=16000&&timePassed0<=16002){
	     button5.style.display = "block";
	  button5.innerHTML = "Следующая рекомендация";
	  j.appendChild(button5)  
	  }
	},10)

}



function ct(image,name,har){
   j1.appendChild(gh)
   crub(gh,gh1,rt)
}
ct()

function cru(name,ha) {
	div.innerHTML = "";
	gh.style.display = "none"
   div1.innerHTML = ha
   j1.appendChild(gh11) 
   gh11.classList.add('result');
  crub(gh11,tty,rt)
}
if(screen.width>880){
function crubt(image,name,gf) {
	 j1.style.marginTop = 95 + "em";
   	div.innerHTML = ""
 	gh11.style.display = "none"
  	div1.innerHTML =gf;
   	j1.appendChild(gh2) 
  	crub(gh2,re,ry)
 }
}

if(screen.width>320&&screen.width<480){
 function crubt(image,name,gf) {
	 j1.style.marginTop = 45 + "em";
   	div.innerHTML = ""
 	gh11.style.display = "none"
  	div1.innerHTML =gf;
   	j1.appendChild(gh2) 
  	crub(gh2,re,ry)
 }
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

                                                                //Обьявление переменных
let info_name_one = document.createElement("div");                                          let recomendation_button = document.createElement("div");
let info_haracter_one = document.createElement("div");                                      let model_footwear_one = document.createElement("div");
let to_enlarge_img_button = document.createElement("div");                                  let model_footwear_two = document.createElement("div");
let image_wrapper_block = document.getElementById("result-wrapper");                        let image_block = document.getElementById("result-wrapper").children[0];
let arr_name_hero = JSON.parse(localStorage.getItem("tg"));                                 let arr_object_hero = JSON.parse(localStorage.getItem("hero_quality"));

                                        //обьект   с фотографиями 

let mkImage=function(src){
   let img = new Image()
   img.src=src
   return img
}
arr_img={
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
 "Александр Маршал": mkImage("https://casperobuh.github.io/images/polity/marchal.jpg"),
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

                                         //Общие настройки для телефонов и компьютеров.
let hero_name_three; let hero_name_two; let hero_name_one; let hero_img_one; let hero_img_two; let hero_img_three;
let arr_unique_hero =[]; let arr_img_unique_hero = [];  let a =0;   


let screen_width_pc_n = 850;                 let screen_width_pc_k =2000;             let width_img_pc =100;                           let height_img_pc = 800;                                
let screen_width_phone_min = 550;            let screen_width_phone_max = 830;        let screen_width_phone_portrait_min = 310;       let screen_width_phone_portrait_max = 480;
let timePassed_img_phone_portrait = 4000;    let timePassed_img_phone = 8500;         let timePassed_img_pc = 8500;                    let height_img_phone_portrait = 350;
let height_img_phone = 340;                  let img_getBoundingClientRect_bottom =800;  let bottom_phone = 350;                                              

let timePassed_information_hero_name_pc_min = 13000;                      let timePassed_information_hero_name_pc_max = 13050;
let timePassed_information_hero_name_phone_portrait_min = 5000;           let timePassed_information_hero_name_phone_portrait_max = 5050;
let timePassed_information_hero_haracter_pc_min = 13500;                  let timePassed_information_hero_haracter_pc_max = 13550;
let timePassed_information_hero_haracter_phone_portrait_min = 5500;       let timePassed_information_hero_haracter_phone_portrait_max = 5510;
let timePassed_information_model_footwaer_pc_min = 14500;                 let timePassed_information_model_footwaer_pc_max = 14550;
let timePassed_information_model_footwaer_phone_portrait_min = 6500;      let timePassed_information_model_footwaer_phone_portrait_max = 6550;
let timePassed_to_enlarge_img_button_pc_min = 15500;                      let timePassed_to_enlarge_img_button_pc_max = 15550;
let timePassed_recomendation_button_img_pc_min = 16000;                   let timePassed_recomendation_button_img_pc_max = 16050;
let timePassed_to_enlarge_img_button_phone_min = 7000;                    let timePassed_to_enlarge_img_button_phone_max = 7050;
let timePassed_recomendation_button_img_phone_min = 8000;                 let timePassed_recomendation_button_img_phone_max = 8050;

                                 // Обьявляем размеры для трех героев.
                                           
function  size_hero() {
 	for(var v =0; v<arr_name_hero.length;v++) {
   		for(w in arr_img) {
			let image1 =  arr_img[w]; 
	 		if(screen.width>screen_width_pc_n &&arr_name_hero[0]==w){
		    	 hero_name_one =w;
		   		 hero_img_one = arr_img[w];
				 hero_img_one.style.height = 145+"em";
				 hero_img_one.style.width = 100+"em";
	        }
 
			if(screen.width>screen_width_pc_n &&arr_name_hero[1]==w){
			   	hero_name_two =w;
			   	hero_img_two = arr_img[w];
				hero_img_two.style.width = 100+"em";
				hero_img_two.style.height = 145+"em";
		   }

		 	if(screen.width>screen_width_pc_n &&arr_name_hero[2]==w){
				hero_name_three =w;
			   	hero_img_three = arr_img[w]
				hero_img_three.style.width = 100+"em";
				hero_img_three.style.height = 145+"em";
		    }
 		    if(screen.width>screen_width_phone_portrait_min&&screen.width<screen_width_phone_portrait_max&&arr_name_hero[0]==w){
	    		hero_name_one =w;
	   			hero_img_one = arr_img[w];
			    hero_img_one.style.height = 75+"em";
			    hero_img_one.style.width = 25+"em";
            }
 
		if(screen.width>screen_width_phone_portrait_min&&screen.width<screen_width_phone_portrait_max&&arr_name_hero[1]==w){
		   	 hero_name_two =w;
		   	 hero_img_two = arr_img[w];
			 hero_img_two.style.width = 25+"em";
			 hero_img_two.style.height = 75+"em";
		 }

		if(screen.width>screen_width_phone_portrait_min&&screen.width<screen_width_phone_portrait_max&&arr_name_hero[2]==w){
			hero_name_three =w;
		   	hero_img_three= arr_img[w]
			hero_img_three.style.width = 25+"em";
			hero_img_three.style.height = 75+"em";
		   
		}

		 if(screen.width>screen_width_phone_min&&screen.width<screen_width_phone_max&&arr_name_hero[0]==w){
    		hero_name_one =w;
   			hero_img_one = arr_img[w];
		    hero_img_one.style.height = 120+"em";
		 	hero_img_one.style.width = 50+"em";
        }
 
		if(screen.width>screen_width_phone_min&&screen.width<screen_width_phone_max&&arr_name_hero[1]==w){
		    hero_name_two =w;
		   	hero_img_two = arr_img[w];
			hero_img_two.style.width = 50+"em";
			hero_img_two.style.height = 120+"em";
		 }

		if(screen.width>screen_width_phone_min&&screen.width<screen_width_phone_max&&arr_name_hero[2]==w){
			hero_name_three =w;
		   	hero_img_three = arr_img[w]
			hero_img_three.style.width = 50+"em";
			hero_img_three.style.height = 120+"em";
		 }

 		
	}

}
                     //Добавляем в массив трех героев
arr_unique_hero.push(hero_name_one, hero_name_two,hero_name_three)

}
size_hero()

                      //Добавляем в массивы качества героев.

var character_one =[];   let character_two = []; let character_three = [];
for(var v =0; v<arr_name_hero.length;v++) {
	for(h in  arr_object_hero) {
    	let ky = Object.keys( arr_object_hero[h])
		let k =   arr_object_hero[h]; 
	 	if(arr_name_hero[0]==ky[0]){
   			h1 =   arr_object_hero[h][ky];
   			
			character_one.push(h1)

        }
        
		if(arr_name_hero[1]==ky[0]){
   			h1 =   arr_object_hero[h][ky];
   			character_two.push(h1)
   		
 		}
 		if(arr_name_hero[2]==ky[0]){
   			h1 =   arr_object_hero[h][ky];
  			character_three.push(h1)
    
		 }
	}

}

 arr_img_unique_hero.push( hero_img_one,hero_img_two,hero_img_three)




if(typeof  hero_img_one == "undefined") {
	 hero_img_one =hero_img_two
}
  

let character_hero_one = character_one[0]+" "+character_one[1];
let character_hero_two = character_two[0]+" "+character_two[1];
let character_hero_three = character_three[0]+" "+character_three[1];
z=0;


                                 // Логика анимации героев
function hero_animation(image,screen_width_min,screen_width_max,timePassed,height_img){
 	let start =  Date.now();
	let t = setInterval(function(){
	let timePassed0 = Date.now() - start;
	if(screen.width> screen_width_min&&screen.width<screen_width_max&&image.getBoundingClientRect().top<-9&&timePassed0>500){
	    image_block.style.marginTop = parseInt( getComputedStyle(image_block).marginTop)+2 + "px"; 
	}
    if(image.getBoundingClientRect().height>height_img&&screen.width>screen_width_min&&screen.width<screen_width_max&&timePassed0>timePassed){
    image.style.height ="auto"
    image.style.width =parseInt( getComputedStyle(image).width)-2 + "px";
    
  }
	image_block.appendChild(image)
   	if(z==1) {
	   	clearInterval(t)
	   }
	},10)

}

 hero_animation(hero_img_one,screen_width_pc_n,screen_width_pc_k, timePassed_img_pc,height_img_pc)
 hero_animation(hero_img_one,screen_width_phone_min,screen_width_phone_max,  timePassed_img_phone,height_img_phone)
 hero_animation(hero_img_one,screen_width_phone_portrait_min,screen_width_phone_portrait_max,timePassed_img_phone_portrait, height_img_phone_portrait)

                                  //Информация о героях.
   function info_hero(name, haracter,screen_width_min,screen_width_max,timePassed_information_hero_name_min,timePassed_information_hero_name_max,timePassed_information_hero_haracter_min,timePassed_information_hero_haracter_max,timePassed_information_model_footwaer_min,timePassed_information_model_footwaer_max,  timePassed_to_enlarge_img_button_pc_min, timePassed_to_enlarge_img_button_pc_max,timePassed_recomendation_button_img_pc_min, timePassed_recomendation_button_img_pc_max){
   		let start2 =  Date.now();
		setInterval(function(){
			let timePassed0 = Date.now() - start2;
			    if(screen.width> screen_width_min&&screen.width<screen_width_max&&timePassed0>timePassed_information_hero_name_min&&timePassed0<timePassed_information_hero_name_max){
				  	info_name_one.style.display = "block"
				  	 let info_name_two = document.createElement("div")
					info_name_one.className = "name";
				  	info_name_one.innerHTML =  "Вам подходит:"+" ";
				  	info_name_two.className = "pname";
				 	info_name_two.innerHTML = name;    
				  	image_wrapper_block.appendChild(info_name_one)
				  	info_name_one.appendChild(info_name_two) 	
			    }
			    if(screen.width>screen_width_min&&screen.width<screen_width_max&&timePassed0> timePassed_information_hero_haracter_min&&timePassed0< timePassed_information_hero_haracter_max){
				     info_haracter_one.style.display = "block"
				     let info_haracter_two = document.createElement("div")
				  	info_haracter_one.className = "haracter";
				  	info_haracter_one.innerHTML = "Черты характера:"+" ";
				 	info_haracter_two.className = "haracteri";
				  	info_haracter_two.innerHTML = haracter;   
				  	image_wrapper_block.appendChild(info_haracter_one)
				  	info_haracter_one.appendChild(info_haracter_two)
			    }

			    if(screen.width>screen_width_min&&screen.width<screen_width_max&&timePassed0>timePassed_information_model_footwaer_min&&timePassed0<timePassed_information_model_footwaer_max){
				 	model_footwear_one.style.display = "block"  
					model_footwear_one.className = "tufli";
				  	model_footwear_one.innerHTML = "модель туфель:";
				  	model_footwear_two.className = "tuflii";
				  	model_footwear_two.innerHTML = "какаой-то текст";
				    image_wrapper_block.appendChild(model_footwear_one)  
				  	model_footwear_one.appendChild(model_footwear_two)
			    }
			   if(screen.width>screen_width_min&&screen.width<screen_width_max&&timePassed0>timePassed_to_enlarge_img_button_pc_min&&timePassed0< timePassed_to_enlarge_img_button_pc_max ){
				   	to_enlarge_img_button.className = "button-result";
				   	to_enlarge_img_button.style.display = "block";
				    to_enlarge_img_button.innerHTML = "Увеличить размер";
				    image_wrapper_block.appendChild(to_enlarge_img_button)
			  }
			    if(screen.width>screen_width_min&&screen.width<screen_width_max&&timePassed0> timePassed_recomendation_button_img_pc_min&&timePassed0< timePassed_recomendation_button_img_pc_max){
					recomendation_button.className = "recom";
				    recomendation_button.style.display = "block";
				  	recomendation_button.innerHTML = "Следующая рекомендация";
				    image_wrapper_block.appendChild( recomendation_button)  
			    }
         },10)
    }
info_hero (hero_name_one,character_hero_one,screen_width_pc_n,screen_width_pc_k,timePassed_information_hero_name_pc_min,timePassed_information_hero_name_pc_max, 
	       timePassed_information_hero_haracter_pc_min, timePassed_information_hero_haracter_pc_max, timePassed_information_model_footwaer_pc_min,timePassed_information_model_footwaer_pc_max,
	       timePassed_to_enlarge_img_button_pc_min, timePassed_to_enlarge_img_button_pc_max,timePassed_recomendation_button_img_pc_min, timePassed_recomendation_button_img_pc_max
	     )

info_hero (hero_name_one,character_hero_one, screen_width_phone_min, screen_width_phone_max,timePassed_information_hero_name_pc_min,timePassed_information_hero_name_pc_max,
	      timePassed_information_hero_haracter_pc_min,timePassed_information_hero_haracter_pc_max,timePassed_information_model_footwaer_pc_min ,timePassed_information_model_footwaer_pc_max, 
	      timePassed_to_enlarge_img_button_pc_min, timePassed_to_enlarge_img_button_pc_max,timePassed_recomendation_button_img_pc_min,timePassed_recomendation_button_img_pc_max)
	      
	
	


info_hero(hero_name_one,character_hero_one, screen_width_phone_portrait_min,screen_width_phone_portrait_max,
	     timePassed_information_hero_name_phone_portrait_min,timePassed_information_hero_name_phone_portrait_max, 
	     timePassed_information_hero_haracter_phone_portrait_min,timePassed_information_hero_haracter_phone_portrait_max, 
	     timePassed_information_model_footwaer_phone_portrait_min,timePassed_information_model_footwaer_phone_portrait_max,
		 timePassed_to_enlarge_img_button_phone_min, timePassed_to_enlarge_img_button_phone_max,timePassed_recomendation_button_img_phone_min, timePassed_recomendation_button_img_phone_max)


if(typeof hero_img_three == "undefined") {
	hero_img_three = hero_img_two;
}



 
 	 recomendation_button.addEventListener("click", function (){
 		 info_name_one.style.display = "none";
 		 info_haracter_one.style.display = "none";
 		 model_footwear_one.style.display = "none";
 		 to_enlarge_img_button.style.display = "none";
 		 recomendation_button.style.display = "none";
 		  z=0;
          a++
    if(a==1) {
    	 hero_img_one.style.display = "none"
    	 hero_img_two.classList.add('result');

    	info_hero(hero_name_two,character_hero_two, screen_width_phone_min, screen_width_phone_max,timePassed_information_hero_name_pc_min,timePassed_information_hero_name_pc_max,
	             timePassed_information_hero_haracter_pc_min,timePassed_information_hero_haracter_pc_max,timePassed_information_model_footwaer_pc_min ,timePassed_information_model_footwaer_pc_max, 
	             timePassed_to_enlarge_img_button_pc_min, timePassed_to_enlarge_img_button_pc_max,timePassed_recomendation_button_img_pc_min,timePassed_recomendation_button_img_pc_max)
    	
    	info_hero(hero_name_two,character_hero_two, screen_width_phone_portrait_min,screen_width_phone_portrait_max,timePassed_information_hero_name_phone_portrait_min,timePassed_information_hero_name_phone_portrait_max,
                  timePassed_information_hero_haracter_phone_portrait_min,timePassed_information_hero_haracter_phone_portrait_max, 
                  timePassed_information_model_footwaer_phone_portrait_min ,timePassed_information_model_footwaer_phone_portrait_max,timePassed_to_enlarge_img_button_phone_min, timePassed_to_enlarge_img_button_phone_max,timePassed_recomendation_button_img_phone_min, timePassed_recomendation_button_img_phone_max)

    	info_hero(hero_name_two,character_hero_two,screen_width_pc_n,screen_width_pc_k,timePassed_information_hero_name_pc_min,timePassed_information_hero_name_pc_max, 
                 timePassed_information_hero_haracter_pc_min, timePassed_information_hero_haracter_pc_max,timePassed_information_model_footwaer_pc_min ,timePassed_information_model_footwaer_pc_max,
                 timePassed_to_enlarge_img_button_pc_min, timePassed_to_enlarge_img_button_pc_max,timePassed_recomendation_button_img_pc_min, timePassed_recomendation_button_img_pc_max)


        hero_animation(hero_img_two,screen_width_pc_n,screen_width_pc_k, timePassed_img_pc,height_img_pc)

       hero_animation(hero_img_two,screen_width_phone_min,screen_width_phone_max,  timePassed_img_phone,height_img_phone)
       
       hero_animation(hero_img_two,screen_width_phone_portrait_min,screen_width_phone_portrait_max,timePassed_img_phone_portrait, height_img_phone_portrait)
 
  }
     if(a==2){
     	hero_img_two.style.display = "none"
     	hero_img_three.classList.add('result-two');
     	hero_animation(hero_img_three,screen_width_pc_n,screen_width_pc_k, timePassed_img_pc,height_img_pc)
 		hero_animation(hero_img_three,screen_width_phone_min,screen_width_phone_max,  timePassed_img_phone,height_img_phone)
 		hero_animation(hero_img_three,screen_width_phone_portrait_min,screen_width_phone_portrait_max,timePassed_img_phone_portrait, height_img_phone_portrait)
		info_hero(hero_name_three,character_hero_three,screen_width_pc_n,screen_width_pc_k,timePassed_information_hero_name_pc_min,timePassed_information_hero_name_pc_max, timePassed_information_hero_haracter_pc_min, timePassed_information_hero_haracter_pc_max,timePassed_information_model_footwaer_pc_min ,timePassed_information_model_footwaer_pc_max, timePassed_to_enlarge_img_button_pc_min, timePassed_to_enlarge_img_button_pc_max,timePassed_recomendation_button_img_pc_min, timePassed_recomendation_button_img_pc_max)
		info_hero(hero_name_three,character_hero_three,screen_width_phone_min, screen_width_phone_max,timePassed_information_hero_name_pc_min,timePassed_information_hero_name_pc_max,timePassed_information_hero_name_pc_max, timePassed_information_hero_haracter_pc_min, timePassed_information_hero_haracter_pc_max,timePassed_information_model_footwaer_pc_min ,timePassed_information_model_footwaer_pc_max, timePassed_to_enlarge_img_button_pc_min, timePassed_to_enlarge_img_button_pc_max,timePassed_recomendation_button_img_pc_min, timePassed_recomendation_button_img_pc_max)
        info_hero(hero_name_three,character_hero_three, screen_width_phone_portrait_min,screen_width_phone_portrait_max,timePassed_information_hero_name_phone_portrait_min,timePassed_information_hero_name_phone_portrait_max, timePassed_information_hero_haracter_phone_portrait_min, timePassed_information_hero_haracter_phone_portrait_max, timePassed_information_model_footwaer_phone_portrait_min , timePassed_information_model_footwaer_phone_portrait_max, timePassed_to_enlarge_img_button_phone_min, timePassed_to_enlarge_img_button_phone_max,timePassed_recomendation_button_img_phone_min, timePassed_recomendation_button_img_phone_max)

     }
     })
                        //функция увеличения героев.
function zoom_img (screen_min,screen_max,zoom,zoom_bottom,timePassed) {
	let start=  Date.now();
	let yy = setInterval(function(){
    let time = Date.now()-start;
		if(screen.width>screen_min&&screen.width<screen_max&&time<timePassed){
		    zoom.style.height ="auto"
		    zoom.style.width =parseInt( getComputedStyle(zoom).width)+2 + "px";
	   } 

	    if(screen.width>screen_min&&screen.width<screen_max&&time>timePassed&&zoom.getBoundingClientRect().bottom>zoom_bottom){
	     zoom.style.marginTop = parseInt( getComputedStyle(zoom).marginTop)-2 + "px";
	   } 
	   
 	   if(z==2) {
	   	clearInterval(yy)
	   }
	  } ,20)

}

               
 to_enlarge_img_button.addEventListener("click",function(){
 	z++
 
 	if(z==1){
 		 info_name_one.style.display = "none";
 		 info_haracter_one.style.display = "none";
 		 model_footwear_one.style.display = "none";
 		 to_enlarge_img_button.style.display = "none";
 	     recomendation_button.style.display = "none";
 	     zoom_img(screen_width_pc_n, screen_width_pc_k,hero_img_one,img_getBoundingClientRect_bottom,timePassed_img_pc);
 	     zoom_img(screen_width_phone_min,screen_width_phone_max,hero_img_one,bottom_phone,4000);
 	     zoom_img(screen_width_phone_portrait_min,screen_width_phone_portrait_max,hero_img_one,1200,1500);
 	      
 	}
 	if(z==1&&a==1){
 		 zoom_img(screen_width_pc_n, screen_width_pc_k,hero_img_two,img_getBoundingClientRect_bottom,timePassed_img_pc);
 	     zoom_img(screen_width_phone_min,screen_width_phone_max,hero_img_two,bottom_phone,4000);
 	     zoom_img(screen_width_phone_portrait_min,screen_width_phone_portrait_max,hero_img_two,1200,1500);
 	}
 	if(z==1&&a==2){
 	 	 zoom_img(screen_width_pc_n, screen_width_pc_k,hero_img_three,img_getBoundingClientRect_bottom,timePassed_img_pc);
 	     zoom_img(screen_width_phone_min,screen_width_phone_max,hero_img_three,bottom_phone,4000);
 	     zoom_img(screen_width_phone_portrait_min,screen_width_phone_portrait_max,hero_img_three,1200,1500);
 	}
	 	
 })
 

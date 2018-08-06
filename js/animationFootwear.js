
let navigationList = document.getElementById("navigation-list").children[0];
let rightBeltImage = document.getElementById("right-belt-image");
let footwearList =  document.getElementById("footwear-list")
let accessories =  document.getElementById("accessories")
let contacts_info =document.getElementsByTagName("p"); 


   test.addEventListener("click",function(e){
		document.location.href = "test.html"
	})

	footwearList.addEventListener("click",function(e){
		document.location.href = "italian.html"
	})



	function width_image_animation (img_one,img_two) {
		img_one.addEventListener("mouseover",function(e){
		timer5 = setTimeout(function(e) {	
			img_two.style.width = 100 + "%";		
		}, 20)	
		  
    })
			}
				width_image_animation(footwearList.children[0],rightBeltImage.children[0])
				width_image_animation(footwearList.children[1],rightBeltImage.children[1])
				width_image_animation(footwearList.children[2],rightBeltImage.children[2])
				width_image_animation(footwearList.children[3],rightBeltImage.children[3])
				width_image_animation(footwearList.children[4],rightBeltImage.children[4])
		
	   
   contacts.addEventListener("mouseover",function(e){
		timer5 = setTimeout(function(e) {
		 	for (var i = 0; i < contacts_info.length; i++) {
				contacts_info[i].style.display = "block";
				contacts_info[i].style.width = 600 + "px";
			}
				rightBeltImage.children[6].style.width = 100 + "%";
		},20)	
	  
	})

     contacts.addEventListener("mouseout",function(e){
		timer5 = setTimeout(function(e) {
			for (var i = 0; i < contacts_info.length; i++) {
				contacts_info[i].style.width = 0 + "px";
				contacts_info[i].style.display = "none";
				rightBeltImage.children[6].style.width= 0 + "%";	
			}	
			
				
		},20)	
	})

    function reverse_width_image_animation(img_one,img_two) {
    	img_one.addEventListener("mouseout",function(e){
			timer5 = setTimeout(function(e) {	
				img_two.style.width = 0 + "%";		
		}, 20)	
  
	})
                }
	    
            reverse_width_image_animation(footwearList.children[0],rightBeltImage.children[0])
            reverse_width_image_animation(footwearList.children[1],rightBeltImage.children[1])
            reverse_width_image_animation(footwearList.children[2],rightBeltImage.children[2])
            reverse_width_image_animation(footwearList.children[3],rightBeltImage.children[3])
            reverse_width_image_animation(footwearList.children[4],rightBeltImage.children[4])



                                                                  //Версия для персональных компьютеров
let screen_width_pc_n = 880;                       let screen_width_pc_k =2000;                          let timePassed_img_one_n = 0;                        let timePassed_img_one_k = 1600;
let timePassed_img_two_n = 1600;                   let timePassed_img_two_k = 2900;                      let timePassed_img_three_n = 2900;                   let timePassed_img_three_k = 4200;
let timePassed_img_four_n = 4200;                  let timePassed_img_four_k = 5500;                     let timePassed_img_five_n = 5500;                    let timePassed_img_five_k = 6800;
let footwear_img_leather_bags_margin = 460;
     
                                                                 //Версия для телефонов (Альбомная версия)
let screen_width_phone_min = 550;                  let screen_width_phone_max = 830;                     let timePassed_img_one_phone_n = 0;                  let timePassed_img_one_phone_k =1000;
let timePassed_img_two_phone_n = 1000;             let timePassed_img_two_phone_k = 2000;                let timePassed_img_three_phone_n = 2000;             let timePassed_img_three_phone_k = 3000;
let timePassed_img_four_phone_n = 3000;            let timePassed_img_four_phone_k = 4000;               let timePassed_img_five_phone_n = 4000;              let timePassed_img_five_phone_k = 5000;
    
                                                                 //Версия для телефонов (Портретная версия)
let screen_width_phone_portrait_min = 310;         let screen_width_phone_portrait_max = 480;            let timePassed_img_one_phone_portrait_n = 0;         let timePassed_img_one_phone_portrait_k = 600
let timePassed_img_two_phone_portrait_n = 700;     let timePassed_img_two_phone_portrait_k = 1100;       let timePassed_img_three_phone_portrait_n = 1300;    let timePassed_img_three_phone_portrait_k = 1700;
let timePassed_img_four_phone_portrait_n = 1900;   let timePassed_img_four_phone_portrait_k = 2300;      let timePassed_img_five_phone_portrait_n = 2500;     let timePassed_img_five_phone_portrait_k = 2900;

 let timePassed_img_one_k_update = 1300;
  function anomation_footwearList_img(screen_width_pc_n,screen_width_pc_k,timePassed_img_n, timePassed_img_k,footwear_img,count_img){
		let start = Date.now();	
		setInterval(function(e) {
			let timePassed = Date.now() - start; 
		    if(screen.width>screen_width_pc_n&&screen.width<screen_width_pc_k&&timePassed > timePassed_img_n&&timePassed<timePassed_img_k) {
	        	footwear_img.style.visibility = "visible";
	        	footwear_img.style.marginLeft =parseInt( getComputedStyle(footwear_img).marginLeft) + 2 + 'px';	
	        }
		     
		     
		},20)	
}
     
function f(img,time) {
	setTimeout(function(){
    	img.style.visibility = "hidden";
    },time)
}

 
navigationList.addEventListener("mouseover",function(event){
	 anomation_footwearList_img(screen_width_pc_n,screen_width_pc_k, timePassed_img_one_n,timePassed_img_one_k,footwearList.children[0])
	 anomation_footwearList_img(screen_width_pc_n,screen_width_pc_k, timePassed_img_two_n,timePassed_img_two_k,footwearList.children[1])
	 anomation_footwearList_img(screen_width_pc_n,screen_width_pc_k, timePassed_img_three_n,timePassed_img_three_k,footwearList.children[2])
	 anomation_footwearList_img(screen_width_pc_n,screen_width_pc_k, timePassed_img_four_n,timePassed_img_four_k,footwearList.children[3])
	 anomation_footwearList_img(screen_width_pc_n,screen_width_pc_k, timePassed_img_five_n,timePassed_img_five_k,footwearList.children[4])
	 anomation_footwearList_img(screen_width_phone_min,screen_width_phone_max, timePassed_img_one_phone_n, timePassed_img_one_phone_k,footwearList.children[0])
	 anomation_footwearList_img(screen_width_phone_min,screen_width_phone_max, timePassed_img_two_phone_n, timePassed_img_two_phone_k,footwearList.children[1])
	 anomation_footwearList_img(screen_width_phone_min,screen_width_phone_max, timePassed_img_three_phone_n, timePassed_img_three_phone_k,footwearList.children[2])
	 anomation_footwearList_img(screen_width_phone_min,screen_width_phone_max, timePassed_img_four_phone_n, timePassed_img_four_phone_k,footwearList.children[3])
	 anomation_footwearList_img(screen_width_phone_min,screen_width_phone_max, timePassed_img_five_phone_n, timePassed_img_five_phone_k,footwearList.children[4])
	 anomation_footwearList_img(screen_width_phone_portrait_min,screen_width_phone_portrait_max,timePassed_img_one_phone_portrait_n,timePassed_img_one_phone_portrait_k,footwearList.children[0])
	 anomation_footwearList_img(screen_width_phone_portrait_min,screen_width_phone_portrait_max,timePassed_img_two_phone_portrait_n,timePassed_img_two_phone_portrait_k,footwearList.children[1])
	 anomation_footwearList_img(screen_width_phone_portrait_min,screen_width_phone_portrait_max,timePassed_img_three_phone_portrait_n,timePassed_img_three_phone_portrait_k,footwearList.children[2])
	 anomation_footwearList_img(screen_width_phone_portrait_min,screen_width_phone_portrait_max,timePassed_img_four_phone_portrait_n,timePassed_img_four_phone_portrait_k,footwearList.children[3])
	 anomation_footwearList_img(screen_width_phone_portrait_min,screen_width_phone_portrait_max,timePassed_img_five_phone_portrait_n,timePassed_img_five_phone_portrait_k,footwearList.children[4])
},true)
			

function  anomation_reverse_footwearList_img(screen_width_pc_n,screen_width_pc_k,timePassed_img_n, timePassed_img_k,footwear_img,count_img){
		let start = Date.now(); 
		timer2 = setInterval(function(e) {
			let timePassed = Date.now() - start; 
			if(screen.width>screen_width_pc_n&&screen.width<screen_width_pc_k&&timePassed > timePassed_img_n&&timePassed<timePassed_img_k) {	  
	       		 footwear_img.style.marginLeft =parseInt( getComputedStyle(footwear_img).marginLeft) - 2 + 'px';
        	}
         	footwearList.children[0].addEventListener("click", function(event) {
     			document.location.href = "italian.html"
         	})
	      
		},20)	
}

function reset() {
	for(var i = 0; i<footwearList.children.length;i++) {
		footwearList.children[i].style.marginLeft = 0 + "px"
		footwearList.children[i].style.visibility = "hidden";
	}	  	
}
function reset2(){
	for(var i = 0; i<footwearList.children.length;i++) {
		 footwearList.children[i].style.marginLeft =parseInt( getComputedStyle(footwearList.children[i]).marginLeft) - 3 + 'px';	
	}
}
		

footwearList.addEventListener("mouseout",function(event){
	f(footwearList.children[4],timePassed_img_one_k_update);   f(footwearList.children[3],timePassed_img_two_k);
	f(footwearList.children[2],timePassed_img_three_k); f(footwearList.children[1],timePassed_img_four_k);
	f(footwearList.children[0],timePassed_img_five_k)
	 anomation_reverse_footwearList_img(screen_width_pc_n,screen_width_pc_k, timePassed_img_five_n,timePassed_img_five_k,footwearList.children[0])
	 anomation_reverse_footwearList_img(screen_width_pc_n,screen_width_pc_k, timePassed_img_four_n,timePassed_img_four_k,footwearList.children[1])
     anomation_reverse_footwearList_img(screen_width_pc_n,screen_width_pc_k, timePassed_img_three_n,timePassed_img_three_k,footwearList.children[2])
     anomation_reverse_footwearList_img(screen_width_pc_n,screen_width_pc_k, timePassed_img_two_n,timePassed_img_two_k,footwearList.children[3])
     anomation_reverse_footwearList_img(screen_width_pc_n,screen_width_pc_k, timePassed_img_one_n,timePassed_img_one_k,footwearList.children[4])
	    })
		
	navigationList.addEventListener("mouseover",function(e){ reset();  anomation_footwearList_img(); });     footwearList.addEventListener("mouseout",function(e){ reset2();  anomation_reverse_footwearList_img() });   
			
	accessories.addEventListener("click",function(event){
		document.location.href = "accesories.html"
	})

			
				
	  
		
			
			

			
	   










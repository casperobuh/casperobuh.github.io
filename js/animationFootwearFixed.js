
let accessories_fixed =   document.getElementById("block-flex").children[1];                        
let navigationListFixed = document.getElementById("navigation-list-fixed");
let blockFlex = document.getElementById("block-flex").children[0];
let elemBottom =blockFlex.getBoundingClientRect().bottom+window.pageYOffset;
let footwearListFixed =  document.getElementById("footwearListFixed");
let test = document.getElementById("block-flex").children[3];  
  


let window_pageYOffset_phone_portrait = 400;       var window_pageYOffset_phone = 200;
let window_pageYOffset_pc = 500;


function block_fixed_img(screen_width_min,screen_width_max,window_pageYOffset_phone) {
	window.addEventListener("scroll",function() {
	    if(screen.width>screen_width_min&&screen.width<screen_width_max&&window.pageYOffset<window_pageYOffset_phone){
		 	 navigationListFixed.style.visibility = "hidden"
			 navigationListFixed.classList.remove("navigation-list-fixed");   
	    }
	    if (window.pageYOffset > elemBottom) {
			  navigationListFixed.style.visibility = "visible"
	         navigationListFixed.classList.add('navigation-list-fixed');  
	    }
	})
}


block_fixed_img(screen_width_pc_n,screen_width_pc_k,window_pageYOffset_pc)
block_fixed_img(screen_width_phone_min,screen_width_phone_min,window_pageYOffset_phone)
block_fixed_img(screen_width_phone_portrait_min,screen_width_phone_portrait_max, window_pageYOffset_phone_portrait)


 function anomation_footwearList_img_fixed(screen_width_pc_n,screen_width_pc_k,timePassed_img_n, timePassed_img_k,footwear_img_fixed){
	let start = Date.now();	
	setInterval(function(e) {
		let timePassed = Date.now() - start; 
        if(screen.width>screen_width_pc_n&&screen.width<screen_width_pc_k&&timePassed > timePassed_img_n&&timePassed<timePassed_img_k) {
        	footwear_img_fixed.style.visibility = "visible";
        	footwear_img_fixed.style.marginTop =parseInt( getComputedStyle(footwear_img_fixed).marginTop) + 2 + 'px';	
        }
	     
	     
	}, 20)	
}





blockFlex.addEventListener("mouseover",function(event){	   
	anomation_footwearList_img_fixed(screen_width_pc_n,screen_width_pc_k, timePassed_img_one_n,timePassed_img_one_k,footwearListFixed.children[0])
	anomation_footwearList_img_fixed(screen_width_pc_n,screen_width_pc_k, timePassed_img_two_n,timePassed_img_two_k,footwearListFixed.children[1])
	anomation_footwearList_img_fixed(screen_width_pc_n,screen_width_pc_k, timePassed_img_three_n,timePassed_img_three_k,footwearListFixed.children[2])
	anomation_footwearList_img_fixed(screen_width_pc_n,screen_width_pc_k, timePassed_img_four_n,timePassed_img_four_k,footwearListFixed.children[3])
	anomation_footwearList_img_fixed(screen_width_pc_n,screen_width_pc_k, timePassed_img_five_n,timePassed_img_five_k,footwearListFixed.children[4])
	anomation_footwearList_img_fixed(screen_width_phone_portrait_min,screen_width_phone_portrait_max,timePassed_img_one_phone_portrait_n,timePassed_img_one_phone_portrait_k,footwearListFixed.children[0])
	anomation_footwearList_img_fixed(screen_width_phone_portrait_min,screen_width_phone_portrait_max,timePassed_img_two_phone_portrait_n,timePassed_img_two_phone_portrait_k,footwearListFixed.children[1])
	anomation_footwearList_img_fixed(screen_width_phone_portrait_min,screen_width_phone_portrait_max,timePassed_img_three_phone_portrait_n,timePassed_img_three_phone_portrait_k,footwearListFixed.children[2])
	anomation_footwearList_img_fixed(screen_width_phone_portrait_min,screen_width_phone_portrait_max,timePassed_img_four_phone_portrait_n,timePassed_img_four_phone_portrait_k,footwearListFixed.children[3])
	anomation_footwearList_img_fixed(screen_width_phone_portrait_min,screen_width_phone_portrait_max,timePassed_img_five_phone_portrait_n,timePassed_img_five_phone_portrait_k,footwearListFixed.children[4])
})

 function  anomation_reverse_footwearList_img_fixed(screen_width_pc_n,screen_width_pc_k,timePassed_img_n, timePassed_img_k,footwear_img){
	let start = Date.now(); 
	timer2 = setInterval(function(e) {
		let timePassed = Date.now() - start; 
		if(screen.width>screen_width_pc_n&&screen.width<screen_width_pc_k&&timePassed > timePassed_img_n&&timePassed<timePassed_img_k) {	  
       		 footwear_img.style.marginTop =parseInt( getComputedStyle(footwear_img).marginTop) - 2 + 'px';
        }
     	footwearList.children[0].addEventListener("click", function(event) {
     		document.location.href = "italian.html"
     	})
      

	}, 20)	
}
		
function hide_reverse_block(img,time) {
	setTimeout(function(){
    	img.style.visibility = "hidden";
    },time)
}
footwearListFixed.addEventListener("mouseout",function(event){
	hide_reverse_block(footwearListFixed.children[4],timePassed_img_one_k_update);   hide_reverse_block(footwearListFixed.children[3],timePassed_img_two_k);
	hide_reverse_block(footwearListFixed.children[2],timePassed_img_three_k);        hide_reverse_block(footwearListFixed.children[1],timePassed_img_four_k);
	hide_reverse_block(footwearListFixed.children[0],timePassed_img_five_k)
	anomation_reverse_footwearList_img_fixed(screen_width_pc_n,screen_width_pc_k, timePassed_img_one_n,timePassed_img_one_k,footwearListFixed.children[4])
	anomation_reverse_footwearList_img_fixed(screen_width_pc_n,screen_width_pc_k, timePassed_img_two_n,timePassed_img_two_k,footwearListFixed.children[3])
    anomation_reverse_footwearList_img_fixed(screen_width_pc_n,screen_width_pc_k, timePassed_img_three_n,timePassed_img_three_k,footwearListFixed.children[2])
    anomation_reverse_footwearList_img_fixed(screen_width_pc_n,screen_width_pc_k, timePassed_img_four_n,timePassed_img_four_k,footwearListFixed.children[1])
    anomation_reverse_footwearList_img_fixed(screen_width_pc_n,screen_width_pc_k, timePassed_img_five_n,timePassed_img_five_k,footwearListFixed.children[0])
})


 test.addEventListener("click",function(e){
	document.location.href = "test.html"
})

footwearListFixed.addEventListener("click",function(e){
	document.location.href = "italian.html"
})
accessories_fixed.addEventListener("click",function(event){
		document.location.href = "accesories.html"
	})
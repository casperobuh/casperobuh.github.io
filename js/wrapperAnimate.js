var elem = document.getElementById("wrapper-fixed")
var elem1 = document.getElementById("block-flex").children[0]
var elemBottom =elem1.getBoundingClientRect().bottom+window.pageYOffset;
var item2 =  document.getElementById("non2");
var timer3;
var timer4;
var footweare =  document.getElementById("non2")
var test = document.getElementById("test");
   test.addEventListener("click",function(e){
			document.location.href = "test.html"
		})

footweare.addEventListener("click",function(e){
			document.location.href = "italian.html"
		})

window.addEventListener("scroll",function() {
    if(screen.width>320&&screen.width<480&&window.pageYOffset<400){
    	 elem.style.visibility = "hidden"
    elem.classList.remove("wrapper-fixed");   
    }
     if (window.pageYOffset > elemBottom) {
    		 elem.style.visibility = "visible"
        elem.classList.add('wrapper-fixed');
       
         elem.classList.add("item2");
    }
 if(screen.width>568&&screen.width<830&&window.pageYOffset<200){
    	 elem.style.visibility = "hidden"
    elem.classList.remove("wrapper-fixed");   
    }
     if (window.pageYOffset > elemBottom) {
    	
    		 elem.style.visibility = "visible"
        elem.classList.add('wrapper-fixed');
       
         elem.classList.add("item2");
    }
 if(screen.width>850&&window.pageYOffset<500){
    	 elem.style.visibility = "hidden"
    elem.classList.remove("wrapper-fixed");   
    }
    else if (window.pageYOffset > elemBottom) {
    
    		 elem.style.visibility = "visible"
        elem.classList.add('wrapper-fixed');
       
         elem.classList.add("item2");
    }
})
 elem1.addEventListener("mouseover",function(e){
			var start1 = Date.now();	
			timer3 = setInterval(function(e) {
				var timePassed1 = Date.now() - start1; // вычислить сколько времени прошло
						
					if(timePassed1< 300) {
						item2.children[0].style.visibility = "visible";
							item2.children[0].style.marginTop =parseInt( getComputedStyle(item2.children[0]).marginTop) + 2 + 'px';

					}
			        if(timePassed1 >500&&timePassed1<1500) {
			        	item2.children[1].style.visibility = "visible";
			        	item2.children[1].style.marginTop =parseInt( getComputedStyle(item2.children[1]).marginTop) + 2 + 'px';
			        	
			        }
			       if(timePassed1 >1700&&timePassed1 <2300) {
			        	item2.children[2].style.visibility = "visible";
			        	item2.children[2].style.marginTop =parseInt( getComputedStyle(item2.children[2]).marginTop) + 2 + 'px';
			        }
			         if(timePassed1 >2500&&timePassed1 <3000) {
			        	item2.children[3].style.visibility = "visible";
			        	item2.children[3].style.marginTop =parseInt( getComputedStyle(item2.children[3]).marginTop) + 2 + 'px';
			        }

			         if(timePassed1 >3200&&timePassed1<3700) {
			        	item2.children[4].style.visibility = "visible";
			        	item2.children[4].style.marginTop =parseInt( getComputedStyle(item2.children[4]).marginTop) + 2 + 'px';
			       } 
			}, 20)	
	    })
		clearInterval(timer3);

		item2.addEventListener("mouseout",function(e){
				

			var start1 = Date.now(); 
  
			timer4 = setInterval(function(e) {
				var timePassed1 = Date.now() - start1; 
				
					if(timePassed1>=2000&&timePassed1 <=2500) {
			       		 item2.children[0].style.marginTop =parseInt( getComputedStyle(item2.children[0]).marginTop) - 3 + 'px';
			        }
			        if(timePassed1 >=2500) {
			        	item2.children[0].style.visibility = "hidden";	 	
			        }	

			        if(timePassed1 >=1500&&timePassed1 <=2000) {
			        	
			        	item2.children[1].style.marginTop =parseInt( getComputedStyle(item2.children[1]).marginTop) - 3 + 'px';
			        }
			          if(timePassed1>=2000) {
			        	item2.children[1].style.visibility = "hidden";	
			        	 	
			        }
			         if(timePassed1 >=1000&&timePassed1 <=1500) {
			         item2.children[2].style.marginTop =parseInt( getComputedStyle(item2.children[2]).marginTop) - 3 + 'px';
			        }
			          if(timePassed1 >=1500) {
			        	item2.children[2].style.visibility = "hidden"; 	
			        }
			         if(timePassed1 >=500&&timePassed1 <=1000) {
			         	
			        	item2.children[3].style.marginTop =parseInt( getComputedStyle(item2.children[3]).marginTop) - 3 + 'px';
                     } 
			         if(timePassed1 >=1000) {
			        		
			        	 	item2.children[3].style.visibility = "hidden";
			        }
			        if(timePassed1 <300) {

			        	item2.children[4].style.marginTop =parseInt( getComputedStyle(item2.children[4]).marginTop) - 3 + 'px';
                     } 
			        if(timePassed1 >300) {

			        	item2.children[4].style.visibility = "hidden";
			        }		        
                         
			}, 20)	
		
	    })

				clearInterval(timer4)

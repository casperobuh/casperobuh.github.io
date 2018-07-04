
var elem = document.getElementById("wrapper-fixed")
var elem1 = document.getElementById("block-flex").children[0]
var elemBottom =elem1.getBoundingClientRect().bottom+window.pageYOffset;
var item2 =  document.getElementById("non2");
var timer3;
var timer4;
window.addEventListener("scroll",function() {
    if(window.pageYOffset<500){
    	 elem.style.visibility = "hidden"
    elem.classList.remove("wrapper-fixed");
  
    
   
    
    
    	
    	
        
    }
    else if (window.pageYOffset > elemBottom) {
    	console.log("2")
    		 elem.style.visibility = "visible"
        elem.classList.add('wrapper-fixed');
       
         elem.classList.add("item2");
     
      
    }
})




 elem1.addEventListener("mouseover",function(e){

			var start1 = Date.now();	
			
			timer3 = setInterval(function(e) {
				
				var timePassed1 = Date.now() - start1; // вычислить сколько времени прошло
					
						
					if(timePassed1< 400) {
						item2.children[0].style.visibility = "visible";
						item2.children[0].style.marginTop = timePassed1 / 8 + 'px';

					}
					
			        if(timePassed1 >500&&timePassed1<1000) {
			        	item2.children[1].style.visibility = "visible";
			        	item2.children[1].style.marginTop = timePassed1 / 8+ 'px';
			        	
			        }
			       if(timePassed1 >=1100&&timePassed1 <=1500) {
			        	item2.children[2].style.visibility = "visible";
			        	item2.children[2].style.marginTop = timePassed1 /8 + 'px';
			        }
			         if(timePassed1 >=1600&&timePassed1 <=2000) {
			        	item2.children[3].style.visibility = "visible";
			        	item2.children[3].style.marginTop= timePassed1 / 8 + 'px';
			        }

			         if(timePassed1 >=2100&&timePassed1<=2500) {
			        	item2.children[4].style.visibility = "visible";
			        	item2.children[4].style.marginTop = timePassed1 / 8+ 'px';
			        	
			       } 
			     
			       
			}, 20)	
			  

	    })

    	
		clearInterval(timer3);

		item2.addEventListener("mouseout",function(e){
				

			var start1 = Date.now(); // сохранить время начала
  
			timer4 = setInterval(function(e) {

				
		
				var timePassed1 = Date.now() - start1; // вычислить сколько времени прошло
				
					if(timePassed1>=2000&&timePassed1 <=2500) {
						

			       		 item2.children[0].style.marginTop =elem.getBoundingClientRect().top-item2.children[0].getBoundingClientRect().top-timePassed1 / 3 + 'px'
			        }
			        if(timePassed1 >=2500) {
			        	item2.children[0].style.visibility = "hidden";
			        		
			        	 	
			        }	

			        if(timePassed1 >=1500&&timePassed1 <=2000) {
			        	
			        	item2.children[1].style.marginTop =elem.getBoundingClientRect().top-item2.children[1].getBoundingClientRect().top-timePassed1 / 3 + 'px'
			        }
			          if(timePassed1>=2000) {
			        	item2.children[1].style.visibility = "hidden";
			        		
			        	 	
			        }
			         if(timePassed1 >=1000&&timePassed1 <=1500) {
			         	 //item.children[2].style.marginLeft=item.children[2].getBoundingClientRect().left - element1.getBoundingClientRect().left-2+ "px"
			        	item2.children[2].style.marginTop =elem.getBoundingClientRect().top-item2.children[2].getBoundingClientRect().top-timePassed1 / 3 + 'px'
			        }
			          if(timePassed1 >=1500) {
			        	item2.children[2].style.visibility = "hidden";
			        		
			        	 	
			        }
			         if(timePassed1 >=500&&timePassed1 <=1000) {
			         	
			        	item2.children[3].style.marginTop =elem.getBoundingClientRect().top-item2.children[3].getBoundingClientRect().top-timePassed1 / 3 + 'px'
                     } 
                     

			         if(timePassed1 >=1000) {
			        		
			        	 	item2.children[3].style.visibility = "hidden";
			        }
			        if(timePassed1 <400) {

			        	item2.children[4].style.marginTop =elem.getBoundingClientRect().top-item2.children[4].getBoundingClientRect().top-timePassed1 / 3 + 'px'
						

                     } 

			        if(timePassed1 >400) {

			        	item2.children[4].style.visibility = "hidden";
			        }		        
                         
			}, 20)	
		
	    })

				clearInterval(timer4)
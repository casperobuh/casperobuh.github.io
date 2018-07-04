var body = document.body
var c =  document.getElementById("container-wrapper");
var co =  document.getElementById("container-options");
var co1 =  document.getElementById("container-options1");
var co2 =  document.getElementById("container-options2");
let element1 = document.getElementById("drive").children[0];
let item =  document.getElementById("none2");
var animationImage = document.getElementById("right-menu");
var footwear =  document.getElementById("none2")
	var timer1;
	var timer2;
	var animalWidth1 =1;
	 var animalWidth2 =2;
		element1.addEventListener("mouseover",function(e){
			var start = Date.now();	
			
			timer1 = setInterval(function(e) {
				
				var timePassed = Date.now() - start; // вычислить сколько времени прошло
					
						
					if(timePassed <400) {
						item.children[0].style.visibility = "visible";
						item.children[0].style.marginLeft = timePassed / 5 + 'px';
					}
					
			        if(timePassed >500&&timePassed<1000) {
			        	item.children[1].style.visibility = "visible";
			        	item.children[1].style.marginLeft = timePassed / 4+ 'px';
			        	
			        }
			       if(timePassed >=1000&&timePassed <=1500) {
			        	item.children[2].style.visibility = "visible";
			        	item.children[2].style.marginLeft = timePassed /4 + 'px';
			        }
			         if(timePassed >=1500&&timePassed <=2000) {
			        	item.children[3].style.visibility = "visible";
			        	item.children[3].style.marginLeft = timePassed / 4.5 + 'px';
			        }

			         if(timePassed >=2000&&timePassed<=2500) {
			        	item.children[4].style.visibility = "visible";
			        	item.children[4].style.marginLeft = timePassed / 5+ 'px';
			        	
			       } 
			     
			       
			}, 20)	
	    })

		clearInterval(timer1);
		footwear.children[0].addEventListener("mouseover",function(e){
			timer5 = setTimeout(function(e) {	
						animationImage.children[0].style.width = 100 + "%";		
			}, 20)	
			  

	    })
	    footwear.children[1].addEventListener("mouseover",function(e){
			timer5 = setTimeout(function(e) {	
						animationImage.children[1].style.width = 100 + "%";		
			}, 20)	
			  

	    })
	    footwear.children[2].addEventListener("mouseover",function(e){
			timer5 = setTimeout(function(e) {	
						animationImage.children[2].style.width = 100 + "%";		
			}, 20)	
			  

	    })
	     footwear.children[3].addEventListener("mouseover",function(e){
			timer5 = setTimeout(function(e) {	
						animationImage.children[4].style.width = 100 + "%";		
			}, 20)	
			  

	    })
	      footwear.children[4].addEventListener("mouseover",function(e){
			timer5 = setTimeout(function(e) {	
						animationImage.children[4].style.width = 100 + "%";		
			}, 20)	
			  

	    })
	    footwear.children[0].addEventListener("mouseout",function(e){
			timer5 = setTimeout(function(e) {	
						animationImage.children[0].style.width = 10 + "%";		
			}, 20)	
			  

	    })
footwear.children[1].addEventListener("mouseout",function(e){
			timer5 = setTimeout(function(e) {	
						animationImage.children[1].style.width = 10 + "%";		
			}, 20)	
			  

	    })
footwear.children[2].addEventListener("mouseout",function(e){
			timer5 = setTimeout(function(e) {	
						animationImage.children[2].style.width = 10 + "%";		
			}, 20)	
			  

	    })
 footwear.children[3].addEventListener("mouseout",function(e){
			timer5 = setTimeout(function(e) {	
						animationImage.children[3].style.width = 10 + "%";		
			}, 20)	
			  

	    })
  footwear.children[4].addEventListener("mouseout",function(e){
			timer5 = setTimeout(function(e) {	
						animationImage.children[4].style.width = 10 + "%";		
			}, 20)	
			  

	    })
		item.addEventListener("mouseout",function(e){
				clearInterval(timer1);

			var start = Date.now(); // сохранить время начала
  
			timer2 = setInterval(function(e) {

				var send = item.children[4].getBoundingClientRect().left
		var send2 = item.getBoundingClientRect().left
				var timePassed = Date.now() - start; // вычислить сколько времени прошло
				
					if(timePassed>=2000&&timePassed <=2500) {
						

			       		 item.children[0].style.marginLeft =element1.getBoundingClientRect().left-item.children[0].getBoundingClientRect().left-timePassed / 3 + 'px'
			        }
			        if(timePassed >=2500) {
			        	item.children[0].style.visibility = "hidden";
			        		
			        	 	
			        }	

			        if(timePassed >=1500&&timePassed <=2000) {
			        	
			        	item.children[1].style.marginLeft =element1.getBoundingClientRect().left-item.children[1].getBoundingClientRect().left-timePassed / 3 + 'px'
			        }
			          if(timePassed >=2000) {
			        	item.children[1].style.visibility = "hidden";
			        		
			        	 	
			        }
			         if(timePassed >=1000&&timePassed <=1500) {
			         	 //item.children[2].style.marginLeft=item.children[2].getBoundingClientRect().left - element1.getBoundingClientRect().left-2+ "px"
			        	item.children[2].style.marginLeft =element1.getBoundingClientRect().left-item.children[2].getBoundingClientRect().left-timePassed / 3 + 'px'
			        }
			          if(timePassed >=1500) {
			        	item.children[2].style.visibility = "hidden";
			        		
			        	 	
			        }
			         if(timePassed >=500&&timePassed <=1000) {
			         	
			        	item.children[3].style.marginLeft =element1.getBoundingClientRect().left-item.children[3].getBoundingClientRect().left-timePassed / 3 + 'px'
                     } 
                     

			         if(timePassed >=1000) {
			        		
			        	 	item.children[3].style.visibility = "hidden";
			        }
			        if(timePassed <400) {

			        	//item.children[4].style.marginLeft =element1.getBoundingClientRect().left-item.children[4].getBoundingClientRect().left-timePassed / 3 + 'px'
						item.children[4].style.marginLeft = send2-send -timePassed/5 + "px"

                     } 

			        if(timePassed >400) {

			        	item.children[4].style.visibility = "hidden";
			        }		        
                         
			}, 20)	
		
	    })

				clearInterval(timer2)
	
 // var width=window.innerWidth;
 // body.style.width = width + "px";
 // alert(body.offsetWidth)
  // co.style.width = width + "px";
  // co1.style.width = width + "px";
  // co2.style.width = width + "px";








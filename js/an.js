
let element1 = document.getElementById("drive").children[0];
		let item =  document.getElementById("none2")
		element1.addEventListener("mouseover",function(){
			var start = Date.now(); // сохранить время начала
			var timer1 = setInterval(function() {
			var pos =0;
				// вычислить сколько времени прошло из opts.duration
				var timePassed = Date.now() - start;
					if(timePassed <1500) {
						item.children[0].style.visibility = "visible";
						item.children[0].style.marginLeft = timePassed / 7 + 'px';
					}
			        if(timePassed >=1500&&timePassed <=3400) {
			        	item.children[1].style.visibility = "visible";
			        	item.children[1].style.marginLeft = timePassed / 7 + 'px';
			        }
			         if(timePassed >=3400&&timePassed <=5000) {
			        	item.children[2].style.visibility = "visible";
			        	item.children[2].style.marginLeft = timePassed /7  + 'px';
			        }
			         if(timePassed >=5000&&timePassed <=7000) {
			        	item.children[3].style.visibility = "visible";
			        	item.children[3].style.marginLeft = timePassed / 7 + 'px';
			        }

			         if(timePassed >=7100&&timePassed<=8500) {
			        	item.children[4].style.visibility = "visible";
			        	item.children[4].style.marginLeft = timePassed / 7 + 'px';
			        }
			       
			}, 20)	   
	    })

    	
		
		element1.addEventListener("mouseout",function(){
			
			var start = Date.now(); // сохранить время начала
			var timer2 = setInterval(function() {


				// вычислить сколько времени прошло из opts.duration
				var timePassed = Date.now() - start;
					if(timePassed>=7100&&timePassed <=8500) {
			       		 item.children[0].style.marginLeft =element1.getBoundingClientRect().left-item.children[0].getBoundingClientRect().left-timePassed / 3 + 'px'
			        }
			        if(timePassed >=8300) {
			        	item.children[0].style.visibility = "hidden";
			        		
			        	 	
			        }	
			        if(timePassed >=5000&&timePassed <=7000) {
			        	item.children[1].style.marginLeft =element1.getBoundingClientRect().left-item.children[1].getBoundingClientRect().left-timePassed / 3 + 'px'
			        }
			          if(timePassed >=6800) {
			        	item.children[1].style.visibility = "hidden";
			        		
			        	 	
			        }
			         if(timePassed >=3400&&timePassed <=5000) {
			        	item.children[2].style.marginLeft =element1.getBoundingClientRect().left-item.children[2].getBoundingClientRect().left-timePassed / 3 + 'px'
			        }
			          if(timePassed >=4800) {
			        	item.children[2].style.visibility = "hidden";
			        		
			        	 	
			        }
			         if(timePassed >=1500&&timePassed <=3400) {
			        	item.children[3].style.marginLeft =element1.getBoundingClientRect().left-item.children[3].getBoundingClientRect().left-timePassed / 3 + 'px'
                     } 
                     

			         if(timePassed >=3000) {
			        		
			        	 	item.children[3].style.visibility = "hidden";
			        }
			        if(timePassed <1500) {
			        	item.children[4].style.marginLeft =element1.getBoundingClientRect().left-item.children[4].getBoundingClientRect().left-timePassed / 3 + 'px'
                     } 
                     
			        if(timePassed >=1500) {
			        	item.children[4].style.visibility = "hidden";
			        		
			        	 	
			        }		        
                         
			}, 20)	   
	    })


	
 		










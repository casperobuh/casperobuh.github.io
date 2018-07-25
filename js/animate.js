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
var c1=0; var c2 =0; var c3=0; var c4=0; var c5 =0;
var test1 = document.getElementById("test");
   test.addEventListener("click",function(e){
			document.location.href = "test.html"
		})
		footwear.addEventListener("click",function(e){
			document.location.href = "italian.html"
		})
	
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



  var running = true; 
  function fr2(){
			var start = Date.now();	
		
			timer1 = setInterval(function(e) {
				
				
				var timePassed = Date.now() - start; 
					
						
					if(screen.width>880&&timePassed <600) {
						item.children[0].style.visibility = "visible";
						item.children[0].style.marginLeft =parseInt( getComputedStyle(item.children[0]).marginLeft) + 3 + 'px';
						c1++
					}
					
			        if(screen.width>880&&timePassed >800&&timePassed<2000) {
			        	c2++
			        	item.children[1].style.visibility = "visible";
			        	item.children[1].style.marginLeft =parseInt( getComputedStyle(item.children[1]).marginLeft) + 3 + 'px';
			        	
			        }
			       if(screen.width>880&&timePassed >2200&&timePassed <3400) {
			        	item.children[2].style.visibility = "visible";
			        	item.children[2].style.marginLeft =parseInt( getComputedStyle(item.children[2]).marginLeft) + 3 + 'px';
			        	c3++
			        }
			         if(screen.width>880&&timePassed >3600&&timePassed <4800) {
			        	item.children[3].style.visibility = "visible";
			        	item.children[3].style.marginLeft =parseInt( getComputedStyle(item.children[3]).marginLeft) + 3 + 'px';
			        	c4++
			        }

			         if(screen.width>880&&timePassed >5000&&timePassed<6200) {
			        	item.children[4].style.visibility = "visible";
			        	item.children[4].style.marginLeft =parseInt( getComputedStyle(item.children[4]).marginLeft) + 3 + 'px';
			        	c5++

			       } 

			       		if(screen.width>568&&screen.width<830&&timePassed <100) {
						item.children[0].style.visibility = "visible";
						item.children[0].style.marginLeft =parseInt( getComputedStyle(item.children[0]).marginLeft) + 3 + 'px';
						c1++
					}
					
			        if(screen.width>568&&screen.width<830&&timePassed >300&&timePassed<800) {
			        	c2++
			        	item.children[1].style.visibility = "visible";
			        	item.children[1].style.marginLeft =parseInt( getComputedStyle(item.children[1]).marginLeft) + 3 + 'px';
			        	
			        }
			       if(screen.width>568&&screen.width<830&&timePassed >1000&&timePassed <1500) {
			        	item.children[2].style.visibility = "visible";
			        	item.children[2].style.marginLeft =parseInt( getComputedStyle(item.children[2]).marginLeft) + 3 + 'px';
			        	c3++
			        }
			         if(screen.width>568&&screen.width<830&&timePassed >1700&&timePassed <2200) {
			        	item.children[3].style.visibility = "visible";
			        	item.children[3].style.marginLeft =parseInt( getComputedStyle(item.children[3]).marginLeft) + 3 + 'px';
			        	c4++
			        }

			         if(screen.width>568&&screen.width<830&&timePassed >2400&&timePassed<3000) {
			        	item.children[4].style.visibility = "visible";
			        	item.children[4].style.marginLeft =parseInt( getComputedStyle(item.children[4]).marginLeft) + 3 + 'px';
			        	c5++

			       } 

			       if(screen.width>320&&screen.width<480&&timePassed <600) {
						item.children[0].style.visibility = "visible";
						item.children[0].style.marginLeft =parseInt( getComputedStyle(item.children[0]).marginLeft) + 3 + 'px';
						c1++
					}
					
			        if(screen.width>320&&screen.width<480&&timePassed >700&&timePassed<1100) {
			        	c2++
			        	item.children[1].style.visibility = "visible";
			        	item.children[1].style.marginLeft =parseInt( getComputedStyle(item.children[1]).marginLeft) + 3 + 'px';
			        	
			        }
			       if(screen.width>320&&screen.width<480&&timePassed >1300&&timePassed <1700) {
			        	item.children[2].style.visibility = "visible";
			        	item.children[2].style.marginLeft =parseInt( getComputedStyle(item.children[2]).marginLeft) + 3 + 'px';
			        	c3++
			        }
			         if(screen.width>320&&screen.width<480&&timePassed >1900&&timePassed <2300) {
			        	item.children[3].style.visibility = "visible";
			        	item.children[3].style.marginLeft =parseInt( getComputedStyle(item.children[3]).marginLeft) + 3 + 'px';
			        	c4++
			        }

			         if(screen.width>320&&screen.width<480&&timePassed >2500&&timePassed<2900) {
			        	item.children[4].style.visibility = "visible";
			        	item.children[4].style.marginLeft =parseInt( getComputedStyle(item.children[4]).marginLeft) + 3 + 'px';
			        	c5++

			       } 
			       
			         	
			       


			     
			}, 20)	
		}
  function fr(){
			var start = Date.now(); 
  
			timer2 = setInterval(function(e) {
			

				var timePassed = Date.now() - start; 
				
					if(screen.width>880&&timePassed>=5600&&timePassed <=6800) {
						c1--
			       		 item.children[0].style.marginLeft =parseInt( getComputedStyle(item.children[0]).marginLeft) - 3 + 'px';
			        }
			        if(c1<-21) {
			        	item.children[0].style.visibility = "hidden";
			        	
			        		
			        	 	
			        }	

			        if(screen.width>880&&timePassed >=4200&&timePassed <=5400) {
			        	c2--
			        	
			        	item.children[1].style.marginLeft =parseInt( getComputedStyle(item.children[1]).marginLeft) - 3 + 'px';
			        }
			          if(c2<2) {
			        	item.children[1].style.visibility = "hidden";
			        }
			         if(screen.width>880&&timePassed >=2800&&timePassed <=4000) {
			         	c3--
	
			        	item.children[2].style.marginLeft =parseInt( getComputedStyle(item.children[2]).marginLeft) - 3 + 'px';
			        }
			          if(c3<2) {
			        	item.children[2].style.visibility = "hidden";	 	
			        }
			         if(screen.width>880&&timePassed >=1400&&timePassed <=2600) {
			         	c4--
			        	item.children[3].style.marginLeft =parseInt( getComputedStyle(item.children[3]).marginLeft) - 3 + 'px';
                     } 
                     

			          if(c4<2) {
			        		
			        	 	item.children[3].style.visibility = "hidden";
			        }
			        if(screen.width>880&&timePassed <1200) {

						item.children[4].style.marginLeft =parseInt( getComputedStyle(item.children[4]).marginLeft) - 3 + 'px';
						c5--

                     } 

			         if(c5<2) {

			        	item.children[4].style.visibility = "hidden";
			        }		        
                       



					 if(screen.width>320&&screen.width<480&&timePassed>2500&&timePassed <2900) {
						c1--
			       		 item.children[0].style.marginLeft =parseInt( getComputedStyle(item.children[0]).marginLeft) - 3 + 'px';
			        }
			        if(c1<-21) {
			        	item.children[0].style.visibility = "hidden";
			        	
			        		
			        	 	
			        }	

			        if(screen.width>320&&screen.width<480&&timePassed >1900&&timePassed <2300) {
			        	c2--
			        	
			        	item.children[1].style.marginLeft =parseInt( getComputedStyle(item.children[1]).marginLeft) - 3 + 'px';
			        }
			          if(c2<2) {
			        	item.children[1].style.visibility = "hidden";
			        }
			         if(screen.width>320&&screen.width<480&&timePassed >1300&&timePassed <1700) {
			         	c3--
	
			        	item.children[2].style.marginLeft =parseInt( getComputedStyle(item.children[2]).marginLeft) - 3 + 'px';
			        }
			          if(c3<2) {
			        	item.children[2].style.visibility = "hidden";	 	
			        }
			         if(screen.width>320&&screen.width<480&&timePassed >700&&timePassed <1100) {
			         	c4--
			        	item.children[3].style.marginLeft =parseInt( getComputedStyle(item.children[3]).marginLeft) - 3 + 'px';
                     } 
                     

			          if(c4<2) {
			        		
			        	 	item.children[3].style.visibility = "hidden";
			        }
			        if(screen.width>320&&screen.width<480&&timePassed <600) {

						item.children[4].style.marginLeft =parseInt( getComputedStyle(item.children[4]).marginLeft) - 3 + 'px';
						c5--

                     } 



                     	footwear.children[0].addEventListener("click", function(event) {

                     		document.location.href = "italian.html"

                     	})
                     
                     		
                     	
                     		
             


                      if(screen.width>568&&screen.width<830&&timePassed>=5600&&timePassed <=6800) {
						c1--
			       		 item.children[0].style.marginLeft =parseInt( getComputedStyle(item.children[0]).marginLeft) - 3 + 'px';
			        }
			        if(c1<-21) {
			        	item.children[0].style.visibility = "hidden";
			        	
			        		
			        	 	
			        }	

			        if(screen.width>568&&screen.width<830&&timePassed >=4200&&timePassed <=5400) {
			        	c2--
			        	
			        	item.children[1].style.marginLeft =parseInt( getComputedStyle(item.children[1]).marginLeft) - 3 + 'px';
			        }
			          if(c2<2) {
			        	item.children[1].style.visibility = "hidden";
			        }
			         if(screen.width>568&&screen.width<830&&timePassed >=2800&&timePassed <=4000) {
			         	c3--
	
			        	item.children[2].style.marginLeft =parseInt( getComputedStyle(item.children[2]).marginLeft) - 3 + 'px';
			        }
			          if(c3<2) {
			        	item.children[2].style.visibility = "hidden";	 	
			        }
			         if(screen.width>568&&screen.width<830&&timePassed >=1400&&timePassed <=2600) {
			         	c4--
			        	item.children[3].style.marginLeft =parseInt( getComputedStyle(item.children[3]).marginLeft) - 3 + 'px';
                     } 
                     

			          if(c4<2) {
			        		
			        	 	item.children[3].style.visibility = "hidden";
			        }
			        if(screen.width>568&&screen.width<830&&timePassed <1200) {

						item.children[4].style.marginLeft =parseInt( getComputedStyle(item.children[4]).marginLeft) - 3 + 'px';
						c5--

                     } 

			         if(c5<2) {

			        	item.children[4].style.visibility = "hidden";
			        }		      

			}, 20)	
		}

function reset() {
	clearInterval(timer2)
	clearInterval(timer1)
		for(var i = 0; i<item.children.length;i++) {
			item.children[i].style.marginLeft = 0 + "px"
			item.children[i].style.visibility = "hidden";

		}
		
   	  	
}
function reset2(){
	clearInterval(timer1)

for(var i = 0; i<item.children.length;i++) {

			 item.children[i].style.marginLeft =parseInt( getComputedStyle(item.children[i]).marginLeft) - 3 + 'px';
			
		}
}
		element1.addEventListener("mouseover",function(e){
			reset()
			fr2()

			
				
	    })
		item.addEventListener("mouseout",function(e){
			reset2()
			fr()

			
	    })



				
	









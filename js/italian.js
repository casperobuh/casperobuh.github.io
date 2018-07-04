let italian =  document.getElementById("italian").children[0];
let italianImage = document.getElementById("italian-image").children[0];
let italianImage1 = document.getElementById("italian-text-image1").children[1]
let italianImage2 = document.getElementById("italian-text-image1").children[2]
let italianImage3 = document.getElementById("italian-text-image1").children[3]
let italianImage4 = document.getElementById("italian-text-image1").children[4]

var marginImage1 =-100;
var marginImage2=-150;
var marginImage3 =-200;
var marginImage4 =-250;
var widthImage1 = 0;
var widthImage2 = 0;
var widthImage3= 0;
var widthImage4= 0;

function anim(){

		italianImage1.style.left = marginImage1 + "px";
	  	italianImage2.style.left = marginImage2 + "px";
	   italianImage3.style.left = marginImage3 + "px";
	   italianImage4.style.left = marginImage4 + "px";
	  

	 marginImage1++
	 marginImage2++
	 marginImage3++
	 marginImage4++
	 


if(marginImage1>-100&&marginImage1<0)  {

			widthImage1++
			 
			italianImage1.style.width = widthImage1+ "px";
	}

	 if(marginImage2>-100&&marginImage2<0)  {
	
	widthImage2++
			
			italianImage2.style.width = widthImage2+ "px";
	}


if(marginImage3>-100&&marginImage3<0)  {
	
	widthImage3++
		
			
			italianImage3.style.width = widthImage3+ "px";
	}
if(marginImage4>-100&&marginImage4<0)  {
	
	widthImage4++
		
			
			italianImage4.style.width = widthImage4+ "px";
	}








if(marginImage1>0&&marginImage1<100)  {

			widthImage1--
			italianImage1.style.width = widthImage1+ "px";
	}


	if(marginImage2>0&&marginImage2<100)  {
		widthImage2--
			italianImage2.style.width = widthImage2+ "px";
			
	}

	 if(marginImage3>0&&marginImage3<100)  {
			widthImage3--
			italianImage3.style.width = widthImage3+ "px";
	}
 
	 
 if(marginImage4>0&&marginImage4<100)  {
			widthImage4--
			italianImage4.style.width = widthImage4+ "px";
	}
	 if(marginImage1>100){
	 	marginImage1=-100;
	 	
	 }
 if(marginImage2>100){
	 	marginImage2=-100;
	 	
	 }
if(marginImage3>100){
	 	marginImage3=-100;
	 	
	 }

	 if(marginImage4>100){
	 	marginImage4=-100;
	 	
	 }
	}

 var a =  setInterval(anim, 5)
 


 


 
 var u =0;

  italianImage1.addEventListener("click", function() {
  	setInterval(function(){
  		
  		setTimeout(fun, 100)
  	},20)
		 
})
   italianImage2.addEventListener("click", function() {
  	setInterval(function(){
  		setTimeout(fun, 100)
  	},20)
		 
})
    italianImage3.addEventListener("click", function() {
  	setInterval(function(){
  		setTimeout(fun, 100)
  	},20)
		 
})
     

function fun() {
	italianImage.style.marginLeft = u + "%";
	 u++
}


let italian =  document.getElementById("italian").children[0];
let opacity1=  document.getElementById("opacity1");
var text =  document.getElementById("str-wrapper")
let italianImage = document.getElementById("italian-image").children[0];
let italianImageo2 = document.getElementById("italian-wrapper-image2").children[0];
let italianImageo3 = document.getElementById("italian-wrapper-image3").children[0];
let italianImageo4 = document.getElementById("italian-wrapper-image4").children[0];
let italianImageo5 = document.getElementById("italian-wrapper-image5").children[0];
let italianImageo6 = document.getElementById("italian-wrapper-image6").children[0];
let italianImageo7 = document.getElementById("italian-wrapper-image7").children[0];
let italianImageo8 = document.getElementById("italian-wrapper-image8").children[0];
let italianImage1 = document.getElementById("str-wrapper").children[0]
let italianImage2 = document.getElementById("str-wrapper").children[1]
let italianImage3 = document.getElementById("str-wrapper").children[2]
let italianImage4 = document.getElementById("str-wrapper").children[3]

var marginImage1 =-100;
var marginImage2=-150;
var marginImage3 =-200;
var marginImage4 =-250;
var widthImage1 = 0;
var widthImage2 = 0;
var widthImage3= 0;
var widthImage4= 0;


 var text2 = text.cloneNode(true)
 var text3 = text.cloneNode(true)
 var text4 = text.cloneNode(true)
 var text5 = text.cloneNode(true)
 var text6 = text.cloneNode(true)
 var text7 = text.cloneNode(true)
 var text8 = text.cloneNode(true)



 var g =  document.getElementById("italian-wrapper-image2")
 var ge =  document.getElementById("italian-wrapper-image3")
 var gee =  document.getElementById("italian-wrapper-image4")
 var geee =  document.getElementById("italian-wrapper-image5")
 var geeee =  document.getElementById("italian-wrapper-image6")
 var geeeee =  document.getElementById("italian-wrapper-image7")
 var geeeeee =  document.getElementById("italian-wrapper-image8")
 
   g.appendChild(text2)
   ge.appendChild(text3)
   gee.appendChild(text4)
  geee.appendChild(text5)
  geeee.appendChild(text6)
  geeeee.appendChild(text7)
  geeeeee.appendChild(text8)
  
  
 
    	function anim(image,image2,image3,image4){
		image.style.left =  marginImage1 + "px";
	  	image2.style.left = marginImage2 + "px";
	   image3.style.left = marginImage3 + "px";
	   image4.style.left = marginImage4 + "px";
	  

	 marginImage1++
	 marginImage2++
	 marginImage3++
	 marginImage4++
	 


if(marginImage1>-100&&marginImage1<0)  {

			widthImage1++
			image.style.width = widthImage1+ "px";
			
	}

	 if(marginImage2>-100&&marginImage2<0)  {
	
	        widthImage2++
			image2.style.width = widthImage2+ "px";
			

	}


if(marginImage3>-100&&marginImage3<0)  {
	widthImage3++
			image3.style.width = widthImage3+ "px";
			
	}
if(marginImage4>-100&&marginImage4<0)  {
	widthImage4++
			image4.style.width = widthImage4+ "px";
		
	}

if(marginImage1>0&&marginImage1<100)  {

			widthImage1--
			image.style.width = widthImage1+ "px";
	}


	if(marginImage2>0&&marginImage2<100)  {
		widthImage2--
			image2.style.width = widthImage2+ "px";
			
	}

	 if(marginImage3>0&&marginImage3<100)  {
			widthImage3--
			image3.style.width = widthImage3+ "px";
	}
 
	 
 if(marginImage4>0&&marginImage4<100)  {
			widthImage4--
			image4.style.width = widthImage4+ "px";
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

  var a = setInterval(anim, 40,italianImage1,italianImage2,italianImage3,italianImage4)
  var a=  setInterval(anim, 40, text2.children[0],text2.children[1], text2.children[2], text2.children[3])
  var a=  setInterval(anim, 40, text3.children[0],text3.children[1], text3.children[2], text3.children[3])
  var a=  setInterval(anim, 40, text4.children[0],text4.children[1], text4.children[2], text4.children[3])
  var a=  setInterval(anim, 40, text5.children[0],text5.children[1], text5.children[2], text5.children[3])
  var a=  setInterval(anim, 40, text6.children[0],text6.children[1], text6.children[2], text6.children[3])
  var a=  setInterval(anim, 40, text7.children[0],text7.children[1], text7.children[2], text7.children[3])
  var a=  setInterval(anim, 40, text8.children[0],text8.children[1], text8.children[2], text8.children[3])
   var i1 =0; var i2 =0;  var i3 =0;  var i4 =0;  var i5 =0;  var i6 =0;  var i7 =0;  var i8 =0;


      function fun(gg) {
	gg.style.marginLeft = i1 + "%";
	text.style.marginTop = 6 + "%"
	 i1++
}
fun(italianImage); 
 function fun2(gg2) {
	gg2.style.marginLeft = i2 + "%";
	 i2++
}
fun2(italianImageo2); 

 
function fun3(gg3) {
	gg3.style.marginLeft = i3 + "%";
	 i3++
}
fun3(italianImageo3); 

function fun4(gg4) {
	gg4.style.marginLeft = i4 + "%";
	 i4++
}
fun4(italianImageo4); 


function fun5(gg5) {
	gg5.style.marginLeft = i5 + "%";
	 i5++
}
fun5(italianImageo5); 



  function fun6(gg6) {
	gg6.style.marginLeft = i6 + "%";
	 i6++
}
fun6(italianImageo6);

  function fun7(gg7) {
	gg7.style.marginLeft = i7 + "%";
	 i7++
}
fun7(italianImageo7);

  function fun8(gg8) {
	gg8.style.marginLeft = i8 + "%";
	

	 i8++
}
fun8(italianImageo8);














function closeText(textClose){
  textClose.addEventListener("click", function() {
  	textClose.style.display = "none"
  	setInterval(function(){
  		
  		setTimeout(fun, 100,italianImage)
  		
  	},20)
		 
})
  
}
closeText(text);

function closeText2(textClose2){
  textClose2.addEventListener("click", function() {
  	textClose2.style.display = "none"
  	setInterval(function(){
  		
  		setTimeout(fun2, 100,italianImageo2)
  		
  	},20)
		 
})
  
}
closeText2(text2);
function closeText3(textClose3){
  textClose3.addEventListener("click", function() {
  	textClose3.style.display = "none"
  	setInterval(function(){
  		
  		setTimeout(fun3, 100,italianImageo3)
  		
  	},20)
		 
})
  
}
closeText3(text3);

function closeText4(textClose4){
  textClose4.addEventListener("click", function() {
  	textClose4.style.display = "none"
  	setInterval(function(){
  		
  		setTimeout(fun4, 100,italianImageo4)
  		
  	},20)
		 
})
  
}
closeText4(text4);


function closeText5(textClose5){
  textClose5.addEventListener("click", function() {
  	textClose5.style.display = "none"
  	setInterval(function(){
  		
  		setTimeout(fun5, 100,italianImageo5)
  		
  	},20)
		 
})
  
}
closeText5(text5);

function closeText6(textClose6){
  textClose6.addEventListener("click", function() {
  	textClose6.style.display = "none"
  	setInterval(function(){
  		
  		setTimeout(fun6, 100,italianImageo6)
  		
  	},20)
		 
})
  
}
closeText6(text6);

function closeText7(textClose7){
  textClose7.addEventListener("click", function() {
  	textClose7.style.display = "none"
  	setInterval(function(){
  		
  		setTimeout(fun7, 100,italianImageo7)
  		
  	},20)
		 
})
  
}
closeText7(text7);

function closeText8(textClose8){
  textClose8.addEventListener("click", function() {
  	textClose8.style.display = "none"
  	setInterval(function(){
  		
  		setTimeout(fun8, 100,italianImageo8)
  		
  	},20)
		 
})
  
}
closeText8(text8);











if(screen.width>850){
function mar(mar1){
mar1.children[0].style.top  = 37 + "em";
mar1.children[1].style.top  = 37 + "em";
mar1.children[2].style.top  = 37 + "em";
mar1.children[3].style.top  = 37 + "em";


mar1.children[0].style.marginLeft  = 37 + "em";
mar1.children[1].style.marginLeft  = 37 + "em";
mar1.children[2].style.marginLeft  = 37 + "em";
mar1.children[3].style.marginLeft  = 37 + "em";

}

mar(text2); mar(text3); mar(text4); mar(text5); mar(text6); mar(text7); mar(text8);


function mar2(mar2){
mar2.children[0].style.top  = 40 + "em";
mar2.children[1].style.top  = 40 + "em";
mar2.children[2].style.top  = 40 + "em";
mar2.children[3].style.top  = 40 + "em";

}

mar2(text4); mar2(text5);


text6.children[0].style.top  = 30 + "em";
text6.children[1].style.top  = 30 + "em";
text6.children[2].style.top  = 30 + "em";
text6.children[3].style.top  = 30 + "em";


text7.children[0].style.top  = 25 + "em";
text7.children[1].style.top  = 25 + "em";
text7.children[2].style.top  = 25 + "em";
text7.children[3].style.top  = 25 + "em";
}

if(screen.width>320&&screen.width<480) {
function mar(mar1){
mar1.children[0].style.top  = 15 + "em";
mar1.children[1].style.top  = 15 + "em";
mar1.children[2].style.top  = 15 + "em";
mar1.children[3].style.top  = 15 + "em";


mar1.children[0].style.marginLeft  = 13 + "em";
mar1.children[1].style.marginLeft  = 13 + "em";
mar1.children[2].style.marginLeft  = 13 + "em";
mar1.children[3].style.marginLeft  = 13 + "em";

}

mar(text2); mar(text3); mar(text4); mar(text5); mar(text6); mar(text7); mar(text8);

function mar2(mar2){
mar2.children[0].style.top  = 20 + "em";
mar2.children[1].style.top  = 20 + "em";
mar2.children[2].style.top  = 20 + "em";
mar2.children[3].style.top  = 20 + "em";

}

mar2(text4); mar2(text5);  mar2(text8)


text6.children[0].style.top  = 12 + "em";
text6.children[1].style.top  = 12 + "em";
text6.children[2].style.top  = 12 + "em";
text6.children[3].style.top  = 12 + "em";


text7.children[0].style.top  = 10 + "em";
text7.children[1].style.top  = 10 + "em";
text7.children[2].style.top  = 10 + "em";
text7.children[3].style.top  = 10 + "em";
function mar3(mar3) {
mar3.children[0].style.top  = 17 + "em";
mar3.children[1].style.top  = 17 + "em";
mar3.children[2].style.top  = 17 + "em";
mar3.children[3].style.top  = 17 + "em";
}
mar3(text5); mar3(text8);
text.children[0].style.marginLeft  = 4 + "em";
text.children[1].style.marginLeft  = 4 + "em";
text.children[2].style.marginLeft  = 4 + "em";
text.children[3].style.marginLeft  = 4 + "em";

}



if(screen.width>568&&screen.width<830) {
function mar(mar1){
mar1.children[0].style.top  = 9 + "em";
mar1.children[1].style.top  = 9 + "em";
mar1.children[2].style.top  = 9 + "em";
mar1.children[3].style.top  = 9 + "em";


mar1.children[0].style.marginLeft  = 20 + "em";
mar1.children[1].style.marginLeft  = 20 + "em";
mar1.children[2].style.marginLeft  = 20 + "em";
mar1.children[3].style.marginLeft  = 20 + "em";

}

mar(text2); mar(text3); mar(text4); mar(text5); mar(text6); mar(text7); mar(text8);




text6.children[0].style.top  = 6 + "em";
text6.children[1].style.top  = 6 + "em";
text6.children[2].style.top  = 6 + "em";
text6.children[3].style.top  = 6 + "em";


text7.children[0].style.top  = 5 + "em";
text7.children[1].style.top  = 5 + "em";
text7.children[2].style.top  = 5 + "em";
text7.children[3].style.top  = 5 + "em";
function mar3(mar3) {
mar3.children[0].style.top  = 8 + "em";
mar3.children[1].style.top  = 8 + "em";
mar3.children[2].style.top  = 8 + "em";
mar3.children[3].style.top  = 8 + "em";
}
 mar3(text8);
text.children[0].style.marginLeft  = 4 + "em";
text.children[1].style.marginLeft  = 4 + "em";
text.children[2].style.marginLeft  = 4 + "em";
text.children[3].style.marginLeft  = 4 + "em";

}

                    //Объявляем переменные
let text =  document.getElementById("str-wrapper")
let italianImage = document.getElementById("italian-image").children[0];
let italianImageo2 = document.getElementById("italian-wrapper-image2")
let italianImageo3 = document.getElementById("italian-wrapper-image3")
let italianImageo4 = document.getElementById("italian-wrapper-image4")
let italianImageo5 = document.getElementById("italian-wrapper-image5")
let italianImageo6 = document.getElementById("italian-wrapper-image6")
let italianImageo7 = document.getElementById("italian-wrapper-image7")
let italianImageo8 = document.getElementById("italian-wrapper-image8")
let italianImage1 = document.getElementById("str-wrapper");

                 //Логика анимации стрелки 
let marginImage1 =-100;
let marginImage2=-150;
let marginImage3 =-200;
let marginImage4 =-250;
let widthImage1 = 0;
let widthImage2 = 0;
let widthImage3= 0;
let widthImage4= 0;


let text2 = text.cloneNode(true);      italianImageo2.appendChild(text2);
let text3 = text.cloneNode(true);      italianImageo3.appendChild(text3);
let text4 = text.cloneNode(true);      italianImageo4.appendChild(text4);
let text5 = text.cloneNode(true);      italianImageo5.appendChild(text5);
let text6 = text.cloneNode(true);      italianImageo6.appendChild(text6);
let text7 = text.cloneNode(true);      italianImageo7.appendChild(text7);
let text8 = text.cloneNode(true);      italianImageo8.appendChild(text8);

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

setInterval(anim, 60,italianImage1.children[0],italianImage1.children[1],italianImage1.children[2],italianImage1.children[3])
setInterval(anim, 60, text2.children[0],text2.children[1], text2.children[2], text2.children[3])
setInterval(anim, 60, text3.children[0],text3.children[1], text3.children[2], text3.children[3])
setInterval(anim, 60, text4.children[0],text4.children[1], text4.children[2], text4.children[3])
setInterval(anim, 60, text5.children[0],text5.children[1], text5.children[2], text5.children[3])
setInterval(anim, 60, text6.children[0],text6.children[1], text6.children[2], text6.children[3])
setInterval(anim, 60, text7.children[0],text7.children[1], text7.children[2], text7.children[3])
setInterval(anim, 60, text8.children[0],text8.children[1], text8.children[2], text8.children[3])
             // Скрытие стрелки 
function closeText(textClose,gg){
  	textClose.addEventListener("click", function() {
		setInterval(function(){
			textClose.style.display = "none";
  			gg.style.marginLeft = parseInt( getComputedStyle(gg).marginLeft) + 20 + 'px';;
	  	},20)
			 
	})
  
}
closeText(text,italianImage);                        closeText(text3,italianImageo3.children[0]);       closeText(text5,italianImageo5.children[0]);
closeText(text2,italianImageo2.children[0]);         closeText(text4,italianImageo4.children[0]);       closeText(text6,italianImageo6.children[0]);
closeText(text7,italianImageo7.children[0]);         closeText(text8,italianImageo8.children[0]);




if(screen.width>880){
	function mar(mar1){
		mar1.children[0].style.top  = 37 + "em";               mar1.children[0].style.marginLeft  = 37 + "em";
		mar1.children[1].style.top  = 37 + "em";               mar1.children[1].style.marginLeft  = 37 + "em";
		mar1.children[2].style.top  = 37 + "em";               mar1.children[2].style.marginLeft  = 37 + "em";
		mar1.children[3].style.top  = 37 + "em";               mar1.children[3].style.marginLeft  = 37 + "em";	
	}

		mar(text2); mar(text3); mar(text4); mar(text5); mar(text6); mar(text7); mar(text8);

	function mar2(mar2){
		mar2.children[0].style.top  = 40 + "em";     mar2.children[2].style.top  = 40 + "em";
		mar2.children[1].style.top  = 40 + "em";     mar2.children[3].style.top  = 40 + "em";
	}

	mar2(text4); mar2(text5);

	text.children[0].style.top  = 4 + "em";         text6.children[0].style.top  = 30 + "em";       text7.children[0].style.top  = 25 + "em";
	text.children[1].style.top  = 4 + "em";         text6.children[1].style.top  = 30 + "em";       text7.children[1].style.top  = 25 + "em";
	text.children[2].style.top  = 4 + "em";         text6.children[2].style.top  = 30 + "em";       text7.children[2].style.top  = 25 + "em";
	text.children[3].style.top  = 4 + "em";         text6.children[3].style.top  = 30 + "em";       text7.children[3].style.top  = 25 + "em";
	
}




if(screen.width>310&&screen.width<480) {
	function mar(mar1){
		mar1.children[0].style.top  = 15 + "em";     mar1.children[0].style.marginLeft  = 13 + "em";
		mar1.children[1].style.top  = 15 + "em";     mar1.children[1].style.marginLeft  = 13 + "em";
		mar1.children[2].style.top  = 15 + "em";     mar1.children[2].style.marginLeft  = 13 + "em";
		mar1.children[3].style.top  = 15 + "em";     mar1.children[3].style.marginLeft  = 13 + "em";
	}

		mar(text2); mar(text3); mar(text4); mar(text5); mar(text6); mar(text7); mar(text8);

	function mar2(mar2){
		mar2.children[0].style.top  = 17 + "em";      mar2.children[2].style.top  = 17 + "em";
		mar2.children[1].style.top  = 17 + "em";      mar2.children[3].style.top  = 17 + "em";
	}

		mar2(text4); mar2(text3); mar2(text5);  mar2(text8)

	function mar3(mar3) {
		mar3.children[0].style.top  = 17 + "em";     mar3.children[2].style.top  = 17 + "em";
		mar3.children[1].style.top  = 17 + "em";     mar3.children[3].style.top  = 17 + "em";
	}
			mar3(text5); mar3(text8);
		text6.children[0].style.top  = 12 + "em";   text7.children[0].style.top  = 10 + "em";       text.children[0].style.marginLeft  = 4 + "em";
		text6.children[1].style.top  = 12 + "em";   text7.children[1].style.top  = 10 + "em";       text.children[1].style.marginLeft  = 4 + "em";
		text6.children[2].style.top  = 12 + "em";   text7.children[2].style.top  = 10 + "em";       text.children[2].style.marginLeft  = 4 + "em";
		text6.children[3].style.top  = 12 + "em";   text7.children[3].style.top  = 10 + "em";       text.children[3].style.marginLeft  = 4 + "em";
		
}



if(screen.width>540&&screen.width<830) {
	function mar(mar1){
		mar1.children[0].style.marginLeft  = 18 + "em";
		mar1.children[1].style.marginLeft  = 18 + "em";
		mar1.children[2].style.marginLeft  = 18 + "em";
		mar1.children[3].style.marginLeft  = 18 + "em";
	}
		mar(text2); mar(text3); mar(text4); mar(text5); mar(text6); mar(text7); mar(text8);

	function mar3(mar3) {
		mar3.children[0].style.top  = 6 + "em";
		mar3.children[1].style.top  = 6 + "em";
		mar3.children[2].style.top  = 6 + "em";
		mar3.children[3].style.top  = 6 + "em";
	}
		mar3(text8);
		

	function mar4(mar4) {
		mar4.children[0].style.top  = 7 + "em";
		mar4.children[1].style.top  = 7 + "em";
		mar4.children[2].style.top  = 7 + "em";
		mar4.children[3].style.top  = 7 + "em";
	}
		mar4(text2); mar4(text3); mar4(text4); mar4(text5);

		text.children[0].style.marginLeft  = 4 + "em";     text.children[0].style.marginTop  = -4 + "em";
		text.children[1].style.marginLeft  = 4 + "em";     text.children[1].style.marginTop  = -4  + "em";
		text.children[2].style.marginLeft  = 4 + "em";     text.children[2].style.marginTop  = -4  + "em";
		text.children[3].style.marginLeft  = 4 + "em";     text.children[3].style.marginTop  = -4  + "em";

    	text6.children[0].style.top  = 6 + "em";            text7.children[0].style.top  = 6 + "em";
		text6.children[1].style.top  = 6 + "em";            text7.children[1].style.top  = 6 + "em";
		text6.children[2].style.top  = 6 + "em";            text7.children[2].style.top  = 6 + "em";
		text6.children[3].style.top  = 6 + "em";            text7.children[3].style.top  = 6 + "em";

}
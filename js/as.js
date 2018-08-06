var block_img_belt_one =  document.getElementById("wrapper-assec").children[2];
var text_img_belt_one =   document.getElementById("wrapper-assec").children[3];
var block_img_belt_two =   document.getElementById("wrapper-assec").children[6];
var text_img_belt_two = document.getElementById("wrapper-assec").children[4];





function show_hide(block,text){
block.addEventListener("mouseover", function(){
	text.style.display = "block";
})
block.addEventListener("mouseout", function(){
	text.style.display = "none";
})

}
show_hide(block_img_belt_one,text_img_belt_one)
show_hide(block_img_belt_two,text_img_belt_two)
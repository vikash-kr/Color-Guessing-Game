//alert("Hii");
var color= [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(255, 0, 255)",
	"rgb(0, 0, 255)"
];
var square = document.querySelectorAll(".square");
var pickedColor = color[2];
var display = document.getElementById("colorDisplay");
var messageDiaplay = document.getElementById("message");

display.textContent = pickedColor;

for(var i=0; i< square.length; i++){
	square[i].style.background = color[i];
	//add quick event listner
	square[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			//alert("True");
			messageDiaplay.textContent = "Correct";
			changeColors(clickedColor);
		}
		else{
			//alert ("False");
			this.style.background = "#232323";
			messageDiaplay.textContent = "Try Again";
		}
	});
}; 

function changeColors(rightColor) {
	for (var j= 0; j< color.length; j++ ){
		square[j].style.background = rightColor;
		// if clickedColor is rightColor
	}
};
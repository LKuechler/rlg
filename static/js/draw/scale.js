var increase = document.getElementById('scalePlus');
var decrease = document.getElementById('scaleMinus');

increase.addEventListener('click', function(){
	if(scaleFactor > 2){
		scaleFactor--;
	}
	scale(scaleFactor);
});
decrease.addEventListener('click', function(){
	scaleFactor++;
	scale(scaleFactor);
});

function scale(scaleFactor) {
	blockCanvas.style.width = blockCanvas.width / scaleFactor + "px";
	ambientCanvas.style.width = ambientCanvas.width / scaleFactor + "px";
	entityCanvas.style.width = entityCanvas.width / scaleFactor + "px";
	shadowCanvas.style.width = shadowCanvas.width / scaleFactor + "px";
}

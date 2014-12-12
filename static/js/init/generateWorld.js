var start = new Date().getTime();

var world = [];
var ambient = [];
world.width = 420;
world.height = 420;
var tileWidth = 16;
var tileHeight = 16;
var scaleFactor = 16;
var blockCanvas = document.getElementById('blockCanvas');
var ambientCanvas = document.getElementById('overlayCanvas');
blockCanvas.width = world.width * tileWidth;
blockCanvas.height = world.height * tileHeight;
ambientCanvas.width = world.width * tileWidth;
ambientCanvas.height = world.height * tileHeight;
var blockLayer = blockCanvas.getContext("2d");
var ambientLayer = ambientCanvas.getContext("2d");
var heightMap = generateNoise();
var rainMap = generateNoise();
for (var x=0; x < heightMap.length; x++) {
	world.push(generateBlock(x, heightMap));
}
for (var x=0; x < world.width; x++) {
	for (var y=0; y < world.height; y++) {
		ambient.push(0);
	}
}
function getBlock(x, y, array) {
	return(array[getArrayPos(x,y)]);
}
function getArrayPos(x, y) {
	x = x % world.width;
	y = y % world.height;
	return(x + y * world.width);
}
generateRivers();
generateTrees();
drawWorld();
drawShadows();
scale(scaleFactor);

var end = new Date().getTime();
var time = end - start;
console.log('Generation time: ' + time);

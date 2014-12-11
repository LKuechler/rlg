var start = new Date().getTime();

var world = [];
var ambient = [];
world.width = 450;
world.height = 450;
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
for (var x=0; x < world.width; x++) {
	for (var y=0; y < world.height; y++) {
		world[x + "-" + y] = generateBlock(x, y, heightMap[x + "-" + y]);
	}
}
for (var x=0; x < world.width; x++) {
	ambient[x] = [];
	for (var y=0; y < world.height; y++) {
		ambient[x][y] = ambienttype[0];
	}
}
generateRivers();
generateTrees();
drawWorld();
drawShadows();
scale(scaleFactor);

var end = new Date().getTime();
var time = end - start;
console.log('Generation time: ' + time);

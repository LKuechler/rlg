var world = [];
var ambient = [];
var entitys = [];
world.width = 420;
world.height = 420;
var tileWidth = 16;
var tileHeight = 16;
var scaleFactor = 16;
var blockCanvas = document.getElementById('blockCanvas');
var ambientCanvas = document.getElementById('overlayCanvas');
var entityCanvas = document.getElementById('entityCanvas');
var shadowCanvas = document.getElementById('shadowCanvas');
blockCanvas.width = world.width * tileWidth;
blockCanvas.height = world.height * tileHeight;
ambientCanvas.width = world.width * tileWidth;
ambientCanvas.height = world.height * tileHeight;
var blockLayer = blockCanvas.getContext("2d");
var ambientLayer = ambientCanvas.getContext("2d");
var entitysLayer = ambientCanvas.getContext("2d");
var shadowLayer = ambientCanvas.getContext("2d");
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
generateRivers();
generateTrees();
// generateEntitys();

window.onload = function() {
	drawWorld();
	drawShadows();
	scale(scaleFactor);
};

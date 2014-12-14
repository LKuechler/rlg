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
generateRivers();
generateTrees();

window.onload = function() {
	drawWorld();
	drawShadows();
	scale(scaleFactor);
};

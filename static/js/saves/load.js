function load(name) {
	console.log("Starting load of game with name: " + name);
	var saveString = LZString.decompress(localStorage.getItem(name));
	console.log("convert save to world file");
	var dimensions =  saveString.match(/(\d{3,})/g);
	var saveGroups = saveString.match(/(\[[^|]+)/g);
	var saveWorld = JSON.parse(saveGroups[0]);
	var saveAmbient = JSON.parse(saveGroups[1]);
	var saveHeightMap = JSON.parse(saveGroups[2]);
	var saveRainMap = JSON.parse(saveGroups[3]);
	world = saveWorld;
	world.width = dimensions[0];
	world.height = dimensions[1];
	ambient = saveAmbient;
	heightMap = saveHeightMap;
	rainMap = saveRainMap;
	console.log("Drawing " + name);
	drawWorld();
	drawShadows();
}

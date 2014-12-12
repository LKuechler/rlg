function save(name) {
	console.log("Starting save with name: " + name);
	var saveWorld = JSON.stringify(world);
	var saveAmbient = JSON.stringify(ambient);
	var saveHeightMap = JSON.stringify(heightMap);
	var saveRainMap = JSON.stringify(rainMap);
	var saveComplete = "width:" + world.width + "height:" + world.height + "world:" + saveWorld + "|ambient:" + saveAmbient + "|heightMap:" + saveHeightMap + "|rainMap:" + saveRainMap;

	console.log("Size of sample is: " + saveComplete.length);
	var compressed = LZString.compress(saveComplete);
	console.log("Size of compressed sample is: " + compressed.length);
	localStorage.setItem(name, compressed);
}

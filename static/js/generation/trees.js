function generateTrees(){
	var treeLocations = [];
	for (var x=0; x < world.width; x++) {
		for (var y=0; y < world.height; y++) {
			if(
				getBlock(x, y, world) === 1
			) {
				if(
					Math.random() > 0.2 &&
					getBlock(x, y, rainMap) > 0.8
				) {
					treeLocations.push({x: x, y: y});
				} else if(
					Math.random() > 0.7 &&
					checkRadiusForBlock(x, y, 3, 5, world)
				) {
					treeLocations.push({x: x, y: y});
				}
			}
		}
	}
	for(var a = 0; a < treeLocations.length; a++) {
		ambient.splice(getArrayPos(treeLocations[a].x, treeLocations[a].y), 1, 1);
	}
}

function generateTrees(){
	var treeLocations = [];
	for (var x=0; x < world.width; x++) {
		for (var y=0; y < world.height; y++) {
			if(
				world[x + "-" + y].id === 1
			) {
				if(
					Math.random() > 0.2 &&
					rainMap[x + "-" + y] > 0.8
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
		ambient[treeLocations[a].x][treeLocations[a].y] = ambienttype[1];
	}
}

function findPath (startX, startY, endX, endY) {
	var worldMatrix = new PF.Grid(world.width, world.height);
	for (var a = 0; world.width > a; a++) {
		for (var b = 0; world.height > b; b++) {
			worldMatrix.setWalkableAt(a, b, blocktype[getBlock(a, b, world)].passable);
		}
	}

	var finder = new PF.BestFirstFinder();
	var path = finder.findPath(startX, startY, endX, endY, worldMatrix);
	return(path[1]);
}
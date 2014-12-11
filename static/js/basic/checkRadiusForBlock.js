function checkRadiusForBlock(x, y, r, blockid, world) {
	var blocksInRadius = getBlocksInRadius(x, y, r);
	var blocksOfTypeInRadius = [];
	for(var a = 0; a < blocksInRadius.length; a++) {
		if(world[blocksInRadius[a].x + "-" + blocksInRadius[a].y].id === blockid) {
			blocksOfTypeInRadius.push(blocksInRadius[a]);
		}
	}
	if(blocksOfTypeInRadius.length > 0){
		return blocksOfTypeInRadius;
	}
	return false;
}

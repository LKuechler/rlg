function checkRadiusForBlock(x, y, r, blockid, world) {
	var blocksInRadius = getBlocksInRadius(x, y, r);
	var blocksOfTypeInRadius = [];
	for(var a = 0; a < blocksInRadius.length; a++) {
		if(getBlock(blocksInRadius[a].x, blocksInRadius[a].y, world) === blockid) {
			blocksOfTypeInRadius.push(blocksInRadius[a]);
		}
	}
	if(blocksOfTypeInRadius.length > 0){
		return blocksOfTypeInRadius;
	}
	return false;
}

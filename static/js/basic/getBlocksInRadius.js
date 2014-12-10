function getBlocksInRadius(centerX, centerY, radius) {
	var blocksInRadius = [];
	for(var targetX = 0; targetX < world.width; targetX++) {
		if(diff(targetX, centerX) <= radius) { // Check if diff between points is to high to be in circle anyway
			for(var targetY = 0; targetY < world.height; targetY++){
				if(diff(targetY, centerY) <= radius) { // Check if diff between points is to high to be in circle anyway
					var square_dist = Math.pow(centerX - targetX, 2) + Math.pow(centerY - targetY, 2);
					if(square_dist < (radius*radius)) { // Check if points are in circle
						blocksInRadius.push({x: targetX, y: targetY});
					}
				}
			}
		}
	}
	return(blocksInRadius);
}

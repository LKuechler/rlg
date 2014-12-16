function generateEntitys() {
	var entityCount = 0;
	for (var x=0; x < world.width; x++) {
		for (var y=0; y < world.height; y++) {
			if(getBlock(x, y, world) === 1 && entityCount <= 1) {
				entityCount ++;
				entitys.push({type:0, x: x, y: y});
			}
		}
	}
}

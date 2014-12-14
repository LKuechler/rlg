function generateEntitys() {
	for (var x=0; x < world.width; x++) {
		for (var y=0; y < world.height; y++) {
			if(getBlock(x, y, heightMap) === 1) {
				entitys.push({type:0, x: x, y: y});
			}
		}
	}
}

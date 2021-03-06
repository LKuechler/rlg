function draw(x, y, array, layer, type) {
	var block = type[getBlock(x, y, array)];
	if(block.id === 0 && layer === blockLayer){
		transitionCoast(x, y, block);
	} else {
		drawBlock(x, y, block, layer);
	}
}

function drawBlock(x, y, block, layer) {
	if(block.img) {
		if(block.imgType === "random") {
			layer.drawImage(block.img[Math.floor(Math.random()*block.img.length)], 0, 0, 16, 16, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
		} else {
			layer.drawImage(block.img, 0, 0, 16, 16, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
		}
	} else {
		layer.fillStyle = block.color;
		layer.fillRect(x*tileWidth, y*tileHeight, tileWidth, tileHeight);
	}
}

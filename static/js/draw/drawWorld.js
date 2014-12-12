function drawWorld() {
	blockLayer.clearRect ( 0 , 0 , blockCanvas.width, blockCanvas.height );
	for (var x = 0; x < world.width; x++)
	{
		for (var y = 0; y < world.height; y++)
		{
			// draw it
			var block = blocktype[getBlock(x, y, world)];
			if(block.img) {
				blockLayer.drawImage(block.img, 0, 0, 16, 16, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
			} else {
				blockLayer.fillStyle = block.color;
				blockLayer.fillRect(x*tileWidth, y*tileHeight, tileWidth, tileHeight);
			}
		}
	}

	ambientLayer.clearRect ( 0 , 0 , ambientCanvas.width, ambientCanvas.height );
	for (var x = 0; x < world.width; x++)
	{
		for (var y = 0; y < world.height; y++)
		{
			// draw it
			var ambientBlock = ambienttype[getBlock(x, y, ambient)];
			if(ambientBlock.img) {
				ambientLayer.drawImage(ambientBlock.img, 0, 0, 16, 16, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
			} else {
				ambientLayer.fillStyle = ambientBlock.color;
				ambientLayer.fillRect(x*tileWidth, y*tileHeight, tileWidth, tileHeight);
			}
		}
	}
}

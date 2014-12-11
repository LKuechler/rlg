function drawWorld() {
	blockLayer.clearRect ( 0 , 0 , blockCanvas.width, blockCanvas.height );
	for (var x = 0; x < world.width; x++)
	{
		for (var y = 0; y < world.height; y++)
		{
			// draw it
			if(world[x + "-" + y].img) {
				blockLayer.drawImage(world[x + "-" + y].img, 0, 0, 16, 16, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
			} else {
				blockLayer.fillStyle = world[x + "-" + y].color;
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
			if(ambient[x][y].img) {
				ambientLayer.drawImage(ambient[x][y].img, 0, 0, 16, 16, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
			} else {
				ambientLayer.fillStyle = ambient[x][y].color;
				ambientLayer.fillRect(x*tileWidth, y*tileHeight, tileWidth, tileHeight);
			}
		}
	}
}

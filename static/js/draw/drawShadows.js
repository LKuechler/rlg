function drawShadows() {
	for (var x=0; x < world.width; x++)
	{
		for (var y=0; y < world.height; y++)
		{
			// draw it
			blockLayer.fillStyle = "rgba(0, 0, 0, " + heightMap[x][y]*0.3 + ")";
			blockLayer.fillRect(x*tileWidth, y*tileHeight, tileWidth, tileHeight);
		}
	}
}

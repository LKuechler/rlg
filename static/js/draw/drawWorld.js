function drawWorld() {
	var start = new Date().getTime();

	blockLayer.clearRect ( 0 , 0 , blockCanvas.width, blockCanvas.height );
	ambientLayer.clearRect ( 0 , 0 , ambientCanvas.width, ambientCanvas.height );
	for (var x = 0; x < world.width; x++)
	{
		for (var y = 0; y < world.height; y++)
		{
			// blocklayer
			draw(x, y, world, blockLayer, blocktype);

			//ambientlayer
			draw(x, y, ambient, ambientLayer, ambienttype);
		}
	}

	for (var a = 0; a < entitys.length; a++) {
		var e = entitys[a];
		drawEntity(e.x, e.y, e.type);
	}

	var end = new Date().getTime();
	var time = end - start;
	console.log('drawing time: ' + time);
}

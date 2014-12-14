function drawWorld() {
	var start = new Date().getTime();
	blockLayer.clearRect ( 0 , 0 , blockCanvas.width, blockCanvas.height );
	for (var x = 0; x < world.width; x++)
	{
		for (var y = 0; y < world.height; y++)
		{
			// draw it
			var block = blocktype[getBlock(x, y, world)];
			if(block.id === 0){
				transitionCoast(x, y, block);
			} else {
				draw(x, y, block, blockLayer);
			}
		}
	}

	ambientLayer.clearRect ( 0 , 0 , ambientCanvas.width, ambientCanvas.height );
	for (var a = 0; a < world.width; a++)
	{
		for (var b = 0; b < world.height; b++)
		{
			// draw it
			var ambientBlock = ambienttype[getBlock(a, b, ambient)];
			draw(a, b, ambientBlock, ambientLayer);
		}
	}
	var end = new Date().getTime();
	var time = end - start;
	console.log('drawing time: ' + time);
}

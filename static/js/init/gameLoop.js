gameLoopActive = false;

function gameLoop() {
	var oldWorld = world.slice();
	var oldAmbient = ambient.slice();
	var oldEntitys = entitys.slice();
	// Entity Tasks
	for(var i = 0; i < entitys.length; i++) {
		giveTask(entitys[i]);
		var moveX = 0;
		var moveY = 0;
		if(Math.random() < 0.5) {
			if(Math.random() < 0.5) {
				moveX = Math.round(Math.random());
			} else {
				moveX = -Math.round(Math.random());
			}
		} else {
			if(Math.random() < 0.5) {
				moveY = Math.round(Math.random());
			} else {
				moveY = -Math.round(Math.random());
			}
		}
		moveEntity(entitys[i].x + moveX, entitys[i].y + moveY, entitys[i]);
	}
	// All action has to happen here
	reDraw(oldWorld, world, blockLayer, blocktype);
	reDraw(oldAmbient, ambient, ambientLayer, ambienttype);
	reDraw(oldEntitys, entitys, entitysLayer, entitytype);

	if (gameLoopActive) {
		setTimeout(function() {
			window.requestAnimationFrame(gameLoop)
		}, 1000);
	}
}

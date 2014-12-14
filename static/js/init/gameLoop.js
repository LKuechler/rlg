gameLoopActive = false;

function gameLoop() {
	var oldWorld = world.slice();
	var oldAmbient = ambient.slice();
	var oldEntitys = entitys.slice();
	// Entity Tasks
	// All action has to happen here
	reDraw(oldWorld, world, blockLayer, blocktype);
	reDraw(oldAmbient, ambient, ambientLayer, ambienttype);
	reDraw(oldEntitys, entitys, entitysLayer, entitytype);

	if (gameLoopActive) {

		window.requestAnimationFrame(gameLoop);
	}
}

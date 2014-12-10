gameLoopActive = false;

function gameLoop() {
	// Entity Tasks
	// All action has to happen here
	drawWorld();
	drawShadows()
	if (gameLoopActive) {

		window.requestAnimationFrame(loop);
	}
}

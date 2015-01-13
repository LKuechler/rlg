gameLoopActive = false;

function gameLoop() {
	var oldWorld = world.slice();
	var oldAmbient = ambient.slice();
	var oldEntitys = entitys.slice();
	// Entity Tasks
	for(var i = 0; i < entitys.length; i++) {
		var entity = entitys[i];
		if (entity.tasks.length > 0) {
			var task = entity.tasks[0].name;
			var attributesList = entity.tasks[0].attributes;
			var attributes = [];
			for (var i = 0; i < attributesList.length; i++) {
				attributes.push(attributesList[i]);
			};
			task(attributes);
		} else {
			giveTask(entity);
		};
	}
	// All action has to happen here
	reDraw(oldWorld, world, blockLayer, blocktype);
	reDraw(oldAmbient, ambient, ambientLayer, ambienttype);
	reDraw(oldEntitys, entitys, entitysLayer, entitytype);

	if (gameLoopActive) {
		setTimeout(function() {
			window.requestAnimationFrame(gameLoop)
		}, 250);
	}
}

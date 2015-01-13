function moveEntity(x, y, entity) {
	if(blocktype[getBlock(x, y, world)].passable === false){
		return false;
	}
	entity.x = x;
	entity.y = y;
	return true;
}


function seek(attributes) {
	var x = attributes[0];
	var y = attributes[1];
	var entity = attributes[2];
	entity.tasks.shift(); //removes first task from entity

	var xDiff = diff(x, entity.x);
	var yDiff = diff(y, entity.y);
	var response;
	if(xDiff > yDiff) {
		if(x > entity.x) {
			response = moveEntity(entity.x+1, entity.y, entity);
		} else {
			response = moveEntity(entity.x-1, entity.y, entity);
		}
	} else {
		if(y > entity.y) {
			response = moveEntity(entity.x, entity.y+1, entity);
		} else {
			response = moveEntity(entity.x, entity.y-1, entity);
		}
	}

	if(x != entity.x && y != entity.y && response) { //when entity is not yet at the desired location re add seek to tasks
		entity.tasks.unshift({name: seek, attributes: [x, y, entity]}); //add task for entity at top of tasks list
	}
}

function harvest(attributes) {
	var x = attributes[0];
	var y = attributes[1];
	var entity = attributes[2];
	ambient.splice(getArrayPos(x, y), 1, 0);
	entity.tasks.shift(); //removes first task from entity
}
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

	var nextStep = findPath(entity.x, entity.y, x, y);
	var response = moveEntity(nextStep[0], nextStep[1], entity);
	if((x != nextStep[0]) || (y != nextStep[1]) && response) { //when entity is not yet at the desired location re add seek to tasks
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
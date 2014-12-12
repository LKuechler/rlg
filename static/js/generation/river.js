function generateRivers(){
	var riverCount = 0;
	rivers = [];
	for (var x=0; x < world.width; x++) {
		for (var y=0; y < world.height; y++) {
			if (
				getBlock(x, y, heightMap) < 0.1 &&
				getBlock(x-1, y, heightMap) < 0.2 &&
				getBlock(x, y-1, heightMap) < 0.2 &&
				getBlock(x, y+1, heightMap) < 0.2 &&
				getBlock(x, y, rainMap) > 0.8 &&
				riverCount < (world.width*world.height)/50000
			) {
				var diffX = 50;
				var diffY = 50;
				for (var a = 0; a < rivers.length; a++) {
					diffX = diff(x, rivers[a].x);
					diffY = diff(y, rivers[a].y);
				}
				if (diffX >= 50 && diffY >= 50){
					if(Math.floor(Math.random()*2) != 0){
						x --;
					} else {
						x ++;
					}
					if(Math.floor(Math.random()*2) != 0){
						y --;
					} else {
						y ++;
					}
					world.splice(getArrayPos(x, y), 1, 5);
					riverPath(x, y, "none", 0);
					rivers[riverCount] = {object: world[x + "-" + y], x: x, y: y};
					riverCount ++;
				}
			}
		}
	}
}

function riverPath(x, y, prevPath, length){
	var directions = {};
	directions[0] = {object: getBlock(x, y-1, heightMap), x: x, y: y-1};
	directions[1] = {object: getBlock(x+1, y, heightMap), x: x+1, y: y};
	directions[2] = {object: getBlock(x, y+1, heightMap), x: x, y: y+1};
	directions[3] = {object: getBlock(x-1, y, heightMap), x: x-1, y: y};
	var nextPath = {object: 0};
	for (var a=0; a < 4; a++) {
		if (nextPath.object < directions[a].object) {
			nextPath = directions[a];
		}
	}
	if (getBlock(nextPath.x, nextPath.y, world) !== 0 && prevPath !== nextPath && length <= 15) {
		world.splice(getArrayPos(nextPath.x, nextPath.y), 1, 5);
		if(Math.floor(Math.random()*2) !== 0) {
			nextPath.x += Math.floor(Math.random()*2);
			nextPath.y += Math.floor(Math.random()*2);
			world.splice(getArrayPos(nextPath.x, nextPath.y), 1, 5);
		}
		length ++;
		riverPath(nextPath.x, nextPath.y, nextPath, length);
	} else if (length > 15) {
		var lake = checkRadiusForBlock(x, y, 4, 1, world);
		var edgeOfLake = checkRadiusForBlock(x, y, 5, 1, world);
		if(!checkRadiusForBlock(x, y, 6, 0, world)){
			for (var j = 0; j < lake.length; j++) {
				world.splice(getArrayPos(lake[j].x, lake[j].y), 1, 5);
			}
			for (var j = 0; j < edgeOfLake.length; j++) {
				if(Math.random() < 0.5) {
					world.splice(getArrayPos(edgeOfLake[j].x, edgeOfLake[j].y), 1, 5);
				}
			}
		}
	}
}

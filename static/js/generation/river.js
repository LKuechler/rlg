function generateRivers(){
	var riverCount = 0;
	rivers = [];
	for (var x=0; x < world.width; x++) {
		for (var y=0; y < world.height; y++) {
			if (
				heightMap[x][y] < 0.1 &&
				heightMap[x-1][y] < 0.2 &&
				heightMap[x][y-1] < 0.2 &&
				heightMap[x][y+1] < 0.2 &&
				rainMap[x][y] > 0.8 &&
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

					world[x][y] = blocktype[5];
					riverPath(x, y, "none", 0);
					rivers[riverCount] = {object: world[x][y], x: x, y: y};
					riverCount ++;
				}
			}
		}
	}
}

function riverPath(x, y, prevPath, length){
	var directions = {};
	directions[0] = {object: heightMap[x][y-1], x: x, y: y-1};
	directions[1] = {object: heightMap[x+1][y], x: x+1, y: y};
	directions[2] = {object: heightMap[x][y+1], x: x, y: y+1};
	directions[3] = {object: heightMap[x-1][y], x: x-1, y: y};
	var nextPath = {object: 0};
	for (var x=0; x < 4; x++) {
		if (nextPath.object < directions[x].object) {
			nextPath = directions[x];
		}
	}
	if (world[nextPath.x][nextPath.y].id !== 0 && prevPath !== nextPath && length <= 80) {
		world[nextPath.x][nextPath.y] = blocktype[5];
		if(Math.floor(Math.random()*2) !== 0) {
			nextPath.x += Math.floor(Math.random()*2);
			nextPath.y += Math.floor(Math.random()*2);
			world[nextPath.x][nextPath.y] = blocktype[5];
		}
		length ++;
		riverPath(nextPath.x, nextPath.y, nextPath, length);
	}
}

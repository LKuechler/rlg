function save(name) {
	console.log("Starting save with name: " + name);
	var save = "";
	var prevId;
	for(var x = 0; x < world.length; x++){
		for(var y = 0; y < world[x].length; y++){
			if(world[x][y].id === prevId) {
				save += "[" + x + "," + y + "]";
			}
			else if(prevId === undefined) {
				save += world[x][y].id + ":{[" + x + "," + y + "]";
			}
			else {
				save += "}" + world[x][y].id + ":{[" + x + "," + y + "]";
			}
			prevId = world[x][y].id;
		}
	}
	// return(JSON.stringify(save));
	// console.log(JSON.stringify(save));
	console.log("Size of sample is: " + save.length);
	var compressed = LZString.compress(save);
	console.log("Size of compressed sample is: " + compressed.length);
	localStorage.setItem(name, compressed)
}

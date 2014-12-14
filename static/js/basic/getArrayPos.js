function getArrayPos(x, y) {
	x = x % world.width;
	y = y % world.height;
	return(x + y * world.width);
}
function getCoordinates(z) {
	var x = z % world.width;
	var y = (z - x)/world.width;
	return({x: x, y: y});
}

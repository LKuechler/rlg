function getArrayPos(x, y) {
	x = x % world.width;
	y = y % world.height;
	return(x + y * world.width);
}

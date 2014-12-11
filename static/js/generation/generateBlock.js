function generateBlock(x, y, height) {
	var number = 0;
	if(heightMap[x + "-" + y] < 0.1) {
		number = 3; //mountain
	}

	else if(heightMap[x + "-" + y] < 0.15) {
		number = 2; //stone
	}

	else if(heightMap[x + "-" + y] < 0.35) {
		number = 1; //grass
	}

	else if(heightMap[x + "-" + y] < 0.38) {
		number = 4; //sand
	}

	else {
		number = 0; //saltwater
	}

	return(blocktype[number]);
}

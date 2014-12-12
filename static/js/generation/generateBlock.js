function generateBlock(x, heightMap) {
	var number = 0;
	var height = heightMap[x];
	if(height < 0.1) {
		number = 3; //mountain
	}

	else if(height < 0.15) {
		number = 2; //stone
	}

	else if(height < 0.35) {
		number = 1; //grass
	}

	else if(height < 0.38) {
		number = 4; //sand
	}

	else {
		number = 0; //saltwater
	}

	return(number);
}

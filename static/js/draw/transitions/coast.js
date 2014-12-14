function transitionCoast(x, y, block) {
	var north = getBlock(x, y-1, world);
	var northEast = getBlock(x+1, y-1, world);
	var east = getBlock(x+1, y, world);
	var eastSouth = getBlock(x+1, y+1, world);
	var south = getBlock(x, y+1, world);
	var southWest = getBlock(x-1, y+1, world);
	var west = getBlock(x-1, y, world);
	var westNorth = getBlock(x-1, y-1, world);
	var img = "";
	var naighbor = "";
	if (x < 5 || y < 5) {
		img = "";
	}
	else if (north !== 0 && east !== 0) {
		img = titleset.waterNorthEast;
		naighbor = blocktype[east];
	}
	else if (east !== 0 && south !== 0) {
		img = titleset.waterEastSouth;
		naighbor = blocktype[east];
	}
	else if (south !== 0 && west !== 0) {
		img = titleset.waterSouthWest;
		naighbor = blocktype[west];
	}
	else if (west !== 0 && north !== 0) {
		img = titleset.waterWestNorth;
		naighbor = blocktype[west];
	}
	else if(north !== 0){
		img = titleset.waterSouth;
		naighbor = blocktype[north];
	}
	else if (east !== 0) {
		img = titleset.waterWest;
		naighbor = blocktype[east];
	}
	else if (south !== 0) {
		img = titleset.waterNorth;
		naighbor = blocktype[south];
	}
	else if (west !== 0) {
		img = titleset.waterEast;
		naighbor = blocktype[west];
	}
	else if (northEast !== 0) {
		img = titleset.waterSouthAndWest;
		naighbor = blocktype[northEast];
	}
	else if (eastSouth !== 0) {
		img = titleset.waterWestAndNorth;
		naighbor = blocktype[eastSouth];
	}
	else if (southWest !== 0) {
		img = titleset.waterNorthAndEast;
		naighbor = blocktype[southWest];
	}
	else if (westNorth !== 0) {
		img = titleset.waterEastAndSouth;
		naighbor = blocktype[westNorth];
	}
	if(img) {
		if(naighbor){
			draw(x, y, naighbor, blockLayer);
		}
		blockLayer.drawImage(img, 0, 0, 16, 16, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
	} else {
		draw(x, y, block, blockLayer);
	}
}

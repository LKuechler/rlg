function generateNoise() {
	var noiseArr = [];
	var wHeight = world.height/30;
	var wWidth = world.width/30;

	for(i = 0; i <= wHeight; i++) {

		for(j = 0; j <= wWidth; j++) {
			var height = Math.random();

			if(i === 0 || j === 0 || i === wHeight || j === wWidth) {
				height = 1;
			}
			noiseArr[i + "-" + j] = height;
		}
	}
	return(interpolate(noiseArr));
}

function interpolate(points) {
	var noiseArr = [];
	var x = 0;
	var y = 0;
	for(i = 0; i < world.width; i++) {
		if(i !== 0 && i % 30 === 0) {
			x++;
		}
		for(j = 0; j < world.height; j++) {
			if(j !== 0 && j % 30 === 0) {
				y++;
			}

			var mu_x = (i%30) / 30;
			var mu_2 = (1 - Math.cos(mu_x * Math.PI)) / 2;
			var int_x1 = points[x + "-" + y] * (1 - mu_2) + points[(x+1) + "-" + y] * mu_2;
			var int_x2 = points[x + "-" + (y+1)] * (1 - mu_2) + points[(x+1) + "-" + (y+1)] * mu_2;

			var mu_y = (j%30) / 30;
			mu_2 = (1 - Math.cos(mu_y * Math.PI)) / 2;
			var int_y = int_x1 * (1 - mu_2) + int_x2 * mu_2;

			noiseArr[i + "-" + j] = int_y;
		}
		y = 0;
	}
	return(noiseArr);
}

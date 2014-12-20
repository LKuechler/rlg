function reDraw(old, now, layer, type) {
	if(now === old) {
		console.log("no changes in " + layer);
	} else {
		if(layer === entitysLayer) {
			entitysLayer.clearRect ( 0 , 0 , entityCanvas.width, entityCanvas.height );
			for (var a = 0; a < entitys.length; a++) {
				var e = entitys[a];
				drawEntity(e.x, e.y, e.type);
			}
		} else {
			for(var a = 0; a < now.length; a++) {
				if(now[a] !== old[a]) {
					var x = getCoordinates(a).x;
					var y = getCoordinates(a).y;
					draw(x, y, now, layer, type);
					draw(x, y-1, now, layer, type); // north of block
					draw(x+1, y-1, now, layer, type); // north east of block
					draw(x+1, y, now, layer, type); // east of block
					draw(x+1, y+1, now, layer, type); // east south of block
					draw(x, y+1, now, layer, type); // south of block
					draw(x-1, y+1, now, layer, type); // south west of block
					draw(x-1, y, now, layer, type); // west of block
					draw(x-1, y-1, now, layer, type); // west north of block
				}
			}
		}
	}
}

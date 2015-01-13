function giveTask (entity) {
	var x = entity.x;
	var y = entity.y;
	// for (var relation = 0; relation < entity.relations.length - 1; relation++) {
	// 	entity.relations[relation]
	// };
	if (getBlock(x, y, ambient) === 1) {
		entity["tasks"].push({name: harvest, attributes: [x, y, entity]});
		return;
	}
	var trees = checkRadiusForBlock(x, y, 10, 1, ambient);
	if (trees.length) {
		var distance = -1;
		var closestTree;
		for (var i = 0; i < trees.length; i++) {
			var tree = trees[i];
			var newDistance = diff(tree.x, x) + diff(tree.y, y);
			if (distance < 0 || distance > newDistance) {
				closestTree = tree;
				distance = newDistance;
			};
		};
		entity["tasks"].push({name: seek, attributes: [closestTree.x, closestTree.y, entity]});
		return;
	};
}
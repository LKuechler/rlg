function giveTask (entity) {
	var x = entity.x;
	var y = entity.y;
	// for (var relation = 0; relation < entity.relations.length - 1; relation++) {
	// 	entity.relations[relation]
	// };
	if (getBlock(x, y, ambient) === 1) {
		entity["tasks"].push({name: harvest, attributes: [x, y, entity]});
	}
	var trees = checkRadiusForBlock(x, y, 10, 1, ambient);
	if (trees.length) {
		var distance = 0;
		var closestTree;
		for (var i = 0; i < trees.length; i++) {
			var tree = trees[i];
			var newDistance = diff(tree.x, x) + diff(tree.y, y);
			if (distance < newDistance) {
				closestTree = tree;
			};
		};
		entity["tasks"].push({name: seek, attributes: [tree.x, tree.y, entity]});
	};
}
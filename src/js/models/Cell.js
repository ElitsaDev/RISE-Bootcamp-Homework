class Cell {
	constructor(x, y, distance, value, previousNode) {
		this.x = x;
		this.y = y;
		this.distance = distance;
		this.value = value;
		this.previousNode = previousNode;
	}
	toString() {
		return "(" + this.x + ", " + this.y + ")";
	}
}
class ShortestPathBetweenCellsBFS {
	//BFS, Time O(n^2), Space O(n^2)
	shortestPath(matrix, start, end) {
		let sourceX = start[0];
		let sourceY = start[1];
		let destinationX = end[0];
		let destinationY = end[1];
		//if start or end value is 0, return
		if (matrix[sourceX][sourceY] == null
			|| matrix[destinationX][destinationY] == null
			|| matrix[destinationX][destinationY] == 'C') {
			console.log("There is no path.");
			return;
		}
		//initialize the cells 
		let m = matrix.length;
		let n = matrix[0].length;
		let cells = [];
		for (let i = 0; i < m; i++) {
			cells[i] = [];
			for (let j = 0; j < n; j++) {
				if (matrix[i][j] != null) {
					cells[i][j] = new Cell(i, j, Number.MAX_VALUE, matrix[i][j], null);
				}
			}
		}
		//breadth first search
		let queue = [];
		let src = cells[sourceX][sourceY];
		src.distance = 0;
		queue.push(src);
		let destination = null;
		let point;
		while ((point = queue.shift()) != null) {
			//find destinationination 
			if (point.x == destinationX && point.y == destinationY) {
				destination = point;
				break;
			}
			// moving up
			this.visit(cells, queue, point.x - 1, point.y, point);
			// moving left
			this.visit(cells, queue, point.x, point.y - 1, point);
			// moving down
			this.visit(cells, queue, point.x + 1, point.y, point);
			//moving right
			this.visit(cells, queue, point.x, point.y + 1, point);
		}

		//compose the path if path exists
		let count = 0;
		if (destination == null) {
			console.log("there is no path.");
			return;
		} else {
			let path = [];
			point = destination;
			do {
				count++;
				path.unshift(point);
			} while ((point = point.prev) != null);
			//console.log(`${path}`);
			//console.log(`Number of movement: ${count}`)
			return count;
		}
	}

	//function to update cell visiting status, Time O(1), Space O(1)
	visit(cells, queue, x, y, parent) {
		//out of boundary
		if (x < 0 || x >= cells.length || y < 0 || y >= cells[0].length
			|| cells[x][y] == null || cells[x][y].value == 'C') {
			return;
		}
		//update distanceance, and previous node
		let distance = parent.distance + 1;
		let point = cells[x][y];
		if (distance < point.distance) {
			point.distance = distance;
			point.prev = parent;
			queue.push(point);
		}
	}
}

export default ShortestPathBetweenCellsBFS;

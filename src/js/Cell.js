
class Cell  {
    constructor(x, y, distance, previousNode) {
        this.x = x;
        this.y = y;
        this.distance = distance; 
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
		if (matrix[sourceX][sourceY] == 0 || matrix[destinationX][destinationY] == 0) {
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
	            if (matrix[i][j] != 0) {
	                cells[i][j] = new Cell(i, j, Number.MAX_VALUE, null);                   
	            }
	        }
	    }
	    //breadth first search
	    let queue = [];       
	    let src = cells[sourceX][sourceY];
	    src.distance = 0;
	    queue.push(src);
	    let destination = null;
	    let p;
	    while ((p = queue.shift()) != null) {
	    	//find destinationination 
	        if (p.x == destinationX && p.y == destinationY) { 
	            destination = p;
	            break;
	        }      
	        // moving up
	        this.visit(cells, queue, p.x-1, p.y, p);    
            // moving left
	        this.visit(cells, queue, p.x, p.y-1, p);     
	        // moving down
	        this.visit(cells, queue, p.x+1, p.y, p);             
	        //moving right
	        this.visit(cells, queue, p.x, p.y+1, p);
	    }
	    
	    //compose the path if path exists
        let count = 0;
	    if (destination == null) {
	    	console.log("there is no path.");
	        return;
	    } else {
	        let path = [];
	        p = destination;
	        do {
                count++;
	            path.unshift(p);
	        } while ((p = p.prev) != null);
	        console.log(`${path}`);
            console.log(`Number of movement: ${count}`)
	    }
	}
	
	//function to update cell visiting status, Time O(1), Space O(1)
	visit(cells, queue, x, y, parent) { 
		//out of boundary
	    if (x < 0 || x >= cells.length || y < 0 || y >= cells[0].length || cells[x][y] == null) {
	        return;
	    }    
	    //update distanceance, and previous node
	    let distance = parent.distance + 1;
	    let p = cells[x][y];
	    if (distance < p.distance) {
	        p.distance = distance;
	        p.prev = parent;
	        queue.push(p);
	    }
	}
}
const matrix = [
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [0, 1, 1, 1]];
let myObj = new ShortestPathBetweenCellsBFS();  
//case1, there is no path
let start = [0, 0];
let end = [1, 1];
console.log("case 1: ");
myObj.shortestPath(matrix, start, end);
//case 2, there is path
let start1 = [1, 1];
let end1 = [2, 3];
console.log("case 2: ");
myObj.shortestPath(matrix, start1, end1);


export default ShortestPathBetweenCellsBFS;

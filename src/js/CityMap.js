
export default class CityMap {
    
    constructor(x, y ) {
        this.x = x;
        this.y = y;
        this.board = [];
    }

    create() {  
        for (let i = 0; i < this.x; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.y; j++) {
                this.board[i][j] = '-';
            } 
        }
             
    }

    populateCity( x, y, value){
        this.board[x][y] = value ;
            
    }
}

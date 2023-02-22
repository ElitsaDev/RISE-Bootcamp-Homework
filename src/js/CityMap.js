export default  class CityMap {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    create() {
        let board = [];

        for (let i = 0; i < this.x; i++) {
            board[i] = [];
            for (let j = 0; j < this.y; j++) {
                board[i][j] = 0;
            } 
        }
            console.log(JSON.stringify(board));         
    }
}

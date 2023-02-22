import CityMap from "./CityMap.js";
import Warehouse from "./Warehouse.js";
import FindPoint from "./util.js"


let village = new CityMap(10, 10);

village.create();


let leftHouse = new Warehouse(5, 5, "Left warehouse");
let rightHouse = new Warehouse(20, 20, "Right warehouse");

console.log(leftHouse)

let positionLeftHouse = FindPoint(village.x, village.y, leftHouse.x, leftHouse.y);
let positionRightHouse = FindPoint(village.x, village.y, rightHouse.x, rightHouse.y);

if(positionLeftHouse){
    village.updateMapWithHouses(leftHouse.x, leftHouse.y);
}



/*
let getDronPosition = new Array();
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] == 'd') {
                    let sizes = { i, j };
                    getDronPosition.add(sizes);
                }
            }
}
*/
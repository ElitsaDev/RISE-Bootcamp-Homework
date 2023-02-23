import CityMap from "./CityMap.js";
import Warehouse from "./Warehouse.js";
import FindPoint from "./util.js";
import Customer from "./Customer.js";

let city = new CityMap(15, 15);

city.create();

let leftHouse = new Warehouse(0, 0, "Left warehouse");
let rightHouse = new Warehouse(9, 9, "Right warehouse");

console.log(leftHouse);

let positionLeftHouse = FindPoint(city.x, city.y, leftHouse.x, leftHouse.y);
let positionRightHouse = FindPoint(city.x, city.y, rightHouse.x, rightHouse.y);

//Refactor with warehousesDB.forEach()
if(positionLeftHouse){
    city.populateCity(leftHouse.x, leftHouse.y, 'H');
}else{
    console.log("Warehouse is outside of city!");
}

if(positionRightHouse){
    city.populateCity(rightHouse.x, rightHouse.y, 'H');
}else{
    console.log("Warehouse is outside of city!");
}

//Populate city with customers
let firstCustomer = new Customer(1, 'John Stocks', 10, 10);
let positionFirstCustomer = FindPoint(city.x, city.y, firstCustomer.coordinates.x, firstCustomer.coordinates.y);

if(positionFirstCustomer){
    city.populateCity(firstCustomer.coordinates.x, firstCustomer.coordinates.y, 'C');
}
    


console.table(city.board); 

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
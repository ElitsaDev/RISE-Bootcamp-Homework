import CityMap from "./CityMap.js";
import Warehouse from "./Warehouse.js";
import Customer from "./Customer.js";
import FindPoint from "./util.js";

import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
const cityDimensionX = data['map-top-right-coordinate'].x;
const cityDimensionY = data['map-top-right-coordinate'].y;
let city = new CityMap(cityDimensionX, cityDimensionY);
city.create();

let numberOfHouses = data['warehouses'].length;

for (let i = 0; i < numberOfHouses; i++) {
    let x = data['warehouses'][i].x;
    let y = data['warehouses'][i].y;
    let house = new Warehouse(x, y, data['warehouses'][i].name);
    //console.log(house);

    let positionOfHouse = FindPoint(cityDimensionX, cityDimensionY, x, y);
    if (positionOfHouse) {
        city.populateCity(x, y, 'H');

    } else {
        console.log("Warehouse is outside of city!");
    }
}

//Populate city with customers
let numberOfCustomers = data['customers'].length;
for (let i = 0; i < numberOfCustomers; i++) {
    let x = data['customers'][i].coordinates.x;
    let y = data['customers'][i].coordinates.y;
    let customer = new Customer(i, data['customers'][i].name, x, y);
    //console.log(customer);

    let positionOfCustomer = FindPoint(cityDimensionX, cityDimensionY, x, y);
    if (positionOfCustomer) {
        city.populateCity(x, y, 'C');
    } else {
        console.log("Customer is outside of city!");
    }
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





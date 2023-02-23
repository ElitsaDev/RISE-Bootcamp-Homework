import CityMap from './CityMap.js';
import Warehouse from './Warehouse.js';
import Customer from './Customer.js';
import FindPoint from './util.js';
import ShortestPathBetweenCellsBFS from './Cell.js';

import fs from 'fs';
import { start } from 'repl';

const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
const cityDimensionX = data['map-top-right-coordinate'].x;
const cityDimensionY = data['map-top-right-coordinate'].y;
let city = new CityMap(cityDimensionX, cityDimensionY);
city.create();

let numberOfWarehouses = data['warehouses'].length;

for (let i = 0; i < numberOfWarehouses; i++) {
    let x = data['warehouses'][i].x;
    let y = data['warehouses'][i].y;
    let warehouse = new Warehouse(x, y, data['warehouses'][i].name);
    //console.log(warehouse);

    let positionOfWarehouse = FindPoint(cityDimensionX, cityDimensionY, x, y);
    if (positionOfWarehouse) {
        city.populateCity(x, y, 'W');

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

//console.table(city.board);


let customerIdOrdered = [];
let numberOfOrders = data['orders'].length;

for (let i = 0; i < numberOfOrders; i++) {
    let customerId = data['orders'][i].customerId;
    customerIdOrdered.push(customerId);
}

//console.log(customerIdOrdered); 

let customers = [];
let customersOrdered = Array.of(data['customers']);
console.table(customersOrdered);

for (let i = 0; i < customerIdOrdered.length; i++) {
    const element = customerIdOrdered[i];
    for (let j = 0; j < customersOrdered.length; j++) {
        if (customersOrdered.values.customerId == element) {
            customers.push(customersOrdered.values.customerId);
        }
    }
}

console.table(customers);


/*
city.board = new ShortestPathBetweenCellsBFS(); 
   let startX = data[]
   let destinationX = data['customers'].coordinates.x;
   let destinationY = data['customers'].coordinates.y;
   city.board.shortestPath(city.board, [startX , startY], [destinationX , destinationY])
*/
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





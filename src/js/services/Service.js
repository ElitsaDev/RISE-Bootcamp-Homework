import CityMap from '../models/CityMap.js';
import Warehouse from '../models/Warehouse.js';
import Customer from '../models/Customer.js';
import checkPointPosition from '../util.js';
import ShortestPathBetweenCellsBFS from '../models/Cell.js';
import fs from 'fs';
import DronType from '../models/DronType.js';

const data = JSON.parse(fs.readFileSync('././db.json', 'utf8'));
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

    let positionOfWarehouse = checkPointPosition(cityDimensionX, cityDimensionY, x, y);
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

    let positionOfCustomer = checkPointPosition(cityDimensionX, cityDimensionY, x, y);
    if (positionOfCustomer) {
        city.populateCity(x, y, 'C');
    } else {
        console.log("Customer is outside of city!");
    }
}

//console.table(city.board);

let customerIdOrdered = [];
let numberOfOrders = data['orders'].length;
let allCustomers = data['customers'];

for (let i = 0; i < numberOfOrders; i++) {
    let currentCustomerId = data['orders'][i].customerId;
    let currentCustomer = Array.from(allCustomers).find(c => c.id == currentCustomerId);

    if (currentCustomer) {
        customerIdOrdered.push(currentCustomerId);
    }
}

let getUniqueCustomersId = [...new Set(customerIdOrdered)];
let deliveringDistance =[];
for (let i = 0; i < getUniqueCustomersId.length; i++) {
    let currentCustomer = Array.from(allCustomers).find(c => c.id == getUniqueCustomersId[i]);
    let board = new ShortestPathBetweenCellsBFS();
    let startX = currentCustomer.coordinates.x;
    let startY = currentCustomer.coordinates.y;

    let minValue = Number.MAX_VALUE;
    for(let j= 0; j< numberOfWarehouses; j++){
        let destinationX = data['warehouses'][j].x;
        let destinationY = data['warehouses'][j].y;
        
        let currentShortestPath = board.shortestPath(city.board, [startX , startY], [destinationX , destinationY]);
        if(currentShortestPath < minValue){
            minValue = currentShortestPath;
        }    
    } 
    deliveringDistance.push({customerId: currentCustomer.id, distance: minValue - 1});
}

let totalTime = 0;
for (let i = 0; i < numberOfOrders; i++) {
    let currentCustomerId = data['orders'][i].customerId;
    let distance = deliveringDistance.find(d => d.customerId == currentCustomerId).distance;
    const pickingTheOrderTime = 5;
    let values = Object.values(data['orders'][i].productList);
    let numberOfDeliveriesForOrder = Math.max(...values); //one single product of every type

    let currentTime = ((pickingTheOrderTime + (distance * 2 - 1)) * numberOfDeliveriesForOrder);
    console.log(currentTime);
    totalTime += currentTime;
}

console.log(`Total time in minutes, needed to deliver all orders: ${totalTime}`);

const minutesPerDay = 720;
let numberOfDrones = 1;

if(totalTime > minutesPerDay){
    numberOfDrones = Math.ceil(totalTime / minutesPerDay); 
    console.log(`Number of drones have to be minimum ${numberOfDrones}, if we want to deliver all products in a single day`)
}else{
    console.log(`All deliveries are made from ${numberOfDrones} drone`);
}

let droneTypesCount = data['typesOfDrones'].length;
let droneTypes = [];
for(let i = 0; i < droneTypesCount; i++){
    let capacity = data['typesOfDrones'][i].capacity;
    let consumption = data['typesOfDrones'][i].consumption;
   
   droneTypes.push(new DronType(capacity, consumption)) ;
}

droneTypes.forEach(d => console.log(d));
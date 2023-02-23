export default  class Customer {
    constructor(id, name, ...coordinates){
        this.id = id;
        this.name = name;
        this.coordinates = {
            x: coordinates[0],
            y: coordinates[1]
        } 
    }  
}

let customer = new Customer(1, 'testName', 2, 7);
console.log(customer.coordinates);

import fs from 'fs';
import path from 'path';

const data = JSON.parse(fs.readFileSync('./db.json', 'utf8'));

export default class Order {
    constructor(customerId, productList ) {
        this.customerId = customerId;
        this.productList = productList;
    }

    save(){
        db.orders.push(this);
        const jsonData = JSON.stringify(db, null, 2);
        fs.writeFile(path.resolve(__dirname, './db.json'), jsonData);
    }
}
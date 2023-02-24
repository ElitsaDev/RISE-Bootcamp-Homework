export default class Warehouse {
    constructor(x , y, name){
        this.x = x;
        this.y = y;
        this.name = name;
        this.products = {}
    } 
    /*
    loadingProducts(products){
        if(products){
            this.products = products;
        }
    }
    */
}

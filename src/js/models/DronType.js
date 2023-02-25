export default class DronType {
    constructor(capacity, consumption) {
        this.capacity = this.set(capacity);
        this.consumption = this.set(consumption);
    }

    set(capacity) {
        return checkUnits(capacity);
    }

    set(consumption) {
        return checkUnits(consumption);
    }
}

function checkUnits(value) {
    if (value.toLowerCase().includes("k")) {
        return Number(value.slice(0, -2)) * 1000;
    } else {
        return Number(value.slice(0, -1));
    }
}

import {inventory} from "../constants/inventory.js";

function calculateOriginalStock(numberOfTVs) {
    let stock = 0;

    for (let i = 0; i < inventory.length; i++) {
        stock = stock + inventory[i].originalStock
    }
    return stock;
}

export default calculateOriginalStock;
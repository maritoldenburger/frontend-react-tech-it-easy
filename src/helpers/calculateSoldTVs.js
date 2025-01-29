import {inventory} from "../constants/inventory.js";

function calculateSoldTVs() {
    let amountSold = 0;

    for (let i = 0; i < inventory.length; i++) {
        amountSold = amountSold + inventory[i].sold
    }
    return amountSold;
}

export default calculateSoldTVs;
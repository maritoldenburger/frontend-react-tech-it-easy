import calculateOriginalStock from "./calculateOriginalStock.js";
import calculateSoldTVs from "./calculateSoldTVs.js";

function calculateTVsToSell() {

    const stock = calculateOriginalStock();
    const amountSold = calculateSoldTVs();

    return stock - amountSold;
}

export default calculateTVsToSell;
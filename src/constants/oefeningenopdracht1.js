import {inventory} from "./inventory.js";

function showOutcomeInConsole() {

//Opdracht 1a

const allTVTypes = inventory.map((inventory) => {
    return inventory.type;
});

console.log(allTVTypes);

// Opdracht 1b

const soldOutProducts = inventory.filter((tv) => {
    return tv.originalStock - tv.sold === 0;
});

console.log(soldOutProducts);

// Opdracht 1c

const specificTV = inventory.find((tv) => {
    return tv.type === "NH3216SMART"
});

console.log(specificTV);

// Opdracht 1d

const suitableForSports = inventory.map((tv) => {
    return { name: `${tv.brand} ${tv.name}`, suitable: tv.refreshRate >= 100 }
});

console.log(suitableForSports);

// Opdracht 1e

const bigTVs= inventory.filter((tv) => {
    const hasBigScreen = tv.availableSizes.find((size) => {
        return size >= 65;
    });

    return hasBigScreen;
});

console.log(bigTVs);

// Opdracht 1f

const ambilightTVs = inventory.filter((tv) => {
    const ambilight = tv.options.find((option) => {
        return option.name === "ambiLight";
    });

    return ambilight.applicable === true;
});

console.log(ambilightTVs);

}

export default showOutcomeInConsole;
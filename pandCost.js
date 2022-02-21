// Problem 2: pandaCost

function pandaCost(singaraQuantity, samosaQuantity, jalebiQuantity) {
    const perSingara = 7;
    const perSamosa = 10;
    const perJalebi = 15;

    const singaraPrice = perSingara * singaraQuantity;
    const samosaPrice = perSamosa * samosaQuantity;
    const jalebiPrice = perJalebi * jalebiQuantity;

    const totalPrice = singaraPrice + samosaPrice + jalebiPrice;

    return totalPrice;
}

const total = pandaCost(1, 1, 1);
console.log(total);
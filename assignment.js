//  Problem 1. -- ana to vori

function anaToVori(ana) {
    const vori = ana / 16;
    return vori;
}

const result = anaToVori(32);
console.log(result);


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

//Problem 3: picnicBudget

function picnicBudget(numberofPerson) {
    if (numberofPerson > 0 && numberofPerson <= 100) {
        const perpersonCost = 5000;
        return perpersonCost;
    }
    else if (numberofPerson > 100 && numberofPerson <= 200) {
        const perpersonCost = 4000;
        return perpersonCost;

    }
    else {
        const perpersonCost = 3000;
        return perpersonCost;
    }
}

const travelCost = picnicBudget(201);
console.log(travelCost);



// Problem 4: oddFriend

function oddFriend(Name) {
    for (var i = 0; i < Name.length; i++) {
        if ((Name[i].length) % i == 1) {
            return Name[i];
        }
    }
}

const friendName = ["Rahman mallick", "Abdul alam", "Khairul Islam", "Zulquar Nain", "Hussain Ali", "Ashfaq Ahmed", "Moshin Ansari", "Fatima"];
oddName = oddFriend(friendName);
console.log(oddName);


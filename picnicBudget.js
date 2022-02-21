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

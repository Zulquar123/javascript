
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








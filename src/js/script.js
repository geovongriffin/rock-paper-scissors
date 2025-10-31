const playerProfile = {
    wins: 0,
    losses: 0,
    ties: 0,
    choices: {
        rock: 0,
        paper: 0,
        scissors: 0
    }
};

const leaderboard = {
    wins: 0,
    losses: 0,
    ties: 0,
};

function playGame() {

    const validOptions = ["R", "P", "S"];

    const computerPick = function() {
        return validOptions[Math.floor(Math.random() * validOptions.length)];
    };

    const invalidMessages = [
        "Not a valid choice. Try again!",
        "Oops! That's not R, P, or S!",
        "I think you can do better than that.",
        "Did you read the instructions?",
        "Nope! Pick R, P, or S please.",
        "That's not gonna work. Let's start over."
    ];

    function getRandomMessage() {
        return invalidMessages[Math.floor(Math.random() * invalidMessages.length)];
    }

    // get and validate player choice
    let playerChoice = "";

    while (!validOptions.includes(playerChoice)) {
        let input = window.prompt("Make your choice! (R, P, or S)");
        if (input === null) {
            window.alert("Thanks for playing!")
            showStats();
            return;
        }
        if (input) {
            playerChoice = input.toUpperCase();
        // show error ONLY if the input is invalid
            if (!validOptions.includes(playerChoice)) {
                window.alert(getRandomMessage());
        }
    }
}
   // cpu choice
    let computerChoice = computerPick();

    function updateProfile(choice, result) {
        if (choice === "R") {
            playerProfile.choices.rock++;
        }
        else if (choice === "P") {
            playerProfile.choices.paper++;
        }
        else if (choice === "S") {
            playerProfile.choices.scissors++;
        }

        if (result === "win") {
            playerProfile.wins++;
        }
        else if (result === "loss") {
            playerProfile.losses++;
        }
        else if (result === "tie") {
            playerProfile.ties++;
        }
    }
    function determineWinner(player, computer) {
        if (player === computer) {
            window.alert("You've tied!");
            return "tie";
        }
        if ((player === "R" && computer === "S") ||
        (player === "P" && computer === "R") ||
        (player === "S" && computer === "P")) {
            window.alert("Victory!");
            return "win";
        }
        else {
            window.alert("Defeat.");
            return "loss";
        }
    }

    let result = determineWinner(playerChoice, computerChoice);
    updateProfile(playerChoice, result);

}

function showStats() {
    const total = playerProfile.wins + playerProfile.losses + playerProfile.ties;

    window.alert(
        "-- Session Statistics -- \n \n" +
        "Total Games: " + total + "\n" +
        "Wins: " + playerProfile.wins + "\n" +
        "Losses: " + playerProfile.losses + "\n" +
        "Ties: " + playerProfile.ties + "\n \n" +
        "Rock: " + playerProfile.choices.rock + "\n" +
        "Paper: " + playerProfile.choices.paper + "\n" +
        "Scissors: " + playerProfile.choices.scissors
    );

}


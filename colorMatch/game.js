var colors = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white", "yellow"];
var finished = false;
var guess_input_color;
var target_index;
var guesses = 0;
var target;

function do_game() {
    target_index = Math.floor(Math.random() * colors.length);
    target = colors[target_index];

    while (!finished) {
        guess_input_color = prompt("I am thinking of one of these color: \n \n" + colors.join() + "\n \n What color am I thinking of?");
        guesses++;
        finished = check_guess();
    }
}

function check_guess() {
    var guess_index = colors.indexOf(guess_input_color);
    if (guess_index == -1 || guess_input_color == "") {
        alert("Sorry, I don't recognize your color. \n\n" + "Please try again.");
        return false;
    }
    if (guess_index < target_index) {
        alert("Sorry, your guess is not correct! \n\n" + "Hint: your color is alphabetically lower than mine. \n\n" + "Please try again.");
        return false;
    }
    if (guess_index > target_index) {
        alert("Sorry, your guess is not correct! \n\n" + "Hint: your color is alphabetically higher than mine. \n\n" + "Please try again.");
        return false;
    }

    myBody = document.getElementsByTagName("body")[0];
    myBody.style.background = target;
    alert("Congratulations! You have guessed the color! \n\n" + "It took you " + guesses + " times to finish the game!\n\n" + "You can see the color in the background.");

    return true;
}
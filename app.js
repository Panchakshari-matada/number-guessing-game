let randomNumber;
        let maxValue;

        function startGame() {
            maxValue = Number(document.getElementById("maxValue").value);
            if (isNaN(maxValue) || maxValue <= 0) {
                alert("Please enter a valid positive number.");
                return;
            }

            randomNumber = Math.floor(Math.random() * maxValue) + 1;
            document.getElementById("maxDisplay").textContent = maxValue;
            document.getElementById("gameArea").style.display = "block";
            document.getElementById("hintMessage").textContent = "";
        }

        function checkGuess() {
            let guess = Number(document.getElementById("guessInput").value);
            let hintMessage = document.getElementById("hintMessage");

            if (isNaN(guess)) {
                hintMessage.textContent = "Please enter a valid number!";
                hintMessage.style.color = "red";
                return;
            }

            if (guess === randomNumber) {
                hintMessage.textContent = `🎉 Congratulations! You guessed the correct number: ${randomNumber}`;
                hintMessage.style.color = "green";
            } else if (guess < randomNumber) {
                hintMessage.textContent = "Hint: Your guess is too low. Try again!";
                hintMessage.style.color = "blue";
            } else {
                hintMessage.textContent = "Hint: Your guess is too high. Try again!";
                hintMessage.style.color = "blue";
            }
        }
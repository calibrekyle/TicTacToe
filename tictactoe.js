let pick = 1;
    let choice = '';
    const buttons = {
      'js-btn1': '', 
      'js-btn2': '',
      'js-btn3': '',
      'js-btn4': '',
      'js-btn5': '',
      'js-btn6': '',
      'js-btn7': '',
      'js-btn8': '',
      'js-btn9': ''
    };

    function pickChoice() {
        const buttonElement = document.querySelector(choice);
        if (buttonElement.innerHTML === '?') {
            if (pick % 2 === 0) {
                buttonElement.innerHTML = 'O';
                buttons[choice.slice(1)] = 'O';
            } else {
                buttonElement.innerHTML = 'X';
                buttons[choice.slice(1)] = 'X';
            }
            buttonElement.classList.add('is-clicked');
            if (checkWinner()) {
                setTimeout(() => {
                    alert(checkWinner() + ' wins!');
                    resetChoice();
                }, 100);
            } else if (pick === 9) {
                setTimeout(() => {
                    alert('It\'s a draw!');
                    resetChoice();
                }, 100);
            }
        }
    }

    function resetChoice() {
        const clickedButtons = document.querySelectorAll('.is-clicked');
        clickedButtons.forEach(button => {
            button.innerHTML = '?';
            button.classList.remove('is-clicked');
        });
        pick = 1;
        for (let key in buttons) {
            buttons[key] = '';
        }
    }

    function checkWinner() {
        const winningCombinations = [
            ['js-btn1', 'js-btn2', 'js-btn3'],
            ['js-btn4', 'js-btn5', 'js-btn6'],
            ['js-btn7', 'js-btn8', 'js-btn9'],
            ['js-btn1', 'js-btn4', 'js-btn7'],
            ['js-btn2', 'js-btn5', 'js-btn8'],
            ['js-btn3', 'js-btn6', 'js-btn9'],
            ['js-btn1', 'js-btn5', 'js-btn9'],
            ['js-btn3', 'js-btn5', 'js-btn7']
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (buttons[a] && buttons[a] === buttons[b] && buttons[a] === buttons[c]) {
                return buttons[b];
            }
        }
        return null;
    }
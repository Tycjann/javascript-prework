{
    const rock = '<i class="fas fa-hand-rock"></i>';
    const paper = '<i class="fas fa-hand-paper"></i>';
    const scissors = '<i class="fas fa-hand-scissors"></i>';

    const msg_lose = '<i class="far fa-frown"></i> Przegrałeś!';
    const msg_tie = '<i class="fas fa-bars"></i> Remis!';
    const msg_win = '<i class="fas fa-crown"></i> Wygrałeś!';

    const movesByNumber = [null, rock, paper, scissors];

    const computerWins = [
        rock + scissors,
        paper + rock,
        scissors + paper
    ];

    let computer_result = 0;
    let player_result = 0;
    let tie_result = 0;
    let games = 0;

    document.getElementById('play_rock').addEventListener('click', function(){
        resultCounter(playGame(1));
    });

    document.getElementById('play_paper').addEventListener('click', function(){
        resultCounter(playGame(2));
    });

    document.getElementById('play_scissors').addEventListener('click', function(){
        resultCounter(playGame(3));
    });
    
    function displayResult(computer_move, player_move) {
        if (computerWins.includes(computer_move + player_move)) {
            printMessage(msg_lose);
            return 'computer';
        }
        if (computer_move == player_move) {
            printMessage(msg_tie);
            return 'tie';
        }
        printMessage(msg_win);
        return 'player';
    }

    function getMoveName(move_id) {
        return movesByNumber[move_id];
    }

    function resultCounter(result) {
        games = games + 1;
        clearMessages('result');
        if (result == 'computer') computer_result = computer_result + 1;
        if (result == 'player') player_result = player_result + 1;
        if (result == 'tie') tie_result = tie_result + 1;
        printResult(games + ' gra: (ja) ' + computer_result + ' : ' + player_result + ' (Ty) :: remisów: ' + tie_result);
    }

    function playGame(player_input) { 

        const random_number = Math.floor(Math.random() * 3 + 1);
        const computer_move = getMoveName(random_number);
        const player_move = getMoveName(player_input);

        clearMessages('messages');
        printMessage('Ja wybrałem: ' + computer_move);
        printMessage('Ty wybrałeś: ' + player_move);
        return displayResult(computer_move, player_move);
    }
}
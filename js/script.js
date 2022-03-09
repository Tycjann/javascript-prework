
{
    

    function playGame(player_input) { 
        
        const rock = '<i class="fas fa-hand-rock"></i>';
        const paper = '<i class="fas fa-hand-paper"></i>';
        const scissors = '<i class="fas fa-hand-scissors"></i>';
        const msg_lose = '<i class="far fa-frown"></i> Przegrałeś!';
        const msg_tie = '<i class="fas fa-bars"></i> Remis!';
        const msg_win = '<i class="fas fa-crown"></i> Wygrałeś!';

        function displayResult(computer_move, player_move) {

            if (computer_move == rock && player_move == scissors) {
                printMessage(msg_lose);
                return 'computer';
            }
            else if (computer_move == paper && player_move == rock) {
                printMessage(msg_lose);
                return 'computer';
            }
            else if (computer_move == scissors && player_move == paper) {
                printMessage(msg_lose);
                return 'computer';
            }
            else if (computer_move == player_move) {
                printMessage(msg_tie);
                return 'tie';
            }
            else {
                printMessage(msg_win);
                return 'player';
            }
        }

        function getMoveName(move_id) {
            if(move_id == 1){
                return rock;
            } 
            else if(move_id == 2) {
                return paper;
            }
            else if(move_id == 3) {
                return scissors;
            }
        }

        let random_number = Math.floor(Math.random() * 3 + 1);
        let computer_move = getMoveName(random_number);
        let player_move = getMoveName(player_input);

        clearMessages('messages');
        printMessage('Ja wybrałem: ' + computer_move);
        printMessage('Ty wybrałeś: ' + player_move);
        
        let result = displayResult(computer_move, player_move);
        
        return result;
    }

    let computer_result = 0;
    let player_result = 0;
    let tie_result = 0;
    let games = 0;

    document.getElementById('play_rock').addEventListener('click', function(){
        let result = playGame(1);

        clearMessages('result');

        if (result == 'computer') computer_result = computer_result + 1;
        if (result == 'player') player_result = player_result + 1;
        if (result == 'tie') tie_result = tie_result + 1;
        games = games + 1;
        printResult(games + ' gra: (ja) ' + computer_result + ' : ' + player_result + ' (Ty) :: remisów: ' + tie_result);
    });

    document.getElementById('play_paper').addEventListener('click', function(){
        let result = playGame(2);

        clearMessages('result');

        if (result == 'computer') computer_result = computer_result + 1;
        if (result == 'player') player_result = player_result + 1;
        if (result == 'tie') tie_result = tie_result + 1;
        games = games + 1;
        printResult(games + ' gra: (ja) ' + computer_result + ' : ' + player_result + ' (Ty) :: remisów: ' + tie_result);
    });

    document.getElementById('play_scissors').addEventListener('click', function(){
        let result = playGame(3);

        clearMessages('result');

        if (result == 'computer') computer_result = computer_result + 1;
        if (result == 'player') player_result = player_result + 1;
        if (result == 'tie') tie_result = tie_result + 1;
        games = games + 1;
        printResult(games + ' gra: (ja) ' + computer_result + ' : ' + player_result + ' (Ty) :: remisów: ' + tie_result);
    });
}


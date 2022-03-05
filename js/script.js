
function playGame(player_input) { 

    clearMessages('messages');

    function getMoveName(move_id) {
        if(move_id == 1){
            return '<i class="fas fa-hand-rock"></i>';
        } 
        else if(move_id == 2) {
            return '<i class="fas fa-hand-paper"></i>';
        }
        else if(move_id == 3) {
            return '<i class="fas fa-hand-scissors"></i>';
        }
    }

    function displayResult(computer_move, player_move) {

        if (computer_move == '<i class="fas fa-hand-rock"></i>' && player_move == '<i class="fas fa-hand-scissors"></i>') {
            printMessage('<i class="far fa-frown"></i> Przegrałeś!');
            return 'computer';
        }
        else if (computer_move == '<i class="fas fa-hand-paper"></i>' && player_move == '<i class="fas fa-hand-rock"></i>') {
            printMessage('<i class="far fa-frown"></i> Przegrałeś!');
            return 'computer';
        }
        else if (computer_move == '<i class="fas fa-hand-scissors"></i>' && player_move == '<i class="fas fa-hand-paper"></i>') {
            printMessage('<i class="far fa-frown"></i> Przegrałeś!');
            return 'computer';
        }
        else if (computer_move == player_move) {
            printMessage('<i class="fas fa-bars"></i> Remis!');
            return 'tie';
        }
        else {
            printMessage('<i class="fas fa-crown"></i> Wygrałeś!');
            return 'player';
        }
    }

    let random_number = Math.floor(Math.random() * 3 + 1);
    let computer_move = getMoveName(random_number);
    let player_move = getMoveName(player_input);

    // console.log('Wylosowana liczba to: ' + random_number);
    // console.log('Gracz wpisał: ' + player_input);
    
    printMessage('Ja wybrałem: ' + computer_move);
    printMessage('Ty wybrałeś: ' + player_move);
    
    let result = displayResult(computer_move, player_move);
    
    // console.log('Ruchy:', computer_move, player_move);
    
    return result;
}

let computer_result = 0;
let player_result = 0;
let tie_result = 0;
let games = 0;

document.getElementById('play_rock').addEventListener('click', function(){
    let result = playGame(1);

    // console.clear();
    // console.log('Wynik:', result);

    clearMessages('result');
    if (result == 'computer') computer_result = computer_result + 1;
    if (result == 'player') player_result = player_result + 1;
    if (result == 'tie') tie_result = tie_result + 1;
    games = games + 1;
    printResult(games + ' gra: (ja) ' + computer_result + ' : ' + player_result + ' (Ty) :: remisów: ' + tie_result);
});

document.getElementById('play_paper').addEventListener('click', function(){
    let result = playGame(2);

    // console.clear();
    // console.log('Wynik:', result);

    clearMessages('result');
    if (result == 'computer') computer_result = computer_result + 1;
    if (result == 'player') player_result = player_result + 1;
    if (result == 'tie') tie_result = tie_result + 1;
    games = games + 1;
    printResult(games + ' gra: (ja) ' + computer_result + ' : ' + player_result + ' (Ty) :: remisów: ' + tie_result);
});

document.getElementById('play_scissors').addEventListener('click', function(){
    let result = playGame(3);

    // console.clear();
    // console.log('Wynik:', result);

    clearMessages('result');
    if (result == 'computer') computer_result = computer_result + 1;
    if (result == 'player') player_result = player_result + 1;
    if (result == 'tie') tie_result = tie_result + 1;
    games = games + 1;
    printResult(games + ' gra: (ja) ' + computer_result + ' : ' + player_result + ' (Ty) :: remisów: ' + tie_result);
});

function playGame(player_input) { 

    clearMessages();

    function getMoveName(move_id) {
        if(move_id == 1){
            return 'kamień';
        } 
        else if(move_id == 2) {
            return 'papier';
        }
        else if(move_id == 3) {
            return 'nożyce';
        }
        else {
            // printMessage('Nie znam ruchu o id ' + move_id + '.');
            return 'nieznany ruch';
        }
    }

    function displayResult(computer_move, player_move) {

        if (computer_move == 'kamień' && player_move == 'papier') {
            printMessage('Ty wygrywasz!');
        }
        else if (computer_move == 'nożyce' && player_move == 'kamień') {
            printMessage('Ty wygrywasz!');
        }
        else if (computer_move == 'papier' && player_move == 'nożyce') {
            printMessage('Ty wygrywasz!');
        }
        else if (computer_move == player_move) {
            printMessage('Super! Remis!');
        }
        else if (player_move == 'nieznany ruch') {
            printMessage('Błąd: Gracz podał zły zakres. Jeszcze raz.');
        }
        else {
            printMessage('Przegrałeś!');
        }
    }

    let random_number = Math.floor(Math.random() * 3 + 1);
    // let player_input = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Wylosowana liczba to: ' + random_number);
    console.log('Gracz wpisał: ' + player_input);

    let computer_move = getMoveName(random_number);
    let player_move = getMoveName(player_input);

    printMessage('Mój ruch to: ' + computer_move);
    printMessage('Twój ruch to: ' + player_move);

    let result = displayResult(computer_move, player_move);

    console.log('Ruchy:', computer_move, player_move);
}

document.getElementById('play_rock').addEventListener('click', function(){
    playGame(1);
});

document.getElementById('play_paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play_scissors').addEventListener('click', function(){
    playGame(3);
});
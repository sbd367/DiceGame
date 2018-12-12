/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
$(document).ready(() => {
    let global = [0, 0]
    let scores = [0, 0];
    let activePlayer = 0;

    $('.btn-new').click(() => {
        $('.player-score').text(0)
        $('.player-current-score').text(0)
        scores = [0, 0]
        global = [0, 0]
    })

    $('.btn-hold').click(() =>{
        if(activePlayer === 0){
            global = [ global[0] += scores[0], global[1] ];
            scores = [0, scores[0]];
            changePlayers();
        }else{
            global = [ global[0], global[1] += scores[1]];
            scores = [scores[0], 0];
            changePlayers();
        }
    })

    function changePlayers(){
        if(activePlayer === 0){
            $('#score-0').text(global[0])
            $('.player-0-panel').attr('class', 'player-0-panel active')
            $('.player-1-panel').attr('class', 'player-1-panel')
            activePlayer = 1;
        }
        else{
            activePlayer = 0;
            $('#score-1').text(global[1])
            $('.player-0-panel').attr('class', 'player-0-panel')
            $('.player-1-panel').attr('class', 'player-1-panel active')
        }
    }

    $('.btn-roll').click(() => {

        randomNumber = Math.floor(Math.random() * 6 + 1)


        switch(randomNumber){
            case 1:

            $('.dice').attr("src", "./dice-1.png")

            if(activePlayer === 0){
                alert("Dang you lost hella points its player 2s turn now")
                scores = [0, scores[1]];
                activePlayer = 1;
            }
            else{
                alert("Dang you lost hella points its player 1s turn now")
                scores = [scores[0], 0];
                activePlayer = 0;
            }

                break;

            case 2:
                $('.dice').attr("src", "./dice-2.png")

                break;

            case 3:
                $('.dice').attr("src", "./dice-3.png")
                break;

            case 4:
                $('.dice').attr("src", "./dice-4.png")
                break;

            case 5:
                $('.dice').attr("src", "./dice-5.png")
                break;

            case 6:
                $('.dice').attr("src", "./dice-6.png")
                break;
                    
        }

        if(activePlayer === 0){

            scores = [scores[0] += randomNumber, scores[1]];

            $('#current-0').text(scores[0]);

            if(scores[0] >= 100){
                 alert('Player 1 wins!')   
            }
            else{
                $('#score-0').text(global[0])
            }
            
        }
        
        else {

            scores = [scores[0], scores[1] += randomNumber];
            $('#current-1').text(scores[1]);

            if( scores[1] >= 100 ){
                 alert('Player 2 wins!')   
            }
            else{
                $('#score-1').text(global[1])
            }
        }
        console.log("score " + scores)
        console.log("global score " + global)
    })
});

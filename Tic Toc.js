


let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
let megy = true;
let O = 0;
function TicTac(event) {
    if (megy) {
        
    
    const clickedDivId = event.target.id;
    console.log(clickedDivId);
    let katintott = document.getElementById(clickedDivId);
    let katintott_szam = parseInt(clickedDivId, 10);
    console.log(katintott_szam);
    let sor = Math.ceil(katintott_szam / 3) - 1; // tördel
    let oszlop = katintott_szam % 3 - 1;
    
    console.log(board);
    if (katintott.innerHTML == "") {
        O++;

        if (O % 2 == 0) {
            document.getElementById(clickedDivId).innerHTML = "O";
        }
        else {
            document.getElementById(clickedDivId).innerHTML = "X";
        }
        if (O == 9) {
            document.getElementById("helyzet").innerHTML = "A játék döntetlen.";
            megy = false
        }
        board[sor].splice(oszlop, 1, katintott.innerHTML);


        for (let row = 0; row < 3; row++) {
            //sor oszlop
                if (board[row][0] == 'X' && board[row][1] == 'X' && board[row][2] == 'X') {
                    document.getElementById("helyzet").innerHTML = "X játékos nyert.";
                    megy = false
                }
                if(board[row][0] == 'O' && board[row][1] == 'O' && board[row][2] == 'O') {
                    document.getElementById("helyzet").innerHTML = "O játékos nyert.";
                    megy = false
                }
                if (board[0][row] == 'X' && board[1][row] == 'X' && board[2][row] == 'X') {
                    document.getElementById("helyzet").innerHTML = "X játékos nyert.";
                    megy = false
                }
                if(board[0][row] == 'O' && board[1][row] == 'O' && board[2][row] == 'O') {
                    document.getElementById("helyzet").innerHTML = "O játékos nyert.";
                    megy = false
                }

                //atlo
                if (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') {
                    document.getElementById("helyzet").innerHTML = "X játékos nyert.";
                    megy = false
                }
                if(board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') {
                    document.getElementById("helyzet").innerHTML = "O játékos nyert.";
                    megy = false
                }
                if (board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X') {
                    document.getElementById("helyzet").innerHTML = "X játékos nyert.";
                    megy = false
                }
                if(board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O') {
                    document.getElementById("helyzet").innerHTML = "O játékos nyert.";
                    megy = false
                }
                
            
        }
    }
    }
}
function Restart() {
    megy = true;
    const divek = document.querySelectorAll(".ertek");
    divek.forEach(elem => {
        elem.innerHTML = "";
    })
    O = 0;
    helyzet.innerHTML = "";
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
}
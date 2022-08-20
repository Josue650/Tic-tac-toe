let squares = document.querySelectorAll('.square')
console.log(squares)
let player = ''
function checkForWinner(){
    let winCondition =[
        [squares[0],squares[1],squares[2]],
        [squares[3],squares[4],squares[5]],
        [squares[6],squares[7],squares[8]],
        [squares[0],squares[3],squares[6]],
        [squares[1],squares[4],squares[7]],
        [squares[2],squares[5],squares[8]],
        [squares[0],squares[4],squares[8]],
        [squares[2],squares[4],squares[6]]
    ]
    for (let i=0; i<winCondition.length; i++){
        if (winCondition[i][0].textContent === 'X' && winCondition[i][1].textContent === 'X' && winCondition[i][2].textContent === 'X'){
            document.querySelector('#scoreboard').textContent ='X is the Winner'
        } else if (winCondition[i][0].textContent === 'O' && winCondition[i][1].textContent === 'O' && winCondition[i][2].textContent === 'O'){
            document.querySelector('#scoreboard').textContent ='O is the Winner'
        }
    }
}


squares.forEach(element => {
    element.addEventListener('click', function() {
        if (player !== 'X' && player !== 'O'){
            alert("Select starting player!!")
            return
        }else
        //Marks box only if box has not been marked
        if (element.textContent === ''){
        element.textContent = player
        element.classList.add('blue')
        console.log(element.classList)
        checkForWinner()
        } else return
        //Switches to next player
        if (player === 'X'){
            player = 'O'
        }else
            player = 'X'
    })
})


//X Starts Button
function xStarts() {
    player = 'X'
    clearBoard()
}
//O Starts Button
function oStarts() {
    player = 'O'
    clearBoard()
}


//Clear Board Button Function
function clearBoard() {
    squares.forEach(element => {
        element.textContent = ''
    })
}

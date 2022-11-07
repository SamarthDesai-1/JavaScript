// let computer_turn = Math.floor(Math.random() * 100)
// console.log(computer_turn);

for (let i = 1; i <= 5; i++) {
    const game = () => {

        const result = (c ,u) => {
            if (c == 's' && u == 'w') {
                console.log("Computer win");
            }
            else if (c == 'w' && u == 'g') {
                console.log("Computer win");
            }
            else if (c == 'g' && u == 's') {
                console.log("Computer win");
            }
            else {
                console.log("User win");
            }
        }

        const computer = () => {
            let Cturn = Math.floor(Math.random() * 3)
            console.log(Cturn);
            let user = prompt("Enter snake ,water or gun : ");
            if (Cturn == 0) {
                Cturn = 's';
                result(Cturn ,user);
                console.log(Cturn);
            }
            else if (Cturn == 1) {
                Cturn = 'w';
                result(Cturn ,user);
                console.log(Cturn);
            }
            else {
                Cturn = 'g';
                result(Cturn ,user);
                console.log(Cturn);
            }
        }
        computer();
    
    }
    game();
}

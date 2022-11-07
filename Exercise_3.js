const joke = () => {  
    let random = Math.floor(Math.random() * 100);
    let array = [`Why did an old man fall in a well?
    Because he couldn’t see that well!` ,

        `Why did the actor fall through the floorboards?
    They were going through a stage!`   ,

        `Why did a scarecrow win a Nobel prize?
    He was outstanding in his field!`   ,

        `Why are peppers the best at archery?
    Because they habanero!` ,

        `What did the duck say after she bought chapstick?
    Put it on my bill!` ,

        `What do you call a fake noodle?
    An impasta!`    ,

        `What did the three-legged dog say when he walked into a saloon?
    “I’m looking for the man who shot my paw!”` ,

        `How do you tell the difference between a bull and a cow?
    It is either one or the udder!` ,

        `What’s red and smells like blue paint?
    Red paint!` ,

        `What’s the difference between a hippo and a Zippo?
    One is very heavy, the other is a little lighter!`]

    
    if (random >= 0 && random <= 10) {
        document.getElementById('print').innerHTML = array[0];
    }
    else if (random >= 10 && random <= 20) {
        document.getElementById('print').innerHTML = array[1]
    }
    else if (random >= 20 && random <= 30) {
        document.getElementById('print').innerHTML = array[2];
    }
    else if (random >= 30 && random <= 40) {
        document.getElementById('print').innerHTML = array[3];
    }
    else if (random >= 40 && random <= 50) {
        document.getElementById('print').innerHTML = array[4];
    }
    else if (random >= 50 && random <= 60) {
        document.getElementById('print').innerHTML = array[5];
    }
    else if (random >= 60 && random <= 70) {
        document.getElementById('print').innerHTML = array[6];
    }
    else if (random >= 70 && random <= 80) {
        document.getElementById('print').innerHTML = array[7];
    }
    else if (random >= 80 && random <= 90) {
        document.getElementById('print').innerHTML = array[8];
    }
    else {
        document.getElementById('print').innerHTML = array[9];
    }
}
joke();


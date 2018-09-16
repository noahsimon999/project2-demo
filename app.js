var player1 = {
    health: 100,
    attack: 10,
    defense: 5,
    critHit: 25
}

var player2 = {
    health: 100,
    attack: 10,
    defense: 5,
    critHit: 25
}


$(".fight").click(function() {
    var p1DiceRoll = Math.ceil(Math.random()*6);
    var p2DiceRoll = Math.ceil(Math.random()*6);
    if (player1.health > 0 && player2.health > 0) {
        $(".crit").hide();
        if (p1DiceRoll > p2DiceRoll) {
            if (Math.random() < .1) {
                player2.health = player2.health - (player1.critHit - player2.defense);
                $(".crit").show();
                $(".crit").text("Player 1 scores a critical hit!");
            }
            player2.health = player2.health - (player1.attack - player2.defense);
            $(".p2health").text("health: " + player2.health)
        } else {
            if (Math.random() < .1) {
                player1.health = player1.health - (player2.critHit - player1.defense);
                $(".crit").show();
                $(".crit").text("Player 2 scores a critical hit!");
            }
            player1.health = player1.health - (player2.attack - player1.defense);
            $(".p1health").text("health: " + player1.health)
        }
        $(".dice1").html("<h1>Roll: " + p1DiceRoll + "</h1>");
        $(".dice2").html("<h1>Roll: " + p2DiceRoll + "</h1>");
    } else {
        $(".fight").hide()
    }
})



basic.forever(function () {
    if (Math.randomBoolean()) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        for (let index = 0; index < 2; index++) {
            music.playMelody("C5 C A C B C F C ", 218)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        for (let index = 0; index < 2; index++) {
            music.playMelody("F E D E C D F C ", 82)
        }
    }
    if (input.buttonIsPressed(Button.A)) {
        game.addScore(100000000)
        game.gameOver()
    }
    if (input.buttonIsPressed(Button.A)) {
        game.setScore(1000000000)
        game.gameOver()
    }
})

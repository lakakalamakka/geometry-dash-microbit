input.onButtonPressed(Button.A, function () {
    y = 2
    basic.pause(800)
    y = 4
})
let spike: game.LedSprite = null
let x = 0
let y = 0
let lost = 0
y = 4
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # # # # #
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # # # # #
    # . # . #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    . . . # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    . # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
basic.clearScreen()
basic.showString("GD")
basic.showLeds(`
    . . # # #
    . # . . .
    . # . # .
    . # . . .
    . . # # #
    `)
basic.showLeds(`
    . # # # #
    # . . . .
    # . # . .
    # . . . .
    . # # # #
    `)
basic.showLeds(`
    # # # # #
    . . . . .
    . # . . .
    . . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    . . . . .
    # . . . #
    . . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    . . . . .
    . . . # .
    . . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # .
    . . . . #
    . . # . #
    . . . . #
    # # # # .
    `)
basic.showLeds(`
    # # # . .
    . . . # .
    . # . # .
    . . . # .
    # # # . .
    `)
let sprite = game.createSprite(1, y)
basic.forever(function () {
    if (0 == x) {
        x = 4
    } else {
        basic.pause(700)
        x += -1
        basic.pause(700)
    }
})
basic.forever(function () {
    if (lost == 0) {
        spike = game.createSprite(x, 4)
        basic.pause(0.1)
        spike.delete()
    }
})
basic.forever(function () {
    if (sprite.isTouching(spike)) {
        lost = 1
        sprite.delete()
        spike.delete()
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            . # . # .
            `)
        basic.clearScreen()
        basic.showString("BOOM!")
        basic.clearScreen()
        game.gameOver()
    }
})

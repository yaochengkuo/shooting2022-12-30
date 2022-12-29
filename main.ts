input.onButtonPressed(Button.A, function () {
    主角.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    子彈 = game.createSprite(主角.get(LedSpriteProperty.X), 主角.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        子彈.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    子彈.delete()
})
input.onButtonPressed(Button.B, function () {
    主角.change(LedSpriteProperty.X, 1)
})
let 子彈: game.LedSprite = null
let 主角: game.LedSprite = null
game.setScore(0)
主角 = game.createSprite(2, 4)
let 飛機 = game.createSprite(0, 0)
子彈 = game.createSprite(4, 4)
子彈.set(LedSpriteProperty.Brightness, 0)
basic.forever(function () {
    if (飛機.isTouching(主角)) {
        game.gameOver()
    }
})
basic.forever(function () {
    basic.pause(500)
    飛機.change(LedSpriteProperty.X, 1)
    if (飛機.get(LedSpriteProperty.X) == 4) {
        basic.pause(500)
        飛機.set(LedSpriteProperty.X, 0)
        飛機.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (子彈) {
        if (子彈.isTouching(飛機)) {
            game.addScore(1)
            飛機.set(LedSpriteProperty.X, 0)
            飛機.set(LedSpriteProperty.Y, 0)
        }
    }
})

function Show_XY (xx: number, yy: number) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let Ys = 0; Ys <= 4; Ys++) {
        for (let Xs = 0; Xs <= 4; Xs++) {
            led.plotBrightness(Xs, Ys, 10 * Find_Spot(Xs + xx, Ys + yy))
        }
    }
}
input.onGesture(Gesture.LogoUp, function () {
    Y += -1
    if (Y < 0) {
        Y = D
    }
    Show_XY(X, Y)
})
function Find_Spot (Xl: number, Yl: number) {
    return Uni[(Xl + Yl * D + 0) % Full]
}
input.onGesture(Gesture.TiltLeft, function () {
    X += -1
    if (X < 0) {
        X = D
    }
    Show_XY(X, Y)
})
function flash () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onGesture(Gesture.TiltRight, function () {
    X += 1
    if (X > 4) {
        X = D - 0
    }
    Show_XY(X, Y)
})
input.onGesture(Gesture.LogoDown, function () {
    Y += 1
    if (Y > D) {
        Y = 0
    }
    Show_XY(X, Y)
})
function BuildUni (Diam: number) {
    flash()
    Uni = []
    for (let index = 0; index < Diam * Diam; index++) {
        if (6 < randint(0, 10)) {
            Uni.push(randint(1, 9))
        } else {
            Uni.push(0)
        }
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    BuildUni(D)
})
let Uni: number[] = []
let X = 0
let Y = 0
let Full = 0
let D = 0
D = 20
Full = D * D
BuildUni(D)
Y = 0
X = 0
Show_XY(X, Y)

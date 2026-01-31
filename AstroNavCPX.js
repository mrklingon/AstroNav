function ShoStars(j: number, k: number) {
    spot = j + k * D
    nspot = spot
    for (let pixel of lspots) {
        light.setPixelColor(pixel, stars[cosmos[nspot]])
        nspot = nspot + D
    }
    nspot = spot
    nspot += 1
    for (let pixel of rspots) {
        light.setPixelColor(pixel, stars[cosmos[nspot]])
        nspot = nspot + D
    }
}
function mkUni(diam: number) {
    light.showAnimation(light.rainbowAnimation, 500)
    cosmos = []
    for (let i = 0; i < diam * diam; i++) {
        if (7 > Math.randomRange(0, 10)) {
            cosmos.push(Math.randomRange(1, 4))
        } else {
            cosmos.push(0)
        }
    }
    light.setAll(0x000000)
}
input.onGesture(Gesture.TiltRight, function () {
    x += 1
    if (x >= D - 1) {
        x = 0
    }
    ShoStars(x, y)
})
input.onGesture(Gesture.TiltLeft, function () {
    x += -1
    if (x < 0) {
        x = D - 2
    }
    ShoStars(x, y)
})
input.onGesture(Gesture.TiltDown, function () {
    y += 1
    if (y >= D - 1) {
        y = 0
    }
    ShoStars(x, y)
})
input.onGesture(Gesture.TiltUp, function () {
    y += -1
    if (y < 0) {
        y = D - 2
    }
    ShoStars(x, y)
})
input.onGesture(Gesture.Shake, function () {
    x = Math.randomRange(5, 10)
    y = Math.randomRange(5, 10)
    ShoStars(x, y)
})
let cosmos: number[] = []
let nspot = 0
let spot = 0
let rspots: number[] = []
let lspots: number[] = []
let stars: number[] = []
let y = 0
let x = 0
let D = 0
D = 20
x = 0
y = 0
stars = [Colors.Black, Colors.White, Colors.Blue, Colors.Yellow, Colors.Green]
mkUni(D)
lspots = [0, 1, 2, 3, 4]
rspots = [9, 8, 7, 6, 5]
ShoStars(x, y)
forever(function () {
    if (input.switchRight()) {
        for (let i = 0; i < 10; i++) {
            y += 1
            ShoStars(x, y)
            pause(100)
        }
        for (let i = 0; i < 10; i++) {
            y += -1
            ShoStars(x, y)
            pause(100)
        }
    }
})

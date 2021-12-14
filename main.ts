input.onGesture(Gesture.TiltLeft, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
})
input.onGesture(Gesture.ScreenUp, function () {
    strip.clear()
    strip.show()
})
input.onGesture(Gesture.TiltRight, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)

input.onButtonPressed(Button.A, function () {
    vstup = "" + vstup + "a"
})
input.onGesture(Gesture.ScreenUp, function () {
    while (opakuj == 0) {
        basic.showIcon(IconNames.Surprised)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 4718, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.showIcon(IconNames.Angry)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    vstup = "" + vstup + "b"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("DEL")
    vstup = ""
})
let vstup = ""
let opakuj = 0
opakuj = 0
let heslo = "abbabba"
let heslo_vypni = "bbab"
basic.forever(function () {
    if (heslo == vstup) {
        control.reset()
    }
    if (heslo_vypni == vstup) {
        opakuj = 1
    }
})

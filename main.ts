input.onButtonPressed(Button.A, function () {
    informatiktheater.setPwmServo(informatiktheater.ServoIndex.S1, 5, 100)
})
input.onButtonPressed(Button.B, function () {
    informatiktheater.setPwmServo(informatiktheater.ServoIndex.S1, 160, 100)
})
basic.showString("Servo")
informatiktheater.setPwmServo(informatiktheater.ServoIndex.S1, 90, 5000)

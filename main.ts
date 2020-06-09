input.onButtonPressed(Button.A, function () {
    A_Pressed = A_Pressed + 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(A_Pressed)
})
let A_Pressed = 0
A_Pressed = 0

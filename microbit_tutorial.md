# microbit_tutorial

## Step 1

First, create a variable named ``||A_pressed||``.

## Step 2

Pick the ``||basic:on start||`` block. Then place the ``||variable:set A_Pressed ||`` to ``||math.0||`` inside ``||basic:on start||`` block.

```blocks
let A_Pressed = 0
```

## Step 3

Then use ``||input.on button pressed||`` block to ``||variable:set A_Pressed||`` to ``||math.A_Pressed + 1||``  for Button ``||input.A||``.

```blocks
input.onButtonPressed(Button.A, function () {
    A_Pressed = A_Pressed + 1
})  
```

## Step 4

Then use ``||input.on button pressed||`` block to ``||basic.show number||`` ``||variable.A_Pressed||`` for Button ``||input.B||``.

```blocks
input.onButtonPressed(Button.B, function () {
    basic.showNumber(A_Pressed)
})
```

## Step 5

Final Appearance.

```blocks
input.onButtonPressed(Button.A, function () {
    A_Pressed = A_Pressed + 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(A_Pressed)
})
let A_Pressed = 0
A_Pressed = 0
```
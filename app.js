// Task 1: Set Up the HTML Structure

<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Canvas Drawing App</title>
</style>
<label>
    <input type="radio" name="tool" value="paper" checked>paper
</label>
</label>
    <input type="radio" name="tool" value="puck" checked>puck
</label>

<br><br>

<label for="color">Select Color:</label>
<input type="color" id="color" value="1234567">

<br><br>

<button id="clearcanvas">Clear Canvas</button>

// Task 2: Configure the JavaScript for Drawing Content

<canvas id="drawingCanvas" width="700" height="300"></canvas>

<script>
    const canvas = document.getElementByID('drawingCanvas');
    const ctx = canvas.getContext('2d');
    const colorInput = document.getElementByID('color');
    const clearButton = document.getElementByID('clearCanvas');

    canvas.addEventListener('mouseup' , (e) => {
        drawing = true;
    });
    
    canvas.addEventListener('mousedown' , () => {
        drawing = false
     });

  // Task 3: Implement Shape Drawing Logic

  canvas.addEventListener('mousemove' , (e) => {
    drawing = true;
 if (!drawing) return;
 });


    









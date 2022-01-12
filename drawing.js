let text =document.getElementById("lines_text");
let button = document.getElementById("paint_button");
button.addEventListener("click", drawLineByClick);

let can = document.getElementById("drawing");
let drawingArea = can.getContext("2d");
let canWidth = can.width;

function drawLine(color, xInitial, yInitial, xFinal, yFinal){
    drawingArea.beginPath();
    drawingArea.strokeStyle = color;
    drawingArea.moveTo(xInitial, yInitial);
    drawingArea.lineTo(xFinal, yFinal);
    drawingArea.stroke();
    drawingArea.closePath();
}

function drawLineByClick(){
    drawingArea.clearRect(0, 0, can.width, can.height);
    let totalLines = parseInt(text.value);
    let lines = 0;
    let yi, xf;
    let col = "#102c54";
    let lines_space = canWidth / totalLines;
    let realCanWidth = canWidth - 1;
    drawLine(col, 1, 1, 1, realCanWidth);
    drawLine(col, 1, realCanWidth, realCanWidth, realCanWidth);  
    drawLine(col, 1, 1, realCanWidth, 1);
    drawLine(col, realCanWidth, 1, realCanWidth, realCanWidth); 
   
    for(lines = 0; lines < totalLines; lines++){
        yi = lines_space * lines;
        xf = lines_space * (lines + 1);
        drawLine(col, 0, yi, xf, canWidth);
        console.log("Linea " + lines);
    }
    for(lines = 0; lines < totalLines; lines++){
        yi = canWidth - (lines * lines_space);
        xf = canWidth - (lines_space * (lines + 1));
        drawLine(col, canWidth, yi, xf, 0);
    }
    text.value = "";
}

function drawPoint(context, x, y, color, size) {
    if (color == null) {
      color = '#000';
  }
  if (size == null) {
      size = 5;
  }

    // to increase smoothing for numbers with decimal part
    var pointX = Math.round(x);
  var pointY = Math.round(y);

  context.beginPath();
  context.fillStyle = color;
  context.arc(pointX, pointY, size, 0 * Math.PI, 2 * Math.PI);
  context.fill();

}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

var amountOfClickedPoints = 0;

function drawOnClick(event) {
    amountOfClickedPoints++;
    var canvas = document.querySelector('#myCanvas');
    
    if (amountOfClickedPoints == 3)  {
        //clearCanvas(canvas);
        amountOfClickedPoints = 0;
    }
    
    
    var pos = getMousePos(canvas, event)

    var context = canvas.getContext('2d');
    drawPoint(context, pos.x, pos.y, 'black', 3);
}

function clearCanvas(canvas) {
    
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
}

function randomPoints(amountOfPoints) {
    for (i = 0; i < amountOfPoints; i++) {
        var x = getRandomInt(0, 501);
        var y = getRandomInt(0, 501);

        var canvas = document.querySelector('#myCanvas');
        var context = canvas.getContext('2d');
        drawPoint(context, x, y, 'black', 3);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
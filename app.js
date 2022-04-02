function changeSquare() {
    var cell = document.getElementById(this.id);
 		//var image = document.getElementById("image2,2");
    // If image is currently green square, change to red, and vice versa

    if (cell.style.backgroundColor.match("white")) {
        cell.style.backgroundColor = "#1e1e1e"
    } else {
        cell.style.backgroundColor = "white"
    }
    
};

function printInfo(inputImage) {
    document.getElementById("info").innerHTML = "Info:" + inputImage + "<br /> <br /> <br />";
};

//Creates a grid of dimensions width by height
function makeGrid(height, width) {

    // Loop over height and width to create black square objects with
    // buttons in middle
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {

            // Outer div is black square
            var div = document.createElement("div");
            div.className = "square";
            div.id = ("cell").concat(i,",", j);

            var innerDiv0 = document.createElement("div");
            innerDiv0.className = "content";
            div.id = ("innerDiv0").concat(i,",", j);
            div.appendChild(innerDiv0);

            // InnerDiv1 & 2 are table structures (necessary for alignment)
            var innerDiv1 = document.createElement("div");
            innerDiv1.className = "table";
            div.id = ("innerDiv1").concat(i,",", j);
            innerDiv0.appendChild(innerDiv1);

            var innerDiv2 = document.createElement("div");
            innerDiv2.className = "table-cell";
            div.id = ("innerDiv2").concat(i,",", j);
            innerDiv1.appendChild(innerDiv2);

            document.getElementById("par").appendChild(div);

            // Add onclick feature. I've tried using different methods
            // and putting it above the appendChild line, but nothing seems
            // to work.
            div.onclick = changeSquare;
        }
    }
};

function setColor(x, y, color) {
    var id = ("cell").concat(x,",", y);
    var cell = document.getElementById(id);

    cell.style.backgroundColor = color
}

makeGrid(100, 100);
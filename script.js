var cities = [];
var totalCities = 10;

var recordDistance;
var bestEver;

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('container'); // Posiziona il canvas all'interno del div con id 'container'

    for (var i = 0; i < totalCities; i++) {
        var v = createVector(random(width), random(height));
        cities[i] = v;
    }

    var d = calcDistance(cities);
    recordDistance = d;
    bestEver = cities.slice();
}

function draw() {
    background('aliceblue'); // Sfondo dello stesso colore della pagina

    // Calcola e disegna il percorso migliore
    stroke(0);
    strokeWeight(1);
    noFill();
    beginShape();
    for (var i = 0; i < cities.length; i++) {
        vertex(bestEver[i].x, bestEver[i].y);
    }
    endShape();

    // Disegna le città
    fill(0);
    for (var i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }

    // Calcola e aggiorna il percorso
    var i = floor(random(cities.length));
    var j = floor(random(cities.length));
    swap(cities, i, j);

    var d = calcDistance(cities);
    if (d < recordDistance) {
        recordDistance = d;
        bestEver = cities.slice();
    }
}

function swap(a, i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function calcDistance(points) {
    var sum = 0;
    for (var i = 0; i < points.length - 1; i++) {
        var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
        sum += d;
    }
    return sum;
}

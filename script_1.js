let cities = [];
let totalCities = 10;
let recordDistance;
let bestEver;

function setup() {
    let canvas = createCanvas(500, 300); // Dimensioni del canvas aumentate per adattarsi meglio
    canvas.parent('algorithm-container'); // Posiziona il canvas all'interno del div con id 'algorithm-container'

    for (let i = 0; i < totalCities; i++) {
        let v = createVector(random(width), random(height));
        cities[i] = v;
    }

    let d = calcDistance(cities);
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
    for (let i = 0; i < cities.length; i++) {
        vertex(bestEver[i].x, bestEver[i].y);
    }
    endShape();

    // Disegna le città
    fill(0);
    for (let i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }

    // Calcola e aggiorna il percorso
    let i = floor(random(cities.length));
    let j = floor(random(cities.length));
    swap(cities, i, j);

    let d = calcDistance(cities);
    if (d < recordDistance) {
        recordDistance = d;
        bestEver = cities.slice();
    }
}

function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function calcDistance(points) {
    let sum = 0;
    for (let i = 0; i < points.length - 1; i++) {
        let d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
        sum += d;
    }
    return sum;
}

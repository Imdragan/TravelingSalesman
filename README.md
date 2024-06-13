SUPSI 20223-24
Corso d’interaction design, CV428.01
Docenti: A. Gysin, G. Profeta

Elaborato 1: XS

Traveling Salesman Problem

Autore: Dragan Radic
Traveling Salesman Problem

Introduzione e tema

Il progetto "Traveling Salesman Problem Visualization" è un'applicazione web che visualizza in tempo reale l'algoritmo per risolvere il Problema del Commesso Viaggiatore (TSP). Il TSP è un problema classico dell'ottimizzazione combinatoria che consiste nel trovare il percorso più breve per visitare tutte le città esattamente una volta e tornare al punto di partenza. L'applicazione utilizza il framework p5.js per creare un'interfaccia grafica dinamica e interattiva che mostra il percorso ottimizzato e l'evoluzione dell'algoritmo nel trovare tale percorso.

Riferimenti progettuali

Il design dell'interfaccia è stato concepito per essere intuitivo e informativo, con un focus sulla visualizzazione chiara dei concetti algoritmici e sulla facilità di interazione. I principali elementi del design includono:

Header e Navigazione: Un header semplice con navigazione tramite bottoni per facilitare il passaggio tra le sezioni dell'applicazione.

Sezioni Esplicative: Ogni sezione dell'applicazione (Storia dell'Algoritmo, Come Funziona, Algoritmo in Azione) è progettata per fornire informazioni chiare e concise sull'algoritmo del TSP, con testi descrittivi e visivi appropriati.

Visualizzazione Grafica: Utilizzo di grafica vettoriale per visualizzare le città e il percorso ottimale, rendendo il processo di calcolo dell'algoritmo visivamente comprensibile.



Design dell’interfraccia e modalià di interazione

L'interfaccia dell'applicazione è strutturata in tre sezioni principali:

Storia dell'Algoritmo: Descrizione storica del Problema del Commesso Viaggiatore e dei primi approcci algoritmici per la sua soluzione.

Come Funziona: Spiegazione dettagliata di come l'algoritmo utilizzato cerca di risolvere il TSP, enfatizzando l'approccio di esplorazione di tutte le possibili combinazioni di percorsi.

Algoritmo in Azione: Utilizzo di p5.js per creare un canvas dinamico che visualizza le città, il percorso attuale e l'evoluzione dell'algoritmo nel migliorare il percorso attraverso scambi casuali delle città.


Tecnologia usata

L'applicazione è implementata utilizzando le seguenti tecnologie:

HTML e CSS: Struttura e stile dell'interfaccia utente per garantire un layout chiaro e gradevole.

JavaScript (p5.js): Utilizzato per la creazione di grafica vettoriale interattiva nel canvas, mostrando le città, i percorsi e l'evoluzione dell'algoritmo nel tempo.

Parti di codice rilevanti per il progetto

Ecco un esempio di parte del codice JavaScript utilizzato per l'implementazione dell'algoritmo TSP:

function setup() {
    let canvas = createCanvas(500, 300); // Creazione del canvas p5.js
    canvas.parent('algorithm-container'); // Posiziona il canvas nel div 'algorithm-container'

    // Inizializzazione delle città con coordinate casuali
    for (let i = 0; i < totalCities; i++) {
        let v = createVector(random(width), random(height));
        cities[i] = v;
    }

    // Calcolo della distanza iniziale del percorso
    let d = calcDistance(cities);
    recordDistance = d;
    bestEver = cities.slice();
}

function draw() {
    background('aliceblue'); // Sfondo del canvas

    // Disegna il percorso migliore trovato finora
    stroke(0);
    strokeWeight(1);
    noFill();
    beginShape();
    for (let i = 0; i < cities.length; i++) {
        vertex(bestEver[i].x, bestEver[i].y);
    }
    endShape();

    // Disegna le città come cerchi
    fill(0);
    for (let i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }

    // Esegue l'algoritmo TSP: scambio casuale delle città e aggiornamento del percorso
    let i = floor(random(cities.length));
    let j = floor(random(cities.length));
    swap(cities, i, j);

    let d = calcDistance(cities);
    if (d < recordDistance) {
        recordDistance = d;
        bestEver = cities.slice();
    }
}




Contesto d’uso e Target

L'applicazione "Traveling Salesman Problem Visualization" è pensata per essere utilizzata da studenti, appassionati di informatica, e professionisti che desiderano comprendere visivamente il funzionamento e l'evoluzione dell'algoritmo per il Problema del Commesso Viaggiatore. È ideale per l'apprendimento interattivo dei concetti di ottimizzazione combinatoria e per l'illustrazione pratica di come gli algoritmi di ricerca possano essere applicati a problemi reali.

Il target include studenti universitari dei corsi di informatica, professionisti del settore tecnologico, e appassionati di matematica e algoritmi che desiderano approfondire le loro conoscenze tramite una presentazione visiva e interattiva.


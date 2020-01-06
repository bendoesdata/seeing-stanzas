var seaRoseLines;
let input;
let poem;

function preload() {
    seaRoseLines = loadStrings('sea_rose.txt');
}

function setup() {
    createCanvas(800, 800);

    input = createElement('textarea', 'Who is your favorite cat?');
    input.size(200, 100);
    input.position(500, 20)

    console.log(typeof input.value())

}

function draw() {
    background(230);
    textSize(16);
    noStroke();
    textAlign(LEFT, TOP);

    fill(20);
    poem = input.value();
    poemLength = poem.split("\n");
    for (var i = 0; i < poemLength.length; i++) {
        var words = poemLength[i].split(" ");
        var currentOffset = 0;

        for (var j = 0; j < words.length; j++) {
            var wordWidth = textWidth(words[j]);
            fill(30, 150);
            // rect(25 + currentOffset, 25 + i * 20,
            //     wordWidth, 6);

            ellipse(20 + currentOffset, 20 + i * 20, wordWidth * 0.6);

            if (mouseIsPressed) {
                fill(0);
                text(words[j], 25 + currentOffset, 25 + i * 20);
            }
            // four pixels between words
            currentOffset += wordWidth + 4;
        }
    }
}
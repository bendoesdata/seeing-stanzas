var seaRoseLines;
let input;
let poem;

function preload() {
    seaRoseLines = loadStrings('sea_rose.txt');
}

function setup() {
    createCanvas(800, 800);

    input = createElement('textarea', "The car is wearing a red hat from Alabama. I am a red banana. Hello!")
    input.size(200, 100);
    input.position(500, 20)

    ;

    console.log(RiTa.getPosTags(input.value()))


}

function draw() {
    background(230);
    textSize(16);
    noStroke();
    textAlign(LEFT, TOP);

    fill(20);
    poem = input.value();
    var tags = RiTa.getPosTags(input.value(), true);
    poemLength = poem.split("\n");
    for (var i = 0; i < poemLength.length; i++) {
        var words = poemLength[i].split(" ");
        var currentOffset = 0;
        let tag = "";
        for (var j = 0; j < words.length; j++) {
            var wordWidth = textWidth(words[j]);
            tag = tags[j];
            if (tag == "n") {
                fill("#72b5b7")
            } else if (tag == "a") {
                fill("#633a82");
            } else if (tag == "v") {
                fill('#40e0d0')
            } else if (tag == "r") {
                fill(250)
            } else {
                fill(30, 150);
            }

            // rect(25 + currentOffset, 25 + i * 20,
            //     wordWidth, 6);

            ellipse(20 + currentOffset, 20 + i * 40, wordWidth * 0.6);

            // show words if mouse is pressed
            // if (mouseIsPressed) {
            //     fill(0);
            //     text(words[j], 25 + currentOffset, 25 + i * 20);
            // }

            // four pixels between words
            currentOffset += wordWidth + 4;
        }
    }
}
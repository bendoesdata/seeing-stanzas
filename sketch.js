var seaRoseLines;
let input, poem, button, title;
let posCheck;
let nounCheck, advCheck, adjCheck, verbCheck;
const nouns = ['nn', 'nns', 'nnp', 'nnps'];
const adj = ['jj', 'jjr', 'jjs'];
const verbs = ['vb', 'vbd', 'vbg', 'vbn', 'vbp', 'vbz'];
const adverbs = ['rb', 'rbr', 'rbs', 'rb'];


function preload() {
    seaRoseLines = loadStrings('sea_rose.txt');
}

function setup() {
    createCanvas(800, 800);

    input = createElement('textarea', "Red is a rose. Run quickly. Quickly. Quickly. Quickly. Quickly.")
    input.size(200, 100);
    input.position(500, 60)

    title = createInput();
    title.size(200, 20);
    title.position(500, 20);

    nounCheck = createCheckbox('nouns', false);
    nounCheck.position(500, 200);
    verbCheck = createCheckbox('verbs', false);
    verbCheck.position(500, 220);
    adjCheck = createCheckbox('adjectives', false);
    adjCheck.position(500, 240);
    advCheck = createCheckbox('adverbs', false);
    advCheck.position(500, 260);



    let test = RiTa.getPosTags(input.value(), false)
    console.log(test)
    let filteredTags = test.filter(a => a !== '.')
    filteredTags = filteredTags.filter(a => a !== ',')
    console.log(filteredTags)
    var n = filteredTags.includes("nn");
    console.log(n)


}

function draw() {
    background(240);
    translate(0, 100);
    noStroke();
    textAlign(LEFT, TOP);

    fill(30, 160);
    let defaultFill = "rgba(30, 30, 30, 0.7)"

    textSize(20);

    text(title.value(), 20, -50);
    poem = input.value();
    var tags = RiTa.getPosTags(poem, false);
    let filteredTags = tags.filter(a => a !== '.')
    filteredTags = filteredTags.filter(b => b !== ',')
    filteredTags = filteredTags.filter(c => c !== '?')

    poemLength = poem.split("\n");

    // loop through words in poem
    for (var i = 0; i < poemLength.length; i++) {
        var words = poemLength[i].split(" ");
        var currentOffset = 0;
        let tag = "";

        // pull out length of each word and draw circle
        for (var j = 0; j < words.length; j++) {
            var wordWidth = textWidth(words[j]);
            tag = filteredTags[j];

            // first check if pos matches value in arr
            // then check to see if checkbox is checked for this pos
            if (nouns.includes(tag)) {
                if (nounCheck.checked()) {
                    fill("rgba(97, 146, 158, 0.8)")
                } else {
                    fill(defaultFill)
                }
            } else if (adj.includes(tag)) {
                if (adjCheck.checked()) {
                    fill("rgba(110, 146, 131, 0.8)");
                } else {
                    fill(defaultFill)
                }
            } else if (verbs.includes(tag)) {
                if (verbCheck.checked()) {
                    fill('rgba(215, 121, 97, 0.8)')
                } else {
                    fill(defaultFill)
                }
            } else if (adverbs.includes(tag)) {
                if (advCheck.checked()) {
                    fill("rgba(83, 55, 70, 0.8)")
                } else {
                    fill(defaultFill)
                }
            } else {
                fill(defaultFill);
            }

            // rect version
            // rect(25 + currentOffset, 25 + i * 20,
            //     wordWidth, 6);

            // circle version
            ellipse(25 + currentOffset, 25 + i * 40, wordWidth * 0.6);

            // show words if mouse is pressed
            if (mouseIsPressed) {
                fill(0);
                text(words[j], 25 + currentOffset, 25 + i * 20);
            }

            // four pixels between words
            currentOffset += wordWidth + 4;
        }
    }

}
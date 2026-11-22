// ============================================================================
//  VERDICT v4  —  a sassy pixel-art design sidekick for Adobe Illustrator
// ----------------------------------------------------------------------------
//  Drops a random 8-bit animal (about 5 x 5 cm) in the bottom-right corner of
//  the active artboard, with a randomly chosen speech OR thought bubble that
//  delivers a randomly chosen verdict on your design.
//
//  HOW TO RUN:   File > Scripts > Other Script...  and pick this file
//                (or put it in Illustrator's Presets/Scripts folder and restart)
//
//  HOW TO EDIT THE SASS:
//    Option A  – edit the VERDICT_LINES list right below this comment.
//                One line per phrase, each wrapped in quotes, comma after it.
//    Option B  – create a plain text file called  Verdict_Lines.txt  in the
//                SAME folder as this script. One phrase per line. If that file
//                exists it is used INSTEAD of the list below. Lines that start
//                with # are ignored (handy for notes / temporarily disabling).
//
//  Tip: don't use a double quote " inside a phrase in Option A. Use ' instead,
//  or write it as \"  (backslash + quote).
// ============================================================================


// ############################################################################
//  EDITABLE SECTION 1 — THE SASS
// ############################################################################

var VERDICT_LINES = [
    "Bold choice. Not a good one, but bold.",
    "I've seen worse. Today. In this file.",
    "Is this kerning or did the letters have a lovers' quarrel?",
    "Hey, so that drop shadow called. It wants 2004 back.",
    "Ah yes, the classic 'more is more' approach.",
    "Great, now do it again but do it like it was on purpose.",
    "So your layer hierarchy was adapted from the School of Whatever, huh?",
    "Interesting use of Comic Sans energy without the Comic Sans.",
    "The client will love it. The client has no taste.",
    "Whitespace is free, you know.",
    "This gradient has more stops than a night bus.",
    "I count 7 fonts. Bravo. That's a new record.",
    "Did you align that to the grid or to your feelings?",
    "It's giving 'first draft' and I'm not sure this is the first draft.",
    "Somewhere a typographer just felt a chill and doesn't know why.",
	"I can hear the laser ladies crying already.",
    "If in doubt, make the logo bigger. Oh. You already did.",
    "I like it. Which is suspicious. Let me look again.",
    "It's not bad. It's just... a lot.",
    "Honestly? Chef's kiss. Don't touch it. Step away.",
    "This layout has the confidence of a stock photo handshake.",
    "Nice. Very nice. Now delete half of it.",
    "Are those stray points or are you building a constellation?",
	"Were your anchor points applied by a hurricane?",
	"So you've decided to look at it and say 'That's fine'?",
    "The palette says 'trust me' and the type says 'don't'.",
    "You've centered everything. Even the doubt.",
    "That's not a margin, that's a rumor.",
    "Actually stunning. I hate that I said that.",
	"I love every bit of it! I'm also a pathological liar.",
    "Every element is fighting for attention and everyone is losing.",
    "Is that a rounded corner or a cry for help?",
	"There isn't enough spotless Munken Polar for whatever this is.",
	"Munken for InStore? Really? Groundbreaking.",
	"Are you sure there's enough Mirror Gold in there, buddy?",
	"Has a PM seen this, or are you wilding out unsupervised?",
	"Listen, all I'm saying is that I hope you run faster than the gyártó ladies.",
    "That stroke weight is 0.25 pt. Nobody will ever see it. Nobody.",
    "I see you used opacity instead of making a decision.",
    "So brave to leave the placeholder text in.",
    "Lorem ipsum dolor sit... you know it prints, right?",
    "This is either genius or a mistake. Ship it and find out.",
    "Slay. But also, check your bleed.",
    "Outline your fonts before you embarrass us both.",
    "The alignment is 2 pt off. I will never sleep again.",
    "It's beautiful. It's also 47 layers named 'Layer 1 copy'.",
    "Minimalism is not the same as forgetting to finish.",
    "Are you designing or just moving things around until it's 5 pm?",
    "That colour combo is legal in most countries.",
    "Very brutalist. Very 'I ran out of time'.",
    "I'd frame it. Then hang it facing the wall.",
    "Solid work. And by solid I mean nothing moves, including me.",
    "Cute. Now try it with the grid turned ON.",
    "This has the vibe of a PowerPoint that wanted more from life.",
    "Bravo. It technically exists.",
    "Bold. Italic. Underlined. Pick a lane.",
    "I love how the eye has absolutely nowhere to go.",
	"Looks like you accidentally used the palette called Identity Crisis.",
    "You've done it. You've reinvented the flyer. Badly.",
    "That's a lot of pink for someone who said 'keep it corporate'.",
    "Unexpectedly great. Please keep expectations low next time too.",
    "Hmm. Zoom out. Zoom out more. Yeah, still.",
    "This composition is one accident away from being good.",
    "Please tell me those are guides and not actual lines.",
    "Every icon here is from a different family. It's a reunion.",
    "The letter-spacing is so tight the words are holding hands.",
    "Fine. FINE. It works. Don't let it go to your head.",
    "Honestly the best thing on this artboard is me.",
    "A masterpiece. Of restraint. Of nothing else, but of restraint.",
    "It looks expensive. It looks like it cost you sleep.",
    "This is what happens when you say 'let's just try it'.",
    "The negative space is the only part that isn't negative.",
    "Ten out of ten. Would print at the wrong size and blame the printer.",
    "You've used the whole colour wheel. Twice.",
    "The type is so small the reader will need to be legally informed.",
    "It's clean. It's clear. It's copied from Dribbble, isn't it?",
    "So many strokes. Is this design or a swim meet?",
    "I'll allow it. Barely.",
    "Congratulations, it's symmetrical. So is a grave.",
    "You know 'auto' is not a design decision, right?",
    "Somewhere between 'wow' and 'why'. Leaning why.",
    "That shape is neither a rectangle nor a rounded rectangle. It's ashamed.",
    "The visual weight is all on the left. The page is about to tip over.",
    "Nothing is wrong with it. Nothing is right with it either.",
    "Iconic. As in, mostly icons.",
    "Charming. In the way a wet dog is charming.",
    "You should be proud. Or at least awake.",
    "Save it. Close it. Reopen it. Yep, still weird.",
    "I'd call it retro but retro had a plan.",
    "Almost there. 'There' has moved though.",
    "Wow. Genuinely wow. Absolutely speechless. Not for the right reasons.",
    "That font pairing is a couple that argues in restaurants.",
    "Perfectly balanced. Like a table with a folded napkin under one leg.",
	"Bitch, really?",
	"Come on, man, Dömpi JUST got her filters replaced. Why fuck her up again?",
	"I can hear the Trotec machines screaming from this.",
	"I'd remind you to check your RGB colors, but you've got way more pressing issues going on.",
	"Was the brief to 'just close your eyes and hope for the least worst outcome'?"
];


// ############################################################################
//  EDITABLE SECTION 2 — LOOKS & SIZE
// ############################################################################

var ANIMAL_SIZE_CM   = 5;      // width/height of the animal in centimetres
var MARGIN_CM        = 0.5;    // distance from the artboard edge
var BUBBLE_WIDTH_CM  = 5.5;    // width of the bubble in centimetres
var BUBBLE_GAP_CM    = 0.4;    // gap between the animal's head and the bubble
var MIN_TEXT_SIZE_PT = 5;      // text shrinks down to this size if a phrase is long
var TEXT_LEADING     = 1;    // line height as a multiple of the font size (Illustrator's auto leading is 1.2)
var TEXT_SIZE_PT     = 9;      // starting font size of the verdict
var FONT_NAME        = "ArialMT";   // try "Courier" or "Impact" if you like. Falls back safely.
var LAYER_NAME       = "Verdict";


// ############################################################################
//  EDITABLE SECTION 3 — THE ANIMALS (pixel grids)
// ----------------------------------------------------------------------------
//  Each animal is a list of rows; every character is one pixel and
//  "." means transparent. An animal can be any size (12x12, 22x21, 40x40...),
//  it is always scaled so its longer side is ANIMAL_SIZE_CM.
//  Letters map to colours. The shared PALETTE below is the default; an animal
//  can also bring its own  palette: { "a": [r, g, b], ... }  which wins over
//  the shared one (the Capybara does this).
//  Just keep every row of one animal the same length.
// ############################################################################

var PALETTE = {
    "k": [ 0,  0,  0],   // black (outlines, eyes)
    "w": [255, 255, 255],   // white
    "o": [242, 140,  40],   // orange (cat)
    "p": [235, 115, 150],   // pink (nose / tongue)
    "b": [145,  95,  50],   // brown
    "B": [ 90,  55,  30],   // dark brown
    "t": [218, 180, 120],   // tan
    "y": [245, 200,  55],   // yellow
    "g": [ 85, 175,  70],   // green
    "G": [ 45, 115,  40],   // dark green
    "l": [140, 230,  60],   // lime (slime alien)
    "c": [245, 236, 215],   // cream (llama)
    "r": [225,  50,  50],   // red (snake tongue)
    "s": [160, 160, 160],   // grey
    "T": [255, 255, 255]    // text area in bubbles (see section 4)
};

var ANIMALS = [
        { name: "Capybara", palette: {
        "a": [  0,   0,   0],
        "b": [204, 114,  79],
        "c": [193, 103,  69],
        "d": [135,  49,  60],
        "e": [ 60,   0,   0],
        "f": [144,  52,  67],
        "g": [162,  66,  68],
        "h": [202, 101,  83],
        "i": [143,  98,  95],
        "j": [138,  93,  88],
        "k": [160,  59,  63]
    }, rows: [
        "........aa...aa.......",
        ".......abca.abca......",
        ".....aaaaaaaadbca.....",
        "....acccbbbbefgha.....",
        "...aibbbbbbbbhcca.....",
        "..aiiibbbbbbbbcccaa...",
        ".aiiiiibbaabbbbbbbca..",
        "aiiiiiiibbbbbbbbbbbca.",
        "aaiaiiiiibbbbbbbbbbba.",
        "aiaijjjiibbbbbbbbbbbba",
        "aiaijjjiibbbbbbbbbbbba",
        "aiaijjjiibbbbbbbbbbbba",
        "aiaijjjiibbbbbbbbbbbba",
        "aiajjjjjibbbbbbbbbbbba",
        ".aaajjjjibbbbbbbbbbbba",
        "...aaaaagbbbbbbbbbcbka",
        ".....agbbbbbbbbbbkbkka",
        ".....abbbbbbbbbbcfcca.",
        ".....abcdccbbbbccdka..",
        ".....akkakkaaaakkka...",
        "......aa.aa....aaa...."
    ]}
];


// ############################################################################
//  EDITABLE SECTION 4 — THE BUBBLES (pixel grids, same rules as the animals)
// ----------------------------------------------------------------------------
//  Exactly like an animal: rows of letters, "." = transparent, letters come
//  from the shared PALETTE or the bubble's own  palette: { ... }.
//  One extra letter:  T  marks where the words go. Draw a solid block of T's
//  inside the bubble; the text is fitted into that block. T pixels are painted
//  with the colour of "T" in the palette (white by default), so the block is
//  invisible in the result. If a bubble has no T's, the text goes in the middle.
//  Draw the tail pointing down / down-left: the animal sits below the bubble.
//  The bubble is scaled so its width is BUBBLE_WIDTH_CM.
// ############################################################################

var BUBBLES = [
    { name: "Speech", rows: [
        "..kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk..",
        ".kwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwk.",
        "kwwTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTwwk",
        "kwwTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTwwk",
        "kwwTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTwwk",
        "kwwTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTwwk",
        "kwwTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTwwk",
        "kwwTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTwwk",
        "kwwTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTwwk",
        "kwwTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTwwk",
        "kwwTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTwwk",
        "kwwTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTwwk",
        "kwwTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTwwk",
        "kwwTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTwwk",
        "kwwTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTwwk",
        ".kwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwk.",
        "..kkkkwwwwwwwkkkkkkkkkkkkkkkkkkkkkkkkk..",
        "......kwwwwwk...........................",
        ".......kwwwk............................",
        "........kwk.............................",
        ".........k.............................."
    ]}
];


// ############################################################################
//  ENGINE — you don't need to touch anything below this line
// ############################################################################

(function () {

    if (app.documents.length === 0) {
        alert("Verdict: open a document first. I can't judge nothing.");
        return;
    }

    var doc = app.activeDocument;
    var isCMYK = (doc.documentColorSpace == DocumentColorSpace.CMYK);
    var CM = 72 / 2.54;   // points per centimetre

    // ---------- helpers ---------------------------------------------------

    function rnd(n) { return Math.floor(Math.random() * n); }

    function makeColor(r, g, b) {
        if (isCMYK) {
            var c = new CMYKColor();
            var rr = r / 255, gg = g / 255, bb = b / 255;
            var k = 1 - Math.max(rr, gg, bb);
            if (k >= 0.999) { c.cyan = 0; c.magenta = 0; c.yellow = 0; c.black = 100; return c; }
            c.cyan    = (1 - rr - k) / (1 - k) * 100;
            c.magenta = (1 - gg - k) / (1 - k) * 100;
            c.yellow  = (1 - bb - k) / (1 - k) * 100;
            c.black   = k * 100;
            return c;
        }
        var rgb = new RGBColor();
        rgb.red = r; rgb.green = g; rgb.blue = b;
        return rgb;
    }

    var BLACK = makeColor(25, 25, 25);
    var WHITE = makeColor(255, 255, 255);

    function trim(s) { return s.replace(/^\s+|\s+$/g, ""); }

    // Load external lines file if it exists next to the script
    function loadLines() {
        try {
            var here = new File($.fileName).parent;
            var f = new File(here.fsName + "/Verdict_Lines.txt");
            if (f.exists) {
                f.encoding = "UTF-8";
                if (f.open("r")) {
                    var out = [];
                    while (!f.eof) {
                        var ln = trim(f.readln());
                        if (ln.length > 0 && ln.charAt(0) !== "#") out.push(ln);
                    }
                    f.close();
                    if (out.length > 0) return out;
                }
            }
        } catch (e) {}
        return VERDICT_LINES;
    }

    // ---------- pick things -----------------------------------------------

    var lines   = loadLines();
    var verdict = lines[rnd(lines.length)];
    var animal  = ANIMALS[rnd(ANIMALS.length)];
    var bubble  = BUBBLES[rnd(BUBBLES.length)];

    // ---------- layer & group ---------------------------------------------

    var layer;
    try { layer = doc.layers.getByName(LAYER_NAME); }
    catch (e) { layer = doc.layers.add(); layer.name = LAYER_NAME; }
    layer.locked = false; layer.visible = true;

    var group = layer.groupItems.add();
    group.name = "Verdict – " + animal.name;

    // ---------- geometry --------------------------------------------------

    var ab = doc.artboards[doc.artboards.getActiveArtboardIndex()].artboardRect; // [L, T, R, B]
    var abL = ab[0], abT = ab[1], abR = ab[2], abB = ab[3];

    var margin = MARGIN_CM * CM;
    var gridH  = animal.rows.length;
    var gridW  = 0;
    for (var r = 0; r < gridH; r++) if (animal.rows[r].length > gridW) gridW = animal.rows[r].length;
    var px     = (ANIMAL_SIZE_CM * CM) / Math.max(gridW, gridH);
    var sizeW  = gridW * px, sizeH = gridH * px;

    var aLeft   = abR - margin - sizeW;
    var aBottom = abB + margin;
    var aTop    = aBottom + sizeH;
    var aRight  = aLeft + sizeW;


    // ---------- generic grid drawer (row-merged rectangles) ----------------
    //  Draws `def.rows` into `container` with pixel size `p`, top-left at (left, top).
    //  Returns the bounding box of any "T" pixels as [L, T, R, B], or null.

    function drawGrid(def, container, p, left, top) {
        var rows = def.rows, h = rows.length, w = 0, r;
        for (r = 0; r < h; r++) if (rows[r].length > w) w = rows[r].length;
        var tBox = null;

        function colorFor(ch) {
            if (def.palette && def.palette[ch]) return def.palette[ch];
            return PALETTE[ch] || null;
        }

        for (var y = 0; y < h; y++) {
            var row = rows[y] || "";
            var x = 0;
            while (x < w) {
                var ch = row.charAt(x);
                if (ch === "" || ch === "." || !colorFor(ch)) { x++; continue; }
                var runStart = x;
                while (x < w && row.charAt(x) === ch) x++;
                var runLen = x - runStart;

                var rL = left + runStart * p, rT = top - y * p;
                var rect = container.pathItems.rectangle(rT, rL, runLen * p + 0.01, p + 0.01);
                var c = colorFor(ch);
                rect.fillColor = makeColor(c[0], c[1], c[2]);
                rect.stroked = false;
                rect.filled = true;

                if (ch === "T") {
                    var rR = rL + runLen * p, rB = rT - p;
                    if (!tBox) tBox = [rL, rT, rR, rB];
                    else { tBox[0] = Math.min(tBox[0], rL); tBox[1] = Math.max(tBox[1], rT); tBox[2] = Math.max(tBox[2], rR); tBox[3] = Math.min(tBox[3], rB); }
                }
            }
        }
        return tBox;
    }

    // ---------- draw the animal ------------------------------------------

    var animalGroup = group.groupItems.add();
    animalGroup.name = animal.name;
    drawGrid(animal, animalGroup, px, aLeft, aTop);

    // ---------- draw the bubble -------------------------------------------

    var bGridH = bubble.rows.length, bGridW = 0;
    for (var br = 0; br < bGridH; br++) if (bubble.rows[br].length > bGridW) bGridW = bubble.rows[br].length;
    var bpx     = (BUBBLE_WIDTH_CM * CM) / bGridW;
    var bubbleW = bGridW * bpx, bubbleH = bGridH * bpx;

    var bBottom = aTop + BUBBLE_GAP_CM * CM;
    var bTop    = bBottom + bubbleH;
    var bLeft   = aRight - bubbleW;
    if (bLeft < abL + margin) bLeft = abL + margin;
    if (bTop > abT - margin) {                 // artboard too short: tuck bubble to the left instead
        bTop = aTop; bLeft = aLeft - 8 - bubbleW;
    }

    var bubbleGroup = group.groupItems.add();
    bubbleGroup.name = bubble.name + " bubble";
    var tBox = drawGrid(bubble, bubbleGroup, bpx, bLeft, bTop);

    var pad = bpx;   // one pixel of breathing room inside the T block
    var tL, tT, tW, tH;
    if (tBox) {
        tL = tBox[0] + pad; tT = tBox[1] - pad; tW = (tBox[2] - tBox[0]) - pad * 2; tH = (tBox[1] - tBox[3]) - pad * 2;
    } else {
        tL = bLeft + bubbleW * 0.1; tT = bTop - bubbleH * 0.1; tW = bubbleW * 0.8; tH = bubbleH * 0.55;
    }

    // ---------- the text --------------------------------------------------

    var textRect = bubbleGroup.pathItems.rectangle(tT, tL, tW, tH);
    var tf = bubbleGroup.textFrames.areaText(textRect);
    tf.contents = verdict;
    var ca = tf.textRange.characterAttributes;
    ca.size = TEXT_SIZE_PT;
    ca.fillColor = BLACK;
    try { ca.textFont = app.textFonts.getByName(FONT_NAME); } catch (e) {}
    try { tf.textRange.paragraphAttributes.justification = Justification.CENTER; } catch (e) {}
    tf.name = "Verdict text";

    // shrink the text until it all fits inside the T block
    function visibleChars(frame) {
        var n = 0;
        try { for (var i = 0; i < frame.lines.length; i++) n += frame.lines[i].characters.length; }
        catch (e) { n = verdict.length; }
        return n;
    }
    var size = TEXT_SIZE_PT;
    while (size > MIN_TEXT_SIZE_PT && visibleChars(tf) < verdict.length) {
        size -= 0.5;
        tf.textRange.characterAttributes.size = size;
    }

    // centre vertically: measure the height the text needs, then rebuild the
    // frame as a shorter box sitting in the middle of the T block
    var lineCount = 1;
    try { lineCount = Math.max(1, tf.lines.length); } catch (e) {}
    var leading = size * TEXT_LEADING;
    var textH = lineCount * leading + leading * 0.5;        // a little slack so the last line isn't clipped
    if (textH < tH) {
        tf.remove();
        var newTop = tT - (tH - textH) / 2;
        var textRect2 = bubbleGroup.pathItems.rectangle(newTop, tL, tW, textH);
        tf = bubbleGroup.textFrames.areaText(textRect2);
        tf.contents = verdict;
        var ca2 = tf.textRange.characterAttributes;
        ca2.size = size;
        ca2.fillColor = BLACK;
        try { ca2.textFont = app.textFonts.getByName(FONT_NAME); } catch (e) {}
        try { tf.textRange.paragraphAttributes.justification = Justification.CENTER; } catch (e) {}
        tf.name = "Verdict text";
    }

    // ---------- done ------------------------------------------------------

    doc.selection = null;
    group.selected = true;

})();

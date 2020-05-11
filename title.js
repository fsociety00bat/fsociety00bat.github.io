if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 600);

}

var x = 0;

var titleText = [ "f", "fs", "fso", "fsoc", "fsoci", "fsocie", "fsociet", "fsociety", "fsociety0", "fsociety00", "fsociety0", "fsociety", "fsociet", "fsocie", "fsoci", "fsoc", "fso", "fs", "f"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

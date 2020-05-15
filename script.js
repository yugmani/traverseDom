// Target the div with the ID of `articles`.
// Change its font size to `50px`.
// Change its first childs, last child to have a font color of `blue`.
// Change its previous sibling to have a background color of `black`.
var articles = document.getElementById("articles");
articles.style.fontSize = "50px";
document.getElementById("articles").children[0].style.color = "blue";
articles.previousElementSibling.style.backgroundColor = "black";

// Difference between firstChild and firstElementChild?
// Target the div with the ID of `main`.
// Change its second child node so the text is `underlined`.
// Change its last child element to have a font size of `50px`.
// Change its first child element to have a font color of `orange`.
// Change its last child elements parent to have a font size of `40px`.

var mainEl = document.getElementById("main");
var secnode = mainEl.lastElementChild;
secnode.style.textDecoration = "underline";
secnode.style.fontSize = "50px";
mainEl.firstElementChild.style.color = "orange";
secnode.parentElement.style.fontSize = "40px";

// Extra Bonus 
// Change 3 other elements styles that we did not ask for above.

var firstC = document.getElementById("articles").children[0].firstElementChild;
var lastC = document.getElementById("articles").children[0].lastElementChild;
firstC.style.border = "3px solid yellow";
lastC.style.backgroundColor = "lightgray";
mainEl.lastElementChild.style.textTransform = "uppercase";


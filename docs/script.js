var noButton = document.getElementById("no");
var yesButton = document.getElementById("yes");

noButton.addEventListener("click", function() {
    yesButton.style.width = yesButton.clientWidth + 10 + "px";
    yesButton.style.height = yesButton.clientHeight + 8 + "px";
    yesCurrentFontSize = parseFloat(window.getComputedStyle(yesButton).getPropertyValue('font-size'));
    yesButton.style.fontSize = (yesCurrentFontSize + 5) + 'px';
});
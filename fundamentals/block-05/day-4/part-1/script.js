let divContainerMain = document.getElementById('container-main');
document.getElementById('button1').addEventListener('click', changeBackgroundColor);
function changeBackgroundColor(event) {
	divContainerMain.classList.toggle('pink');
}
document.getElementById('button2').addEventListener('click', changeColorText);
function changeColorText(event) {
	divContainerMain.classList.toggle('white');
}
document.getElementById('button3').addEventListener('click', changeFontSize);
function changeFontSize(event) {
	divContainerMain.classList.toggle('font-size');
}
document.getElementById('button4').addEventListener('click', changeLineHeight)
function changeLineHeight(event) {
	divContainerMain.classList.toggle('line-height');
}
document.getElementById('button5').addEventListener('click', changeFontFamily)
function changeFontFamily(event) {
	divContainerMain.classList.toggle('font-family');
}
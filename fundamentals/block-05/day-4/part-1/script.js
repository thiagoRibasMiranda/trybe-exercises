let divContainerMain = document.getElementById('container-main');
document.getElementById('button1').addEventListener('click', changeBackgroundColor);
function changeBackgroundColor(event) {
	divContainerMain.classList.toggle('pink');
}
document.getElementById('button2').addEventListener('click', changeColorText);
function changeColorText(event) {
	divContainerMain.classList.toggle('white');
}
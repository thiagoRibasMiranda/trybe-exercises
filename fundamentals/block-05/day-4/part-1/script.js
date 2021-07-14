let divContainerMain = document.getElementById('container-main');
document.getElementById('button1').addEventListener('click', changeBackgroundColor);
function changeBackgroundColor(event) {
	divContainerMain.classList.toggle('pink')
}
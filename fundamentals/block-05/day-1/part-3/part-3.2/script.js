const headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = 'rgb(0, 176, 105)';

const footerContainer = document.getElementById('footer-container');
footerContainer.style.backgroundColor = 'rgb(0, 53, 51)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
    emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';   
}

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
    noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
}
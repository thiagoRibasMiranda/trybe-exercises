function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysOfMonth() {
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let monthDaysList = document.querySelector('#days');

  for(let index = 0; index < dezDaysList.length; index += 1){
    let daysMonth = dezDaysList[index];
    let dayMonthListItem = document.createElement('li');
    dayMonthListItem.innerHTML = daysMonth;
    dayMonthListItem.className = 'day';
    
    if (daysMonth === 24 || daysMonth === 25 || daysMonth === 31) {
      dayMonthListItem.className = 'holiday';
    } if (daysMonth === 4 || daysMonth === 11 || daysMonth === 18 || daysMonth === 25) {
      dayMonthListItem.className = 'friday';
    }
    

    monthDaysList.appendChild(dayMonthListItem);
  }
}
createDaysOfMonth();


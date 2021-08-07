//define the two sections for toggle
calendarSection = document.querySelector('.section-calendar-quote');
tableSection = document.querySelector('.section-todo-block');
mainSection = document.querySelector('.table-and-calendar');
//define the button to toggle
toggleButton = document.getElementById('toggle-button');


//add functionality
toggleButton.addEventListener('click', function(){
    if (tableSection.style.display==='none'){
        tableSection.style.display='flex';
        calendarSection.style.order='2';
    }else{
        tableSection.style.display='none';
        calendarSection.style.display='flex';
        calendarSection.style.order='1';
    }
})
var currentDayEl = document.getElementById('currentDay');
var timeBlockList = document.querySelectorAll('.timeblock');
var currentHour = parseInt(moment().format('HH'));
var containerEl = document.getElementById('container-all');


//Function to initialize page whenever page is reloaded
function init(){
    //On main page, display the date in format (ex. Thursday, October 12th)
    currentDayEl.textContent = moment().format('dddd, MMMM Do');

    //For loop to go through every timeblock in timeBlockList in order to change colors of timeblocks and
    //pull input text that has been saved in local storage
    for(var i=0; i < timeBlockList.length; i++){

        //Change background color of timeblocks based on if it's before, during or after the current hour
        if(parseInt(timeBlockList[i].dataset.time) < currentHour){
            timeBlockList[i].children[1].classList.add('past');
        }
        else if(parseInt(timeBlockList[i].dataset.time) === currentHour){
            timeBlockList[i].children[1].classList.add('present');
        }
        else{
            timeBlockList[i].children[1].classList.add('future');
        }

        //Pull data saved in local storage and display in the textarea in the corresponding timeblock
        timeBlockList[i].children[1].children[0].value = localStorage.getItem(timeBlockList[i].dataset.time);

    }
}




//Event Listner for clicks on the Save Buttons
containerEl.addEventListener('click', function(event) {

    //If you click on the save button, save the contents of corresponding textarea to localStorage based on the dataset.time value
    if (event.target.classList.contains('saveBtn') === true) {
        localStorage.setItem(event.target.parentNode.dataset.time, event.target.parentNode.children[1].children[0].value);
    }
});



//Initialize page when page is refreshed
init();
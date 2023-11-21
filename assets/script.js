$(function () {

    // Get current time and date using dayjs, set that to a new variable 
    const nowHourDate = (dayjs().format('MM/DD/YY' + ' ' + 'h:mm:ss A'));
    
    // Get current hour to use to check time 
    const currentHour = (dayjs().hour());
    
    // Logs the current date and time 
    console.log(nowHourDate)
    console.log(currentHour)
    
    $(document).ready(function () {
       // Displays date and time on page using the currentDay id 
        $('#currentDay').text(nowHourDate);
    
    
    // Event listener for the click event on the save button, grabs input text and time and stores in the local storage
     $('.saveBtn').on('click', function () {
        
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        
        localStorage.setItem(time, text);
    
        function checkTimeUpdateClass () {
            if (time > currentHour ) {
             $(this).addClass('future')
            } else if (time < currentHour) {
             $(this).addClass('past')
            } else if (time === currentHour) {
             $(this).addClass('past')
            }
        }
        }) 
    
     $("#9.description").val(localStorage.getItem("hour-9"));
     $("10.description").val(localStorage.getItem("hour-9"));
     $("11.description").val(localStorage.getItem("hour-9"));
     $("12.description").val(localStorage.getItem("hour-9"));
     $("13.description").val(localStorage.getItem("hour-9"));
     $("14.description").val(localStorage.getItem("hour-9"));
     $("15.description").val(localStorage.getItem("hour-9"));
     $("16.description").val(localStorage.getItem("hour-9"));
     $("h17.description").val(localStorage.getItem("hour-9"));
    
    })
    
    
    
    
        // TODO: Add a listener for click events on the save button. This code should
        // use the id in the containing time-block as a key to save the user input in
        // local storage. HINT: What does `this` reference in the click listener
        // function? How can DOM traversal be used to get the "hour-x" id of the
        // time-block containing the button that was clicked? How might the id be
        // useful when saving the description in local storage?
        //
        // TODO: Add code to apply the past, present, or future class to each time
        // block by comparing the id to the current hour. HINTS: How can the id
        // attribute of each time-block be used to conditionally add or remove the
        // past, present, and future classes? How can Day.js be used to get the
        // current hour in 24-hour time?
        //
        // TODO: Add code to get any user input that was saved in localStorage and set
        // the values of the corresponding textarea elements. HINT: How can the id
        // attribute of each time-block be used to do this?
        //
        // TODO: Add code to display the current date in the header of the page.
    
        // Get and display current date and time 
    
    
    });
    
    
     
    
      
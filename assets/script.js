
    const nowHourDate = (dayjs().format('MM/DD/YY' + ' ' + 'h:mm:ss A'));
    

    console.log(nowHourDate)

 
    const currentHour = (dayjs().format('HH'));
    console.log(currentHour)
    

    $('#currentDay').text(nowHourDate);


    $('.saveBtn').on('click', function () {
        var inputText = $(this).siblings(".description").val(); 
        var inputTime = parseInt($(this).parent().attr("id"));
        localStorage.setItem(inputTime, inputText);

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id")); 
            console.log("blockHour:", blockHour);
        
            if (blockHour > currentHour) {
                console.log("Future");
                $(this).addClass('future');
            } else if (blockHour < currentHour) {
                console.log("Past");
                $(this).addClass('past');
            } else {
                console.log("Present");
                $(this).addClass('present');
            }
        });

    // Load saved data from localStorage
    $("#09 .description").val(localStorage.getItem("09"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
});

    const nowHourDate = (dayjs().format('MM/DD/YY' + ' ' + 'h:mm:ss A'));
    

    console.log(nowHourDate)

 
    const currentHour =parseInt(dayjs().format('H'));
    console.log(currentHour)
    

    $('#currentDay').text(nowHourDate);


    $('.saveBtn').on('click', function () {
        var inputText = $(this).siblings(".description").val(); 
        var inputTime = parseInt($(this).parent().attr("id"));
        localStorage.setItem(inputTime, inputText);

        updateBlockClasses();



        function updateBlockClasses() {
            $(".time-block").each(function () {
                var blockHour = parseInt($(this).attr("id"));
        
                if (blockHour > currentHour) {
                    $(this).removeClass('past present').addClass('future');
                } else if (blockHour < currentHour) {
                    $(this).removeClass('future present').addClass('past');
                } else {
                    $(this).removeClass('past future').addClass('present');
                }
            });
        }

        
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

updateBlockClasses();
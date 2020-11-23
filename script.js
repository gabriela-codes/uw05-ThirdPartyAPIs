$(document).ready(function() {
  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    console.log([value, time])
    localStorage.setItem(time, value);
  });
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
  
  checkHour();
  
  function checkHour() {
    var currentHour = moment().hours();

    $(".row").each(function() {
      var rowId = $(this).attr("id") // The id is the military hour
      var rowHour = parseInt(rowId)

      if (rowHour < currentHour) {
        $(this).addClass("past");
      }
      
      if (rowHour === currentHour) {
        $(this).addClass("present");
      } 

      if (rowHour > currentHour) {
        $(this).addClass("future");
      }
    });
  }
});

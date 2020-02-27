$(document).ready(function() {
  $("form").submit(function(event) {
      event.preventDefault();
      var beech = parseInt($("#beech").val());
      var food = parseInt($("#food").val());
      var camping = parseInt($("#camping").val());
      var travel = parseInt($("#travel").val());
      var movie = parseInt($("#movie").val());
      var total = beech + food + camping + travel + movie;

      if (total < 5) {
        alert("Please complete the survey questions");
      } else if (total === 5) {
        $(".result").text("JavaScript");
      } else if (total === 7 || total >= 9)  {
        $(".result").text("Ruby"); 
      } else if (total === 6  || total === 8) {
       $(".result").text("Python");
     } else{
      $(".result").text("Please try one more time");
     }

      $("#result").show();
});
});





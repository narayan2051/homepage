$(function () {
  $("#start").click(function () {
    $(".boundary").removeClass("youlose");
    let start = true;
    $("#status").text(
      "Move mouse to the end without touching boundary in order to win the game"
    );
    $(".boundary").hover(function () {
      if (start) {
        $(".boundary").addClass("youlose");
        $("#status").text("You Lose!!!!");
      }
    });
    $("#end").mouseenter(function () {
      if (!$(".boundary").hasClass("youlose")) {
        $("#status").text("Congratulation!! You Win");
        start = false;
      }
    });
    $("#maze").mouseleave(function(){
      if(start){
        $(".boundary").addClass("youlose");
        $("#status").text("You Lose!!!!");
      }
    })
  });
});

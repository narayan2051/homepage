$(function () {
  let growthAmount = 10;
  let intervalForGrowing = 250;
  let width = 50;
  let numberOfCircle = 5;


  $("#start").click(function () {
    growthAmount = parseInt($("#growthAmount").val());
    intervalForGrowing = parseInt($("#intervalForGrowing").val());
    width = parseInt($("#width").val());
    numberOfCircle = parseInt($("#numberOfCircle").val());
    for (let i = 0; i < numberOfCircle; i++) {
      let newElem = $("<div>");
      newElem.css({
        "background-color": getRandomColor(),
        "position": "absolute",
        "top": getRandomInt(80) + "vh",
        "left": getRandomInt(100) + "%",
        "border-radius": "50%"
      });

      $("body").append(newElem);

    }
    setInterval(increaseCircleSize, intervalForGrowing);

    $("div").click(function () {
      $(this).remove();
    });

  });

  const increaseCircleSize = () => {
    $("div").css("height", width + "px");
    $("div").css("width", width + "px");
    width += growthAmount;
  }


  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }



});
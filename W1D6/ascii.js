window.onload = function () {
  "use strict";

  var start = document.getElementById("start");
  var textArea = document.getElementById("text-area");
  var stop = this.document.getElementById("stop");
  var animation = this.document.getElementById("animation");
  var i = 0;
  var interval;
  var initialText = "";
  var size = this.document.getElementById("fontsize");
  var turbo = this.document.getElementById("turbo");
  var delay = 250;

  start.onclick = startAnimation;
  stop.onclick = stopAnimation;
  animation.onchange = setInitialText;
  size.onchange = changeSize;
  turbo.onchange = changeTurbo;


  function changeTurbo() {
    clearInterval(interval);
    if (interval != null) {
      if (turbo.checked) {
        delay = 50;
      } else {
        delay = 250;
      }
      playAnimation();
    }
  }


  function changeSize() {
    textArea.style.fontSize = size.value;
  }


  function setInitialText() {
    initialText = ANIMATIONS[animation.value];
    textArea.value = initialText;
  }


  function stopAnimation() {
    disableElement(stop);
    enableElement(start);
    enableElement(animation);
    enableElement(textArea);
    clearInterval(interval);
    interval = null;
    setInitialText();
  }

  function startAnimation() {
    interval = null;
    disableElement(start);
    disableElement(animation);
    disableElement(textArea);
    enableElement(stop);
    playAnimation();
  }

  function playAnimation() {
    if (initialText !== "") {
      var textAreaValue = initialText.split("=====\n");
      interval = setInterval(animate, delay, textAreaValue);
    }
  }

  function animate(arr) {
    if (i == arr.length) {
      i = 0;
    }
    textArea.value = arr[i];
    i++;
  }

  function disableElement(btn) {
    btn.setAttribute("disabled", "disabled");
  }

  function enableElement(btn) {
    btn.removeAttribute("disabled");
  }

};

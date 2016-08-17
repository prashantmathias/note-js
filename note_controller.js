(function(exports) {
  function changeText() {
    var appDiv = document.getElementById("app")
    appDiv.innerHTML = "Howdy!";
  }

  exports.changeText = changeText;
})(this);

(function(exports){

  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("success!")
    }
  };

  function isFalse(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsey");
    } else {
      console.log("success!")
    }
  };

  module.exports = {
    isTrue: isTrue,
    isFalse: isFalse
  }

})(this);

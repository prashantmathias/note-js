(function(){
  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Test failed " + assertionToCheck + " is not truthy");
    }
  }
  function isFalse(assertionToCheck) {
    if (assertionToCheck) {
      throw new Error("Test failed " + assertionToCheck + " is not falsey");
    }
  }
})(this);

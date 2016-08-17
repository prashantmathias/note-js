(function(exports){
  function describe(description, blockToCheck) {
    document.write('<div style="font-weight:bold; color: #3498db;">' + description + '</div>');
    blockToCheck();
    document.write('<hr>');
  }

  function it(description, blockToCheck) {
    try {
      blockToCheck();
      document.write('<p style="color: green;">' + description + '</p>');
    }
    catch (e) {
      document.write('<p style="color: red;">' + description + '</p>');
  	  document.write('<pre>' + e.message + '</pre>');
      }
  }


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
  exports.describe = describe;
  exports.it = it;
  exports.asserts = {
    isTrue: isTrue,
    isFalse: isFalse
  };

})(this);

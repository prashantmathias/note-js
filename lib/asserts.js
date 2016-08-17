(function(exports){
  function describe(description, blockToCheck) {
    document.write('<div class="text-left" ><h2 class="text-primary">' + description + '</h2></div>');
    blockToCheck();
    document.write('<hr>');
  }

  function it(description, blockToCheck) {
    try {
      blockToCheck();
      document.write('<p class="text-success"> <i class="fa fa-check-square"> </i> ' + description + '</p>');
    }
    catch (e) {
      document.write('<p class="text-danger"> <i class="fa fa-exclamation-triangle"> </i> ' + description + '</p>');
  	  document.write('<pre class="text-warning"> <i class="fa fa-exclamation-triangle"> </i> ' + e.message + '</pre>');
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

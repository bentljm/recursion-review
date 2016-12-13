// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var elements = [];
  var testElement = function(element) {
    if(element.classList) {
      if(element.classList.contains(className)) {
        elements.push(element);
      }
    }
    for(var i = 0; i < element.childNodes.length; i++) {
      testElement(element.childNodes[i]);
    }
  }
  testElement(document.body);
  return elements;
}

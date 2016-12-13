// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
//Number, boolean, function, string, array, obj
  if(typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'function') {
    return obj.toString();
  } else if (obj === null) {
    return 'null';
  } else if (obj === undefined) {
    return 'undefined';
  } else if(typeof obj === 'string') {
    return '"' + obj + '"';
  } else if(Array.isArray(obj)) {
    var result = [];
    for(var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result.join(',') + ']';
  } else if(typeof obj === 'object') {
    var keys = Object.keys(obj);
    if(keys.length) {
      var values = new Array();
      for(var i = 0; i < keys.length; i++) {
        if(obj[keys[i]] === undefined || typeof obj[keys[i]] === 'function') {
          continue;
        }
        var keyString = '"' + keys[i] + '":';
        var indexValue = stringifyJSON(obj[keys[i]]);
        values.push(keyString + indexValue);
      }
      return '{' + values.join(",") + '}';
    } else {
      return '{}';
    }
  }
};
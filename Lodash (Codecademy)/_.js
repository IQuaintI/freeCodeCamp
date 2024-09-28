const _ = {
  // Implement the clamp() method which takes three arguments: a number, a lower bound, and an upper bound.
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  // Implement the inRange() method which takes three arguments: a number, a start value, and an end value.
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      const temp = end;
      end = start;
      start = temp;
    }
    const isInRange = start <= number && number < end;
    return isInRange;
  },

  //Implement the words() method which takes a string as an argument and splits it into an array of words.
  words(string) {
    const words = string.split(" ");
    return words;
  },

  // Implement the pad() method which takes two arguments: a string and a length.   
    pad(string, length) {
      if (length <= string.length) {
        return string;
      }
      const startPaddingLength = Math.floor((length - string.length) / 2);
      const endPaddingLength = length - string.length - startPaddingLength;
      const paddedString = " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
      return paddedString;
    },

    // Implement the has() method which takes two arguments: an object and a key.
    has(object, key) {
      const hasValue = object[key] !== undefined;
      return hasValue;
    },

    // Implement the invert() method which takes an object as an argument and inverts the key / value pairs.
    invert(object) {
      let invertedObject = {};
      for (let key in object) {
        const originalValue = object[key];
        invertedObject = {originalValue: key};
      }
      return invertedObject;
    },

    //Implement the findKey() method which takes two arguments: an object and a predicate function.
    findKey(object, predicate) {
      for (let key in object) {
        const value = object[key];
        const predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
          return key;
        }
      }
      return undefined;
    },  

    // Implement the drop() method which takes two arguments: an array and a number representing the number of items to drop from the beginning of the array.
    drop(array, n) {
      if (n === undefined) {
        n = 1;
      }
      const droppedArray = array.slice(n);
      return droppedArray;
    },

    // Implement the dropWhile() method which takes two arguments: an array and a predicate function.
    dropWhile(array, predicate) {
      const dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
      const droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },

    // Implement the chunk() method which takes two arguments: an array and a size.
    chunk(array, size) {
      if (size === undefined) {
        size = 1;
      }
      const arrayChunks = [];
      for (let i = 0; i < array.length; i += size) {
        const arrayChunk = array.slice(i, i + size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
  };
    
    // Data for findKey() method
    const heroes = {
      'Batman':  { 'vehicle': 'Batmobile', 'hero': true },
      'Robin':    { 'vehicle': 'Redbird', 'hero': true },
      'Joker': { 'vehicle': 'Jokermobile',  'hero': false }
    };
    
    const villains = function(person) { return person.hero === false; };

// Test the methods
console.log(_.clamp(3, 1, 4)); // 3
console.log(_.inRange(5, 2, 4)); // false
console.log(_.words("Hello, world!")); // [ 'Hello,', 'world!' ]
console.log(_.pad("hello", 10)); // "   hello  "
console.log(_.has({house: "Some value"}, "house" )); // true
console.log(_.invert({key: "value"})); // { value: 'key' }
console.log(_.findKey(heroes, villains)); // Joker
console.log(_.drop([1, 2, 3], 2)); // [3]
console.log(_.dropWhile([1, 2, 3, 4, 5], n => n < 3)); // [3, 4, 5]\
console.log(_.chunk([1, 2, 3, 4, 5], 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]


// Do not write or modify code below this line.
module.exports = _;

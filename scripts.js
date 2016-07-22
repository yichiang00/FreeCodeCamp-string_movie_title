function findLongestWord(str) {
  var myArray=str.split(' ');
  var temp = 0;
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].length>temp) {
      temp=myArray[i].length;
    }
  }
  return temp;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

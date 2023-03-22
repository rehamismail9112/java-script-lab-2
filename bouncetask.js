function largestWord(str) {
    const words = str.split(' ');
    let largest = words[0];
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > largest.length) {
        largest = words[i];
      }
    }
    return largest;
  }
  
  console.log(largestWord ("this is a javascriptstring demo"));
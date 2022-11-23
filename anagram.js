function getOccurrences(word) {
    let wordAr = Array.from(word);
    const occurrences = {};
    wordAr.forEach(element => {
        if (occurrences[element]) {
            occurrences[element]++;
        } else {
            occurrences[element] = 1;
        }
    });
    return occurrences;
}
function isAnagram(word1, word2) {
  if(word1.length != word2.length) {
    console.log("No length");
    return false;
  }
  let occurrences1 = getOccurrences(word1.toLowerCase());
  console.log('Before work', occurrences1);
  let arrW2 = Array.from(word2.toLowerCase());
  for(let i = 0; i < arrW2.length; i++) {
    if(occurrences1[arrW2[i]] == undefined) {
        console.log("letter doesn’t exist");
      return false;
    }
    let oc = occurrences1[arrW2[i]-1]
    if(oc < 0) {
      console.log('Less than - 0 ', occurrences1);
      return true;
    }
  }
  console.log('After work', occurrences1);
  return true;
}
// TEST:
const word = 'Yellow';
console.log( isAnagram(word, 'weloly'));
console.log( isAnagram(word, 'leloyw'));
console.log( isAnagram(word, 'wolley'));
console.log( isAnagram(word, 'weloyl'));
console.log( isAnagram(word, 'weloll'));  
console.log( isAnagram(word, 'leloy'));    
console.log( isAnagram(word, 'wollet'));  
console.log( isAnagram(word, 'weloyo'));  







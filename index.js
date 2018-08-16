function theBeatlesPlay(musicians, instruments) {
  const result = [];
  for (var i = 0; i < musicians.length; i++) {
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  return result;
}


// function johnLennonFacts(){
//   var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
//   var newFacts = [];
//   var i = 0
//   while (i < facts.length) {
//     newFacts.push(facts[i] + "!!!")
//     i++;
//   }
//   return newFacts;
// }

function johnLennonFacts(detail) {
  var detail_exclamation = [];
  var i = 0;
  while (i < detail.length) {
    detail_exclamation.push(detail[i] + "!!!");
    i++;
  }
  return detail_exclamation
}

function theBeatlesPlay(musicians, instruments) {
  const result = [];
  for (var i = 0; i < musicians.length; i++) {
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  return result;
}


function johnLennonFacts(string){
  var facts = [];
  var facts_with_exclamation = [];
  var i = 0
  while (i < facts.length) {
    facts_with_exclamation.push(facts[i] + "!!!")
    i++;
  }
  return facts_with_exclamation;
}

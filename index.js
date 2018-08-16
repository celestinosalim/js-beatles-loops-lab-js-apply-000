function theBeatlesPlay(musicians, instruments) {
  const result = [];
  for (var i = 0; i < musicians.length; i++) {
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  return result;
}


function johnLennonFacts(facts) {
  var results = [];
  var i = 0;
  while (i < facts.length) {
    results.push(facts[i] + "!!!");
    i++;
  }
  return results
}

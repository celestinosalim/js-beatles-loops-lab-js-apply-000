function theBeatlesPlay(musicians, instruments) {
  const result = [];
  for (var i = 0; i < musicians.length; i++) {
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  return result;
}


function johnLennonFacts(detail) {
  var detail_exclamation = [];
  var i = 0;
  while (i < detail.length) {
    detail_exclamation.push(detail[i] + "!!!");
    i++;
  }
  return detail_exclamation
}


function iLoveTheBeatles(num) {
  const empty_array = [];
  do {
    empty_array.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return empty_array;
}

function theBeatlesPlay (musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push (`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray;
}

function johnLennonFacts (factsArray) {
  const facts = [];
  let i = 0;
  while (i < factsArray.length) {
    facts.push (`${factsArray[i]}!!!`)
    i++
  }
  return facts
}

function iLoveTheBeatles (number){
  var emptyArray = [];
  var i = 0;
  if (number <= 15){
    do {
      emptyArray.push (`I love the Beatles!`);
    } while (i < number);
  }
  return emptyArray;
}

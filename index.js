function theBeatlesPlay (musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push (`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray;
}

function johnLennonFacts (array) {
  const facts = [];
  let i = 0
  while (i < array.length) {
    facts.push (`${facts[i]}!!!`)
  }
  return facts;
}

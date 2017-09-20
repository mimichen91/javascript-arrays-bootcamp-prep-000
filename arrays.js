var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
  const chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"]
  return moreChocolateBars = ["foo", ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray() {
  var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];
  chocolateBars.unshift("foo")
  return chocolateBars
}

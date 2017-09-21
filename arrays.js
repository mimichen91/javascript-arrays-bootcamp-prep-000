var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return array = ["foo", 1, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift("element")
}

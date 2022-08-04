const TYPES_OF_APPLES = [1,2,3,4];
let firstType;
let secondType;
let longestPortion = 0;
let checkingLongestPortion = 0;
for (let i = 0; i < TYPES_OF_APPLES.length; i++) {
  if (!firstType) {
    firstType = TYPES_OF_APPLES[i];
  } else if (!secondType && firstType !== TYPES_OF_APPLES[i]) {
    secondType = TYPES_OF_APPLES[i];
  }
  if (firstType && firstType === TYPES_OF_APPLES[i]) {
    checkingLongestPortion += 1;
  } else if (secondType && secondType === TYPES_OF_APPLES[i]) {
    checkingLongestPortion += 1;
  } else {
    firstType = TYPES_OF_APPLES[i];
    secondType = undefined;
    if (longestPortion < checkingLongestPortion) {
      longestPortion = checkingLongestPortion;
    }
    checkingLongestPortion = 1;
  }
}
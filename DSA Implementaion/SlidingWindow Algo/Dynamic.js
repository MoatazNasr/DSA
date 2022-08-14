// // it is dynamic because there isn't a fixed subArrayLength
const smallestSubArraySum = (array, arrayLength, targetSum) => {
  let windowSum = 0;
  let prevWindowFirstIndex = 0;
  let smallestWindowSize = Number.MAX_VALUE;
  // i gave the smallestWindowSize variable a max value cause we need to make it small as possible
  for (let i = 0; i < arrayLength; i++) {
    windowSum += array[i];
    while (windowSum >= targetSum) {
      smallestWindowSize = Math.min(smallestWindowSize,(i - prevWindowFirstIndex ) + 1);
      windowSum -= array[prevWindowFirstIndex]
      prevWindowFirstIndex ++;
    }
  }
  return smallestWindowSize;
};
// time complexity is O(n^2)
// space complexity is O(1)

// it is fixed because we will iterate in a fixed subArrayLength
const maximumSubArraySum = (array, arrayLength, subArraylength) => {
  let windowSum = 0;
  let maxSum = 0;
  for (let i = 0; i < subArraylength; i++) {
    windowSum += array[i];
    maxSum = windowSum;
  }
  for (let i = subArraylength; i < arrayLength; i++) {
    windowSum += array[i] - array[i - subArraylength];
    //i - subArraylength --> to get the first index in the previous window 
    if (maxSum < windowSum) {
      maxSum = windowSum;
    }
  }
  return maxSum;
};
// time complexity is O(n)
// space complexity is O(1)
 
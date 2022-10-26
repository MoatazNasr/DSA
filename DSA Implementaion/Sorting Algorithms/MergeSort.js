// it looks like binary tree and the traversal is done as post order (left - right - root)
// pros -------------------------------------------
//  of merge sort , suitable for :: large size array , merging two linked list , external sorting (in files)
// stable (preserve the order of duplicated elements in the array) ex :  1 2 5 4 8 6 9 8
// first 8 for motaz and second 8 is for miz the order will be perserved as it will be motaz then miz (stable)
// cons -------------------------------------------
// extra space as it takes another (extra) array to sort elements in it
// but in case of linked list no extra space needed
// if the problem's size is small then the algorithm is much smaller than if the problem's size is large
// problem size is inversely proportional with algorithm speed (PS = 1/AS) , we use insertion sort
// as it is stable and it will be much faster than merge sort in small size problems as n <= 43
// a recursive problem takes auxiliary space that keeps the functions code in the memory (stack) till exec
// auxiliary space equals to the tree of algorithm in recursive problems
// in case of merge sort tree levels are log n and each merge function creates an array of n , logn + n
// logn calls for each mergesort and n for merge function so n logn for the whole function
// O (n) space & O( n logn ) time
export default class MergeSort {
  constructor(array, l, r) {
    return this.#mergeSort(array, l, r);
  }
  merge(leftSortedArray, rightSortedArray) {
    let sortedArray = [];
    let i = 0;
    let j = 0;
    for (i, j; i < leftSortedArray.length && j < rightSortedArray.length; ) {
      if (leftSortedArray[i] <= rightSortedArray[j]) {
        sortedArray.push(leftSortedArray[i]);
        i++;
      } else {
        sortedArray.push(rightSortedArray[j]);
        j++;
      }
    }
    for (i; i < leftSortedArray.length; i++) {
      sortedArray.push(leftSortedArray[i]);
    }
    for (j; j < rightSortedArray.length; j++) {
      sortedArray.push(rightSortedArray[j]);
    }
    return sortedArray;
  }
  #mergeSort(array, l, r) {
    if (l >= r) return [array[r]];
    let leftSortedArray;
    let rightSortedArray;
    let mid = Math.floor((l + r) / 2);
    leftSortedArray = this.#mergeSort(array, l, mid);
    rightSortedArray = this.#mergeSort(array, mid + 1, r);
    return this.merge(leftSortedArray, rightSortedArray);
  }
}

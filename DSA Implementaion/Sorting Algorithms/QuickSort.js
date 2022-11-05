// is a divide and conquer algo
// the pivot is the element that all elements at the left are smaller and at the right are greater
// and it is the partition position where the array will get separated from it into two left & right arrays
// can pick pivot in different ways --> 1 always pick pivot as a random number, --> 2 pick first ele as pivot
// --> 3 pick the last ele as pivot, --> 4 pick median as pivot
// quicksort time complexity can be O (nlogn) when array is n't sorted and O(n^2) when the array already sorted
// as it needs to partition the array at each iteration
// also space complexity can be O(n) or O(logn) depends also if the array is sorted or not
// quicksort is not stable and in place
// there are two partition algorithms hoare's which uses two pointers and O(N)^2 and lomuto's

export default class QuickSort {
  constructor(arr, l, h) {
    return this.#quickSort(arr, l, h);
  }
  #swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  #randomPartition(arr, l, h) {
    // randomPartition function for both partition algorithms
    let randomPivot = l + Math.floor(Math.random() * (h - l + 1));
    // pick random pivot ranges from l to h
    this.#swap(arr, randomPivot, l);
    // horae's swap (randomPivot, l)
    // lomuto's swap (randomPivot, h)
    return this.#partition(arr, l, h);
  }
  #partition(arr, l, h) {
    // lomuto's partition Algorithm
    let pivot = arr[h];
    let i = l;
    let j = l;
    while (j < h) {
      if (arr[j] <= pivot) {
        this.#swap(arr, i, j);
        i++;
      }
      j++;
    }
    this.#swap(arr, i, j);
    return i;

    // hoare's partition Algorithm
    // let pivot = arr[l];
    // let i = l - 1;
    // let j = h + 1;
    // while (true) {
    //   do {
    //     i++;
    //   } while (arr[i] < pivot);
    //   do {
    //     j--;
    //   } while (arr[j] > pivot);
    //   if (i >= j) return j;
    //   this.#swap(arr, i, j);
    // }
  }
  #quickSort(arr, l, h) {
    // if (l >= h) return arr;
    // let pi = this.#randomPartition(arr, l, h);
    // this.#quickSort(arr, l, pi - 1);
    // // if lomuto's pi - 1
    // // if hoare's pi
    // // sort the subarray before pivot
    // this.#quickSort(arr, pi + 1, h);
    // // sort the subarray after pivot

    // tail recursion for quicksort reduce n space to logn
    while (l < h) {
      let pi = this.#partition(arr, l, h);
      // If left part is smaller, then recur for left
      // part and handle right part iteratively
      if (pi - l < h - pi) {
        this.#quickSort(arr, l, pi - 1);
        l = pi + 1;
      }
      // Else recur for right part
      else {
        this.#quickSort(arr, pi + 1, h);
        h = pi - 1;
      }
    }
    // another tail recursion algorithm but in sorted arrays it become O (n) space so random pivot
    // solve this to become O (logn) space
    // this.#quickSort(arr, l, pi - 1);
    // l = pi+1;
    return arr;
  }
}
// Comparison between hoare's partition and lomuto's
// both are O (n) Time
// hoare's is efficient than lomuto's because it does three times fewer swaps on average
// both degrade quicksort from n logn to n^2 when the array is already sorted
// hoare's pivot is the first item while lomuto's is the last item
// hoare's does not fix the pivot in the correct position while lomuto's does
// we can use random pivot at both but in hoares we need to avoid last index pivot as cause infinite loop
// both are unstable

// quicksort over mergesort for sorting arrays
// as quicksort does not take auxiliary(extra) space in-place ,both in the average cases are O (nlogn) time
// the randomized version is expected to always be O (nlogn) but also worst case can occur but not for
// a specific pattern ex sorted array also it is very l to occur as random position will make sorted array
// become not sorted
// qucksort is a cache friendly as it has cache locality(reference) for the arrays
// it is also a tail recursive so tail recursive optimization can occur

// mergesort over quicksort in linked list
// mergesort won't require extra space in linked list
// mergesort at worst case is O(nlong) time complexity and with linked list space reduction it is optimal
// than quicksort
// doing random access of array elements as they are in continous block memory.
// while we can not do random access in linked list as they are not in a continous block memory.
// QuickSort needs many accesses as we have to travel each and every node from the head to i’th node.
//  as we don’t have continuous block of memory. Therefore, the overhead increases for quick sort.
//  Merge sort accesses data sequentially and the need of random access is l.
// Also for fewer number of inputs, quick sort performs better than merge sort.

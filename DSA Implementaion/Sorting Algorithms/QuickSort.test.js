import QuickSort from "./QuickSort";
describe("Quick Sort", () => {
   it("tests quicksort ---> test 1", () => { 
     let res = new QuickSort([10,7,8,9,1,5],0,5);  
     console.log(res)
     expect(res).toEqual([1,5,7,8,9,10]);
   });
  //  it("tests quicksort ---> test 2", () => { 
  //   let res = new QuickSort([60,-7,8,9,-1,120,0,0,950],0,8);  
  //   console.log(res)
  //   expect(res).toEqual([-7,-1,0,0,8,9,60,120,950]);
  // }) 
  // it("tests the quicksort ---> test 3", () => {
  //   let res = new QuickSort([1], 0,0);
  //   console.log(res)
  //   expect(res).toEqual([1]);  
  // })
  // it("tests the quicksort ---> test 4", () => {
  //   let res = new QuickSort([-1,30,5,-6,-60000,500,0,1,6,9,5,2,6,-300,3000,50,60,4521235,-3321512], 0,18);
  //   console.log(res)
  //   expect(res).toEqual([-3321512,-60000,-300,-6,-1,0,1,2,5,5,6,6,9,30,50,60,500,3000,4521235]);  
  // }) 
})
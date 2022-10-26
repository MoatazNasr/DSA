import MergeSort from "./MergeSort";
describe("Merge Sort", () => {
  it("tests the mergesort ---> test 1", () => {
    let res = new MergeSort([-1,30,5,-6,-60000,500], 0,5);
    console.log(res)
    expect(res).toEqual([-60000,-6,-1,5,30,500]);  
  })
  it("tests the mergesort ---> test 2", () => {
    let res = new MergeSort([-1,30,5,-6,-60000,500,0,1,6,9,5,2,6,-300,3000,50,60,4521235,-3321512], 0,18);
    console.log(res)
    expect(res).toEqual([-3321512,-60000,-300,-6,-1,0,1,2,5,5,6,6,9,30,50,60,500,3000,4521235]);  
  })
  it("tests the mergesort ---> test 3", () => {
    let res = new MergeSort([1,-1], 0,1);
    console.log(res)
    expect(res).toEqual([-1,1]);  
  })
  it("tests the mergesort ---> test 4", () => {
    let res = new MergeSort([1], 0,0);
    console.log(res)
    expect(res).toEqual([1]);  
  })
});

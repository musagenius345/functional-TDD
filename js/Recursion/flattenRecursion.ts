// const arr2 = [1,2,3,4,[5,6,[7,8]]]

export function flatten(arr: any[]) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element)) {
      flatten(element);
    } else {
      console.log(element);
    }
  }
}

flatten(arr2);
// console.log(result)

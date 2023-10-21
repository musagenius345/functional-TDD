export function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    // Base case: If start index is greater than end index, target not found
    if (start > end) {
        return -1;
    }

    let midpoint = Math.floor((start + end) / 2);
    let mid = arr[midpoint];

    if (mid === target) {
        return midpoint;
    }
    if (mid > target) {
        // binarySearch in the left half of the current interval
        return binarySearch(arr, target, start, midpoint - 1);
    }
    // binarySearch in the right half of the current interval
    return binarySearch(arr, target, midpoint + 1, end);
}

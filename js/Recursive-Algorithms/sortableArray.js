export class SortableArray {
  constructor(array) {
    this.array = array;
  }

  // Partition method for QuickSort
  partition(left, right) {
    const pivot = this.array[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      while (this.array[i] < pivot) {
        i++;
      }
      while (this.array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        // Swap elements at positions i and j
        [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
        i++;
        j--;
      }
    }

    return i;
  }

  // QuickSort algorithm
  quickSort(left, right) {
    if (this.array.length > 1) {
      const index = this.partition(left, right);

      if (left < index - 1) {
        this.quickSort(left, index - 1);
      }
      if (index < right) {
        this.quickSort(index, right);
      }
    }
  }

  // Public method to sort the array
  sort() {
    this.quickSort(0, this.array.length - 1);
    return this.array;
  }
}


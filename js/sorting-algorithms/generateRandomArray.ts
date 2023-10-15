export function generateRandomArray(size: number): number[] {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 1000)); // Random numbers between 0 and 1000
  }
  return array;
}

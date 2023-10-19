// function wordBuilder(arr) {
//   let collection = []

//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//       if (i !== j) {
//         collection.push(arr[i].concat(arr[j]))
//       }
//     }

//   }
//     return collection
// }

// //hof

// const wordBuilder2 = arr => {
//   let collection = []

// }

function wordBuilder(arr) {
  let collection = [];

  arr.forEach((element, i) => {
    const concatenatedWords = arr
      .map((word, j) => {
        if (i !== j) {
          return element.concat(word);
        }
      })
      .filter(Boolean);
    collection.push(...concatenatedWords);
  });

  return collection;
}

const result = wordBuilder(["a", "b", "c", "d"]);

console.log(result);

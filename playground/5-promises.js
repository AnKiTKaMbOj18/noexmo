function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

// Approach 1 to handle multple promise calls
// disadvantage code will keep on nested
// will become promise nested hell

// add(1, 2)
//   .then((sum) => {
//     console.log(sum);
//     add(sum, 3)
//       .then((sum2) => {
//         console.log(sum2);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Approach 2: Promise chaining
// benefit code is not nested and looks clean
add(1, 2)
  .then((sum) => {
    console.log(sum);
    return add(sum, 3);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((error) => {
    console.log(error);
  });

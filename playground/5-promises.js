function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        reject("Numbers must be greater than or equal to zero!");
      }
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
// add(1, 2)
//   .then((sum) => {
//     console.log(sum);
//     return add(sum, 3);
//   })
//   .then((sum2) => {
//     console.log(sum2);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Approach 3: Async Await:

async function findSum() {
  const sum1 = await add(5, 5);
  const sum2 = await add(sum1, 5);
  const sum3 = await add(sum2, -5);

  return sum3;
}

findSum()
  .then((sum) => {
    console.log(sum);
  })
  .catch((e) => console.log(e));

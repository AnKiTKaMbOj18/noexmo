const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([4, 5, 6]);
    reject("error occured!")
  },2000);
});

doWorkPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

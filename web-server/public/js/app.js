console.log("client side javascript file is loaded!");

// fetch("http://localhost:3000/test").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

fetch("http://localhost:3000/weather?address=Amsterdam").then((response)=>{
  response.json().then((resp)=>{
    if(resp.error) {
      console.log("Error: ", resp.error);
    } else {
      console.log(resp);
    }
  })
})

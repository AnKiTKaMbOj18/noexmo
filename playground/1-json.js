const fs = require("fs");

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

const bookJson = JSON.stringify(book);
console.log(bookJson);

const parsedData = JSON.parse(bookJson);
console.log(parsedData);

// fs.writeFileSync("1-json.json", bookJson);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();
const dataParse = JSON.parse(dataJson);
console.log(dataParse);
// console.log(JSON.parse(dataBuffer));

const testBuffer = fs.readFileSync("1-jsontest.json");
const testJson = testBuffer.toString();
let testParse = JSON.parse(testJson);
testParse.name= "Ankit Kamboj";
testParse.age="20";

const testStringify = JSON.stringify(testParse);

fs.writeFileSync("1-jsontest.json", testStringify);

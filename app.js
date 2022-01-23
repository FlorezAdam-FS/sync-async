// #1 missing the p in the require function;
var http = require("http");
// #2 needs to be an arrow function
var myname = () => {
  //#3 change this to a retun statement
  return "Here is my IP address";
};
// #4 Name was missing the "n"
// #5 function is not async
async function callHttpbin() {
  let promise = new Promise((resolve, reject) => {
    http.get("http://httpbin.org/ip", function (response) {
      var str = "";
      response.setEncoding("utf8");
      response.on("data", function (data) {
        str += data;
      });
      response.on("end", function () {
        var result = JSON.parse(str);
        myips = result.origin;
        // #6 need to ad myips to the resolve function
        resolve(myips);
      });
    });
  });
  let result = await promise;
  // #7 forgot the return
  return result;
}

// #8 function is not async
async function executeAsyncTask() {
  const valueA = await callHttpbin();
  const valueB = myname();
  console.log(valueB + " " + valueA);
  // #9 missing the last curly brace
}

// #10 never calls the executeAsyncTask
executeAsyncTask();

// Output Here is my IP address 149.24.160.1

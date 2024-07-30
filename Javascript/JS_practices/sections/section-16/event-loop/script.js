console.log("Test start");
setTimeout(() => {
  console.log("0 sec timer");
}, 0);
// This will be printed first because promises callback
// are put into the microtask queue (it has more priority than
// callbacks in the callback queue)
Promise.resolve("Resolved promise 1").then((res) => console.log(res));
Promise.resolve("Resolved promise 2").then((res) => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log("Test end");

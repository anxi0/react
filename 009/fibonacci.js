var count = 0;
var fibonacci = (function () {
  var memo = [0, 1];
  var fib = function (n) {
    count++;
    var result = memo[n];
    if (typeof result !== "number") {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
})();

var start = new Date();
for (var i = 0; i <= 50; i++) {
  console.log(i + " : " + fibonacci(i));
}
console.log("count = " + count);
console.log(`Elapsed time : ${new Date() - start}ms`);

var count1 = 0;

var fibonacci = function (n) {
  count1++;
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};
var start = new Date();
for (var i = 0; i <= 40; i += 1) {
  console.log(i + " = " + fibonacci(i));
}
console.log("count1 = " + count1);
console.log(`Elapsed time : ${new Date() - start}ms`);

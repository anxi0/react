const food1 = 'c';
const food2 = 'p';

function getSnackTaste(string, ...values) {
  return string.reduce(
    (acc, cur, i) => `${acc}${cur}${values[i] && `<b>${values[i]}</b>`}`,
  );
}
var result = getSnackTaste`제가 어제 먹은 음식은 ${food1}그리고 ${food2}입니다.`; // Today, cookie is bad~~
console.log(result);

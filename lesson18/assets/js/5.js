let N = +prompt(`Численность населения: чел.`);
console.log(`численность населения: ${N} чел.`);
let S = +prompt(`площадь территории: км².`);
console.log(`площадь территории: ${S} км².`)
let P = N / S;
P = P * 100;
P = Math.round(P);
P = P / 100;
console.log(`плотность населения: ${P} чел/км².`);
alert(`плотность населения: ${P} чел/км².`);
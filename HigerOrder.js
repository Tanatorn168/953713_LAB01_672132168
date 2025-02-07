const n = [1, 2, 3, 4, 5];
const square = n.map((num) => num * num);
//console.log(square);

const even = n.filter((num) => num % 2 === 0);
//console.log(even)

//12.3
const NumberCalculate = (numbers) => {
    return numbers.filter(num => num % 3 === 0).map(num => num **3)
}
const n1 = [1, 100, 99, 107, 3, 79, 155, 550, 1345];
console.log(NumberCalculate(n1));
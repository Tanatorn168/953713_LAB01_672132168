//function declaration
function greet(name) {
    return 'Hello ' + name
} 
console.log(greet('Perterparker'))

//student score
function sumScores(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total;
}
console.log(sumScores([10, 20, 30]));
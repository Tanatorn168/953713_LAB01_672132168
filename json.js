const object = {
    name: "John",
    age: 30,
    city:"New York"
}

//console.log(object)
console.log(object.name)
const jsonStr =JSON.stringify(object);
console.log(jsonStr)

//task 11.4
const studentInfo = (student) => {
    if (student.gpa > 2) {
        return JSON.stringify(student);
    }
    else {
        return `คุณ ${student.name} พ้นสภาพ`;
    }
}

const student = {
    name: "Tanatorn",
    surname: "Chairin",
    age: 26,
    gpa: 2.5
}

console.log(studentInfo(student))
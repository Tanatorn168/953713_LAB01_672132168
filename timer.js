let count = 1;
const waitAndPrint = () => {
    console.log("Hello " + "World".repeat(count));
    count++;
    setTimeout(waitAndPrint, 3000);
}

waitAndPrint();

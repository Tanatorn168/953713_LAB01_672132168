let Name = ['james', 'cameron', 'jonathan','david', 'alexander'];
for (let i = 0; i < Name.length; i++) {
    if (Name[i].length > 6) {
        console.log(`สวัสดีคุณ ${Name[i]}`);
    } 
    else {
        console.log(`Hello ${Name[i]}`);
    }
}
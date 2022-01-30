function printTable() {
for (let i = 1; i <= 10; i++) {
    console.log( num + '*' + i + '=' + num * i);
}

}

const num = prompt('Enter a number');

printTable(num);
const nim = "230411013";
const start = Number(nim.slice(-2));
const digitKetiga = Number(nim[nim.length - 3]);
const step = digitKetiga + 1;

let deret: number[] = [];

for (let i = 0; i < 10; i++) {
    deret.push(start + i * step);
}

console.log(deret.join(", "));
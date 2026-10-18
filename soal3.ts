const nim = "230411013";
const batas = Number(nim.slice(-2)) + 10;

let prima: number[] = [];

for (let angka = 2; angka <= batas; angka++) {
    let isPrima = true;

    for (let pembagi = 2; pembagi < angka; pembagi++) {
        if (angka % pembagi === 0) {
            isPrima = false;
            break;
        }
    }

    if (isPrima) {
        prima.push(angka);
    }
}

console.log(prima.join(", "));
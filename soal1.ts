const nim = "230411013";
const tinggi = Number(nim[nim.length - 1]);

for (let i = 1; i <= tinggi; i++) {
    let baris = "";

    for (let j = 1; j <= i; j++) {
        baris += j + " ";
    }

    console.log(baris.trim());
}
const produk ={
    nama : 'Laptop Gaming',
    merk : 'TechBrand',
    harga : 12500000,
    stok : 15,
    garansi : '1 tahun',
};

const { nama, harga, stok} = produk;
console.log('=== Object Destructuring ===');
console.log(`${nama} | Rp${harga.toLocaleString()} | Stok: ${stok}`);

const { warna = 'Tidak diketahui', stok: jumlahStok = 0 } = produk;
console.log(`warna : ${warna} | Stok: ${jumlahStok}`);

const koordinat = [10,25,5];
const [x, y, z] = koordinat;
console.log('\n=== Array Destructuring ===');
console.log(`x=${x}, y=${y}, z=${z}`);

const [,kedua,,] = [100, 200, 300, 400];
console.log('Elemen kedua:', kedua);

const buah =['Apel', 'Mangga', 'Jeruk'];
const sayur =['Bayam', 'Wortel'];

const salinBuah = [...buah];
salinBuah.push('Pisang');

console.log('\n=== Spread Operator ===');
console.log('Asli :', buah);
console.log('Salinan:', salinBuah);

const semuaMakanan = [...buah, ...sayur, 'Tempe'];
console.log('Gabungan:', semuaMakanan);

const profil = {nama : 'Siti', umur : 22, kota : 'Jakarta'};
const profilUpdate = {...profil, kota: 'Bandung', pekerjaan : 'Developer'};

console.log('Profil asli :', profil);
console.log('Profil update:', profilUpdate);

function jumlahSemua(...angka) {
    console.log('Argumen diterima:', angka);
    return angka.reduce((total, n) => total + n, 0);
}

console.log('\n=== Rest parameter ===');
console.log('Total :', jumlahSemua(1,2,3));
console.log('Total :', jumlahSemua(10,20,30,40,50));

const [kepala,...ekor] = [1,2,3,4,5];
console.log('kepala:', kepala);
console.log('Ekor :', ekor);

// 2. Class Stack
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// 3. Function cekKurungSeimbang
function cekKurungSeimbang(ekspresi) {
    const stack = new Stack();

    for (let i = 0; i < ekspresi.length; i++) {
        let char = ekspresi[i];

        if (char === '(') {
            stack.push(char);
        } 
        else if (char === ')') {
            if (stack.isEmpty()) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.isEmpty();
}

// 4–9. Pengujian
const test = [
    "(2 + 3) * (4 - 1)",
    "((a + b)",
    ")(",
    "((()))",
    "(a+(b*c)-(d/e))"
];

test.forEach(item => {
    console.log(`'${item}' → Seimbang: ${cekKurungSeimbang(item)}`);
});
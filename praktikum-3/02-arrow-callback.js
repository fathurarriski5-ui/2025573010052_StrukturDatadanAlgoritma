//02-arrow-callback.js
function kuadratBiasa(x) {
    return x * x;
}
const kuadrat = (x) => {
    return x * x;
}
const kuadratRingkas = x => x * x;
console.log('=== Perbandingan Penulisan ===');
console.log('Biasa      :',kuadratBiasa(5));
console.log('Arrow      :',kuadrat(5));
console.log('Ringkas    :',kuadratRingkas(5));

const luas = (panjang, lebar) => panjang * lebar;
const salam = (nama,waktu) => 'Selamat ${waktu}, ${nama}!';

console.log('Luas 4x6 :', luas(4, 6));
console.log(salam('Budi', 'Pagi'));

function lakukanOperasi(angka, operasiCallback) {
    console.log('Angka awal : ${angka}');
    const hasil = operasiCallback(angka);
    console.log('Hasil setelah operasi : ${hasil}');

}
console.log('\n===Callback ===');
lakukanOperasi(7, kuadratRingkas);
lakukanOperasi(10, x => x + 100);
lakukanOperasi(20, function(x) {
    return x / 2;
});
console.log('\n=== setTimeout (Callabck) ===');
console.log('Pesan 1: Sebelum timer');

setTimeout(() => {
    console.log('pesan 3: Ini dari dalam setTimeout (setelah 1 setik)');
}, 1000);
console.log('pesan 2: setelah mendaftarkan timer');

//--- tugas ---

const keHurufBesar = teks => teks.toUpperCase();

const tambahSeru = teks => teks + "!!!";

const hitungKata = teks => teks.split(' ').length;

function prosesKalimat(kalimat, transformasiCallback) {
    const hasil = transformasiCallback(kalimat);
    console.log('Hasil:', hasil);
}
console.log('\n=== Proses Kalimat ===');

prosesKalimat('belajar javascript itu menyenangkan', keHurufBesar);
prosesKalimat('belajar javascript itu menyenangkan', tambahSeru);
prosesKalimat('belajar javascript itu menyenangkan', hitungKata);
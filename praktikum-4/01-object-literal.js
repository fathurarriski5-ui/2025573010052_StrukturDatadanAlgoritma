const mahasiswa ={
    nama : 'Budi Santoso',
    umur : 20,
    jurusan : 'Teknik Informatika',
    ipk : 3.75,
    aktif : true,
};

console.log('=== Akses Property ===');
console.log('Nama   :', mahasiswa.nama);
console.log('Jurusan :', mahasiswa['jurusan']);

const keyYangDicari = 'ipk';
console.log('IPK      :', mahasiswa[keyYangDicari]);

mahasiswa.email = 'budi@email.com';
mahasiswa.umur = 21;

console.log('\nSetelah diubah:', mahasiswa);

delete mahasiswa.aktif;
console.log('Setelah delete:', mahasiswa);

const dosen ={
    nama   : 'Dr. Ahmad Fauzi',
    matakuliah : 'Struktur Data',
    pengalaman : 10,

    perkenalan() {
        return `Halo, saya ${this.nama}, mengajar ${this.matakuliah}.`;
    },

    statusSenior(){
        if (this.pengalaman >= 10) {
            return `${this.nama} adalah dosen senior.`;
        }
        return `${this.nama} adalah dosen junior.`;
    }
};

console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

console.log('\n=== Iterasi Object ===');
for (const key in dosen) {
    if (typeof dosen[key] !== 'function') {
        console.log(`${key}: ${dosen[key]}`);
    }
}

console.log('keys :', Object.keys(mahasiswa));
console.log('Value:', Object.values(mahasiswa));

class Produk {
    constructor(id, nama, harga, stok) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    info() {
        console.log(`ID: ${this.id}`);
        console.log(`Nama: ${this.nama}`);
        console.log(`Harga: Rp${this.harga}`);
        console.log(`Stok: ${this.stok}`);
    }

    tersedia() {
        return this.stok > 0;
    }

    jual(jumlah) {
        if (jumlah <= this.stok) {
            this.stok -= jumlah;
            console.log(`${jumlah} ${this.nama} terjual. Sisa stok: ${this.stok}`);
        } else {
            console.log(`Stok ${this.nama} tidak mencukupi!`);
        }
    }
}

// 3. Child class ProdukDigital
class ProdukDigital extends Produk {
    constructor(id, nama, harga, stok, ukuranFile, formatFile) {
        super(id, nama, harga, stok);
        this.ukuranFile = ukuranFile;
        this.formatFile = formatFile;
    }

    info() {
        super.info();
        console.log(`Ukuran File: ${this.ukuranFile} MB`);
        console.log(`Format File: ${this.formatFile}`);
        console.log(`Jenis: Produk Digital`);
        console.log("---------------------------");
    }

    download() {
        console.log(`Downloading ${this.nama}...`);
    }

    // override jual (tidak mengurangi stok)
    jual() {
        console.log(`${this.nama} adalah produk digital, stok tidak berkurang.`);
    }
}

// 4. Child class ProdukFisik
class ProdukFisik extends Produk {
    constructor(id, nama, harga, stok, beratGram, dimensi) {
        super(id, nama, harga, stok);
        this.beratGram = beratGram;
        this.dimensi = dimensi;
    }

    info() {
        super.info();
        console.log(`Berat: ${this.beratGram} gram`);
        console.log(`Dimensi: ${this.dimensi}`);
        console.log(`Jenis: Produk Fisik`);
        console.log("---------------------------");
    }

    hitungOngkir(tarifPerKg) {
        let beratKg = this.beratGram / 1000;
        return beratKg * tarifPerKg;
    }
}

// 5. Minimal 2 instance tiap child class
const produk1 = new ProdukDigital(1, "Ebook JavaScript", 50000, 999, 15, "PDF");
const produk2 = new ProdukDigital(2, "Template Website", 75000, 999, 25, "ZIP");

const produk3 = new ProdukFisik(3, "Mouse Gaming", 150000, 10, 300, "10x5x3 cm");
const produk4 = new ProdukFisik(4, "Keyboard Mechanical", 450000, 5, 800, "45x15x4 cm");

// Array daftarProduk
const daftarProduk = [produk1, produk2, produk3, produk4];

// 6a. menampilkan semua info produk
console.log("=== Semua Produk ===");
daftarProduk.forEach(p => p.info());

// 6b. mendapatkan produk yang tersedia
console.log("=== Produk Tersedia ===");
const produkTersedia = daftarProduk.filter(p => p.tersedia());
produkTersedia.forEach(p => console.log(p.nama));

// 6c. mendapatkan array nama produk saja
console.log("=== Nama Produk ===");
const namaProduk = daftarProduk.map(p => p.nama);
console.log(namaProduk);

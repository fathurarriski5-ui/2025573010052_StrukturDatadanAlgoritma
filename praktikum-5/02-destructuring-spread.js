// Contoh konkret setiap kelas kompleksitas Big O

// ─── O(1) — Konstan ───────────────────────────────────
function ambilPertama(arr) { return arr[0]; }
function tambahkanItem(arr, item) { arr.push(item); }
function isGenap(n) { return n % 2 === 0; }

// ─── O(log n) — Logaritmik ────────────────────────────
function binarySearch(arr, target) {
    let kiri = 0, kanan = arr.length - 1;
    let langkah = 0;

    while (kiri <= kanan) {
        langkah++;
        const tengah = Math.floor((kiri + kanan) / 2);

        if (arr[tengah] === target) {
            console.log(`Ditemukan di indeks ${tengah} setelah ${langkah} langkah`);
            return tengah;
        }

        if (arr[tengah] < target) kiri = tengah + 1;
        else kanan = tengah - 1;
    }

    return -1;
}

// ─── O(n) — Linear ───────────────────────────────────
function cariMax(arr) {
    let maks = arr[0];
    for (const x of arr) {
        if (x > maks) maks = x;
    }
    return maks;
}

// ─── O(n²) — Kuadratik ───────────────────────────────
function bubbleSortNaif(arr) {
    const a = [...arr];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j+1]) {
                [a[j], a[j+1]] = [a[j+1], a[j]];
            }
        }
    }
    return a;
}

// ─── O(2ⁿ) — Eksponensial ────────────────────────────
function fibRekursif(n) {
    if (n <= 1) return n;
    return fibRekursif(n-1) + fibRekursif(n-2);
}

// ── Demonstrasi ──────────────────────────────────────
console.log('=== O(1) — selalu cepat ===');
console.log(ambilPertama([10,20,30,40,50]));
console.log(isGenap(42));

console.log('\n=== O(log n) — Binary Search ===');
const sorted = Array.from({length:100000}, (_,i)=>i);
binarySearch(sorted, 73452);

console.log('\n=== O(n) — Linear ===');
console.log('Max:',
    cariMax(Array.from({length:1000},()=>Math.random()*1000|0))
);

console.log('\n=== O(n²) — Bubble Sort ===');
console.log(bubbleSortNaif([64,34,25,12,22,11,90]));

console.log('\n=== O(2ⁿ) — Fibonacci Rekursif ===');
for (let i = 0; i <= 10; i++) {
    process.stdout.write(fibRekursif(i) + ' ');
}
console.log();

// Perbandingan waktu
console.log('\nWaktu fib(35) O(2ⁿ):');
let t = Date.now();
fibRekursif(35);
console.log(Date.now()-t, 'ms');

// Memoization (lebih cepat)
console.log('Waktu fib(35) O(n) memoization:');
const memo = {};
function fibMemo(n) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    return memo[n] = fibMemo(n-1) + fibMemo(n-2);
}

t = Date.now();
fibMemo(35);
console.log(Date.now()-t, 'ms');

// Fungsi A
function fnA(n) {
    return n * 2;
}

// Fungsi B
function fnB(n) {
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            // console.log(i,j); // dimatikan biar tidak berat
        }
    }
}

// Fungsi C
function fnC(n) {
    for (let i=1; i<n; i*=2) {
        // console.log(i);
    }
}

// Fungsi D
function fnD(n) {
    const arr = Array.from({length:n}, (_,i)=>i);

    arr.forEach(x => {
        arr.forEach(y => {
            arr.forEach(z => {
                // console.log(x,y,z);
            });
        });
    });
}

// Function untuk ukur waktu
function hitungKompleksitas(n, fn, nama) {
    const start = Date.now();
    fn(n);
    const end = Date.now();

    console.log(`${nama} (n=${n}) → waktu: ${end - start} ms`);
}

// Jalankan
const n = 1000;

console.log("=== Uji Kompleksitas ===");

hitungKompleksitas(n, fnA, "O(1)");
hitungKompleksitas(n, fnC, "O(log n)");
hitungKompleksitas(n, fnB, "O(n^2)");

// ⚠️ hati-hati: ini berat!
hitungKompleksitas(100, fnD, "O(n^3)");
// 05-refactor.js — Refactoring kode berperforma buruk
// ═══════════════════════════════════════════════
// SKENARIO 1: Cek duplikat dalam array
// ═══════════════════════════════════════════════
// BURUK: O(n2) — nested loop
function adaDuplikatLambat(arr) {
for (let i = 0; i < arr.length; i++)
for (let j = i+1; j < arr.length; j++)
if (arr[i] === arr[j]) return true;
return false;
}
// BAIK: O(n) — gunakan Set
function adaDuplikatCepat(arr) {
const seen = new Set();
for (const x of arr) {
if (seen.has(x)) return true;
seen.add(x);
}
return false;
}
// ═══════════════════════════════════════════════
// SKENARIO 2: Frekuensi kemunculan elemen
// ═══════════════════════════════════════════════
// BURUK: O(n2) — indexOf di dalam loop
function frekuensiLambat(arr) {
const unik = [];
const hitung = [];
for (const x of arr) {
const idx = unik.indexOf(x); // O(n) di dalam loop O(n)
if (idx === -1) { unik.push(x); hitung.push(1); }
else hitung[idx]++;
}
return Object.fromEntries(unik.map((u,i) => [u, hitung[i]]));
}
// BAIK: O(n) — gunakan object/Map sebagai counter
function frekuensiCepat(arr) {
const counter = {};
for (const x of arr) counter[x] = (counter[x] || 0) + 1;
return counter;
}
// ── Benchmark ──────────────────────────────
const besar = Array.from({length: 20000}, () => Math.floor(Math.random() * 1000));
let t = Date.now();
adaDuplikatLambat(besar);
console.log('Duplikat LAMBAT O(n2):', Date.now()-t, 'ms');
t = Date.now();
adaDuplikatCepat(besar);
console.log('Duplikat CEPAT O(n) :', Date.now()-t, 'ms');
const kata = ['a','b','a','c','b','a','d'];
console.log('\nFrekuensi:', frekuensiCepat(kata));

// ======================================================
// TUGAS: Mencari pasangan angka = target
// ======================================================

// ─────────────────────────────────────────
// Fungsi 1: Lambat (Nested Loop)
// Time: O(n²), Space: O(1)
// ─────────────────────────────────────────
function cariPasanganLambat(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

// ─────────────────────────────────────────
// Fungsi 2: Cepat (Set)
// Time: O(n), Space: O(n)
// ─────────────────────────────────────────
function cariPasanganCepat(arr, target) {
    const seen = new Set();

    for (let num of arr) {
        let pasangan = target - num;

        if (seen.has(pasangan)) {
            return [pasangan, num];
        }

        seen.add(num);
    }

    return null;
}

// ======================================================
// UJI DATA KECIL
// ======================================================
const arr = [2, 7, 11, 15];
const target = 9;

console.log("=== Uji Kecil ===");
console.log("Lambat :", cariPasanganLambat(arr, target));
console.log("Cepat  :", cariPasanganCepat(arr, target));

// ======================================================
// FUNGSI UKUR WAKTU
// ======================================================
function ukurWaktu(fn, arr, target, nama) {
    const start = Date.now();
    const hasil = fn(arr, target);
    const end = Date.now();

    console.log(`${nama} → waktu: ${end - start} ms | hasil:`, hasil);
}

// ======================================================
// UJI DATA BESAR
// ======================================================
const besar = Array.from({ length: 50000 }, () => Math.floor(Math.random() * 100000));
const targetBesar = -1; 

console.log("\n=== Uji Besar (50.000 data) ===");


ukurWaktu(cariPasanganLambat, besar, targetBesar, "Lambat O(n²)");

ukurWaktu(cariPasanganCepat, besar, targetBesar, "Cepat O(n)");



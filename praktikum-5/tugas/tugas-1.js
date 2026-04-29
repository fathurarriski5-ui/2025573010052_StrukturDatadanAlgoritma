

// ======================================================
// FUNGSI A: INTERSECTION (irisan dua array)
// ======================================================

// Versi Lambat
// Time: O(n²), Space: O(1)
function intersectionLambat(a, b) {
    const hasil = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                hasil.push(a[i]);
                break;
            }
        }
    }
    return hasil;
}

// Versi Cepat (Set)
// Time: O(n), Space: O(n)
function intersectionCepat(a, b) {
    const setB = new Set(b);
    return a.filter(x => setB.has(x));
}


// ======================================================
// FUNGSI B: KELOMPOK ANAGRAM
// ======================================================

// Time: O(n * k log k)
// Space: O(n)
function kelompokAnagram(arr) {
    const map = {};

    for (let kata of arr) {
        let key = kata.split('').sort().join('');
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(kata);
    }

    return Object.values(map);
}


// ======================================================
// FUNGSI C: CEK a² + b² = c² (atau a+b = c² sesuai soal kamu)
// ======================================================

// Versi Lambat
// Time: O(n³), Space: O(1)
function cekKuadratLambat(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (arr[i] + arr[j] === arr[k] * arr[k]) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Versi Lebih Cepat (Sorting + Binary Search)
// Time: O(n log n), Space: O(1)
function cekKuadratCepat(arr) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let target = arr[i] + arr[j];

            // Binary Search untuk sqrt(target)
            let kiri = 0, kanan = arr.length - 1;
            while (kiri <= kanan) {
                let mid = Math.floor((kiri + kanan) / 2);
                let kuadrat = arr[mid] * arr[mid];

                if (kuadrat === target) return true;
                if (kuadrat < target) kiri = mid + 1;
                else kanan = mid - 1;
            }
        }
    }
    return false;
}


// ======================================================
// FUNGSI UKUR WAKTU
// ======================================================
function ukurWaktu(fn, ...args) {
    const start = Date.now();
    const hasil = fn(...args);
    const end = Date.now();
    return { waktu: end - start, hasil };
}


// ======================================================
// UJI DATA KECIL
// ======================================================
console.log("=== UJI DATA KECIL ===");

// Fungsi A
console.log("Intersection Lambat:", intersectionLambat([1,2,3,4], [3,4,5]));
console.log("Intersection Cepat :", intersectionCepat([1,2,3,4], [3,4,5]));

// Fungsi B
console.log("Anagram:",
    kelompokAnagram(['eat','tea','tan','ate','nat','bat'])
);

// Fungsi C
console.log("Kuadrat Lambat:", cekKuadratLambat([2,3,5]));
console.log("Kuadrat Cepat :", cekKuadratCepat([2,3,5]));


// ======================================================
// UJI DATA BESAR
// ======================================================
console.log("\n=== UJI DATA BESAR ===");

// Data besar
const besar = Array.from({length: 5000}, () => Math.floor(Math.random() * 1000));

// Fungsi A
console.log("\n-- Intersection --");
console.log("Lambat:", ukurWaktu(intersectionLambat, besar, besar));
console.log("Cepat :", ukurWaktu(intersectionCepat, besar, besar));

// Fungsi B
console.log("\n-- Anagram --");
const kataBesar = Array.from({length: 5000}, () => Math.random().toString(36).substring(2,6));
console.log("Anagram:", ukurWaktu(kelompokAnagram, kataBesar));

// Fungsi C
console.log("\n-- Kuadrat --");
console.log("Cepat :", ukurWaktu(cekKuadratCepat, besar.slice(0,1000)));


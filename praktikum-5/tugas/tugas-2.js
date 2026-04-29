// ======================================================
// PRAKTIKUM: Benchmark Kompleksitas Algoritma
// ======================================================

// ─────────────────────────────────────────
// O(1) — Konstan
// ─────────────────────────────────────────
function fn_O1(n) {
    return n + 1;
}

// ─────────────────────────────────────────
// O(n) — Linear
// ─────────────────────────────────────────
function fn_On(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += i;
    }
    return total;
}

// ─────────────────────────────────────────
// O(n log n)
// ─────────────────────────────────────────
function fn_OnLogn(n) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j *= 2) { 
            count++;
        }
    }

    return count;
}

// ─────────────────────────────────────────
// O(n²)
// ─────────────────────────────────────────
function fn_On2(n) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++;
        }
    }

    return count;
}

// ─────────────────────────────────────────
// Fungsi ukur waktu
// ─────────────────────────────────────────
function ukurWaktu(fn, n) {
    const start = Date.now();
    fn(n);
    const end = Date.now();
    return end - start;
}

// ─────────────────────────────────────────
// Benchmark semua fungsi
// ─────────────────────────────────────────
function benchmarkSemua(ukuranData) {
    console.log("=== HASIL BENCHMARK ===");

    ukuranData.forEach(n => {
        console.log(`\nUkuran data: ${n}`);

        console.log("O(1)     :", ukurWaktu(fn_O1, n), "ms");
        console.log("O(n)     :", ukurWaktu(fn_On, n), "ms");
        console.log("O(n log n):", ukurWaktu(fn_OnLogn, n), "ms");

        
        if (n <= 5000) {
            console.log("O(n²)    :", ukurWaktu(fn_On2, n), "ms");
        } else {
            console.log("O(n²)    : dilewati (terlalu berat)");
        }
    });
}

// ======================================================
// JALANKAN
// ======================================================
benchmarkSemua([100, 500, 1000, 5000, 10000]);



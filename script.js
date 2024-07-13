document.getElementById('quadratic-form').addEventListener('submit', function(event) {
    // Mencegah form dari pengiriman otomatis yang akan me-refresh halaman
    event.preventDefault();

    // Ambil nilai dari input dan ubah menjadi tipe angka (float)
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Periksa apakah nilai a, b, dan c adalah angka yang valid
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('result').innerText = 'Harap masukkan nilai yang valid untuk a, b, dan c.';
        return;
    }

    // Hitung diskriminan (D) menggunakan rumus D = b^2 - 4ac
    const discriminant = b * b - 4 * a * c;

    // Siapkan variabel untuk hasil
    let result;

    // Periksa nilai diskriminan untuk menentukan jenis akar
    if (discriminant > 0) {
        // Jika diskriminan positif, persamaan memiliki dua akar nyata yang berbeda
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = `Persamaan kuadrat dengan a=${a}, b=${b}, dan c=${c} memiliki dua akar nyata yang berbeda:\n` +
                 `Akar 1: ${root1}\nAkar 2: ${root2}\n` +
                 `Diskriminan: ${discriminant} (positif, dua akar nyata)`;
    } else if (discriminant === 0) {
        // Jika diskriminan nol, persamaan memiliki satu akar nyata (akar kembar)
        const root = -b / (2 * a);
        result = `Persamaan kuadrat dengan a=${a}, b=${b}, dan c=${c} memiliki satu akar nyata:\n` +
                 `Akar: ${root}\n` +
                 `Diskriminan: ${discriminant} (nol, satu akar nyata)`;
    } else {
        // Jika diskriminan negatif, persamaan tidak memiliki akar nyata (akar imajiner)
        result = `Persamaan kuadrat dengan a=${a}, b=${b}, dan c=${c} tidak memiliki akar nyata (akar imajiner).\n` +
                 `Diskriminan: ${discriminant} (negatif, tidak ada akar nyata)`;
    }

    // Tampilkan hasil perhitungan di elemen dengan id "result"
    document.getElementById('result').innerText = result;
});



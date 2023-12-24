function konversi() {
    // nilai mata uang asing
    var mataUangAsing = document.getElementById('mataUangAsing').value;

    // nilai mata uang asing yang dimasukkan oleh user
    var nilaiMataUangAsing = parseFloat(document.getElementById('nilaiMataUangAsing').value) || 0;

    //  nilai tukar valas
    var nilaiTukar = 0;
    switch (mataUangAsing) {
        case 'USD':
            nilaiTukar = 15580;
            break;
        case 'SGD':
            nilaiTukar = 11639;
            break;
        case 'MYR':
            nilaiTukar = 3339;
            break;
        case 'JPY':
            nilaiTukar = 129;
            break;
        case 'EUR':
            nilaiTukar = 17137;
            break;
        case 'SAR':
            nilaiTukar = 4147;
            break;
        default:
            nilaiTukar = 0;
            break;
    }

    // Hitung hasil konversi
    var hasilKonversi = nilaiMataUangAsing * nilaiTukar;

    // Tampilkan hasil konversi
    document.getElementById('hasilKonversi').value = hasilKonversi.toFixed(2);
}
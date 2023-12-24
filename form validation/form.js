
function validateForm() {
    // Reset errors
    clearErrors();
  
    // Get form values
    var namaPelanggan = document.getElementById('namaPelanggan').value;
    var email = document.getElementById('email').value;
    var jamKeberangkatan = document.getElementById('jamKeberangkatan').value;
    var tujuanKeberangkatan = document.getElementById('tujuanKeberangkatan').value;
    var jumlahTiket = document.getElementById('jumlahTiket').value;
  
    // Validation logic
    var isValid = true;
  
    if (namaPelanggan.length === 0 || namaPelanggan.length > 30) {
      isValid = false;
      document.getElementById('namaPelangganError').innerHTML = 'Nama Pelanggan harus diisi (maksimum 30 karakter).';
    }
  
    if (!isValidEmail(email)) {
      isValid = false;
      document.getElementById('emailError').innerHTML = 'Email harus diisi dengan format yang valid.';
    }
  
    if (!isValidJamKeberangkatan(jamKeberangkatan)) {
      isValid = false;
      document.getElementById('jamKeberangkatanError').innerHTML = 'Jam Keberangkatan harus diisi dengan format HH:mm (00:00 - 23:59).';
    }
  
    if (tujuanKeberangkatan.length === 0) {
      isValid = false;
      document.getElementById('tujuanKeberangkatanError').innerHTML = 'Tujuan Keberangkatan harus diisi.';
    }
  
    if (jumlahTiket < 1 || jumlahTiket > 10 || isNaN(jumlahTiket)) {
      isValid = false;
      document.getElementById('jumlahTiketError').innerHTML = 'Jumlah Tiket harus diisi dengan bilangan bulat antara 1 - 10.';
    }
  
    // Display result or errors
    if (isValid) {
      showResult(namaPelanggan, email, jamKeberangkatan, tujuanKeberangkatan, jumlahTiket);
    }
  }
  
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidJamKeberangkatan(jamKeberangkatan) {
    var jamRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return jamRegex.test(jamKeberangkatan);
  }
  
  function clearErrors() {
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].innerHTML = '';
    }
  }
  
  function showResult(namaPelanggan, email, jamKeberangkatan, tujuanKeberangkatan, jumlahTiket) {
    document.getElementById('resultNamaPelanggan').innerHTML = namaPelanggan;
    document.getElementById('resultEmail').innerHTML = email;
    document.getElementById('resultJamKeberangkatan').innerHTML = jamKeberangkatan;
    document.getElementById('resultTujuanKeberangkatan').innerHTML = tujuanKeberangkatan;
    document.getElementById('resultJumlahTiket').innerHTML = jumlahTiket;
  
    document.getElementById('result').style.display = 'block';
  }
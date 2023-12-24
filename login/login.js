function validateLogin() {
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    // Tentukan username dan password yang diharapkan
    var expectedUsername = 'pw2023';
    var expectedPassword = 'web123';

    // Lakukan pengecekan
    if (usernameInput === expectedUsername && passwordInput === expectedPassword) {
        // Jika login sukses, arahkan ke halaman baru dan tampilkan pesan
        alert('Login Sukses');
        window.location.href = 'hasil.html'; // Ganti dengan nama halaman yang sesuai
    } else {
        // Jika login gagal, tampilkan pesan
        alert('Login Gagal');
    }
}
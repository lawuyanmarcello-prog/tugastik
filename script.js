document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen dengan class whatsapp-link
    const wa = document.querySelector('.whatsapp-link'); 
    // Jika elemen tidak ada, hentikan eksekusi
    if (!wa) return;

    // Tambah event listener saat link diklik
    wa.addEventListener('click', function (e) {
        // Simpan nomor WhatsApp
        const numbers = '0882-9836-5247';
        // Tampilkan alert dengan nomor WhatsApp
        alert('Nomor WhatsApp  :\n' + numbers);
    });
});


// Ambil form login berdasarkan id
const form = document.getElementById('loginForm');
// Jika form ada, jalankan validasi
if (form) {
    // Tambah event saat form disubmit
    form.addEventListener('submit', function (e) { 
        // Cegah reload halaman default
        e.preventDefault();
        // Ambil elemen input email dan password
        const emailEl = form.querySelector('input[type="email"]');
        const passEl = form.querySelector('input[type="password"]'); 
        // Dapatkan nilai dari input dan hapus spasi
        const email = emailEl ? emailEl.value.trim() : '';
        const password = passEl ? passEl.value.trim() : '';

        // Validasi: email dan password harus ada
        if (!email || !password) {
            alert('Email dan Password harus diisi!');
            return;
        }

        // Validasi: email harus punya karakter @
        if (!/@/.test(email)) {
            alert('Email tidak valid!');
            return;
        }

        // Jika semua validasi berhasil, redirect ke halaman isi.html
        window.location.href = 'isi.html'; 
    });
}
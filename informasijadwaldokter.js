/**
 * LOGIKA INTERAKTIF - KLINIK SEHAT UMAT
 * Menangani pendaftaran antrian dan interaksi UI
 */

function sambutUser(event) {
    // 1. Mencegah halaman reload saat form dikirim
    event.preventDefault();

    // 2. Mengambil data dari input HTML
    const namaPasien = document.getElementById('nama_input').value;
    const waktuSekarang = new Number(new Date().getHours());
    
    // 3. Validasi sederhana
    if (namaPasien.trim() === "") {
        alert("Mohon masukkan nama lengkap Anda.");
        return;
    }

    // 4. Simulasi Nomor Antrian (Angka acak 1-20)
    const nomorAntrian = Math.floor(Math.random() * 20) + 1;
    
    // 5. Memberikan Feedback Visual pada Tombol
    const btn = event.target.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = "Memproses...";
    btn.style.opacity = "0.7";
    btn.disabled = true;

    // 6. Menampilkan Hasil setelah simulasi loading 1 detik
    setTimeout(() => {
        // Logika sapaan berdasarkan waktu
        let salam = "Selamat Malam";
        if (waktuSekarang < 12) salam = "Selamat Pagi";
        else if (waktuSekarang < 15) salam = "Selamat Siang";
        else if (waktuSekarang < 18) salam = "Selamat Sore";

        // Output pesan kepada pengguna
        alert(`${salam}, ${namaPasien}!\n\nPendaftaran Anda berhasil.\nNomor Antrian Anda: ${nomorAntrian}\nEstimasi tunggu: ${nomorAntrian * 5} menit.\n\nTerima kasih telah mempercayai Klinik Sehat Umat.`);
        
        // Mengembalikan tampilan tombol
        btn.innerText = originalText;
        btn.style.opacity = "1";
        btn.disabled = false;
        
        // Reset form setelah selesai
        document.forms['myForm'].reset();
    }, 1000);
}

// 7. Tambahan: Efek Interaktif pada kartu Poli saat diklik
document.querySelectorAll('.daftar_Unit li').forEach(item => {
    item.addEventListener('click', () => {
        const poliName = item.innerText.replace(/[^\w\s]/gi, '').trim();
        alert(`Anda memilih ${poliName}.\nSilakan menuju meja registrasi untuk informasi lebih lanjut.`);
    });
});
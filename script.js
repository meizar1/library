// Database buku lengkap dengan judul dan kode yang diberikan
const books = [
    // Karya Umum
    { title: "Karya Umum", code: "000" },
    { title: "Ilmu Umum dan Komputer", code: "000 - 009" },
    { title: "Bibliografi", code: "010 - 019" },
    { title: "Perpustakaan dan Ilmu Informasi", code: "020 - 029" },
    { title: "Ensiklopedia Umum", code: "030 - 039" },
    { title: "Terbitan Berseri/Berkala", code: "050 - 059" },
    { title: "Organisasi Umum dan Museum", code: "060 - 069" },
    { title: "Jurnalisme, Media Berita, dan Penerbitan", code: "070 - 079" },
    { title: "Kumpulan Karya Umum", code: "080 - 089" },
    { title: "Manuskrip, Naskah-naskah dan Buku-buku Langka", code: "090 - 099" },

    // Filsafat dan Psikologi
    { title: "Filsafat", code: "100 - 109" },
    { title: "Metafisika", code: "110 - 119" },
    { title: "Epistemologi, Hukum Sebab Akibat, Kemanusiaan", code: "120 - 129" },
    { title: "Fenomena Paranormal", code: "130 - 139" },
    { title: "Pandangan Filsafat Khusus", code: "140 - 149" },
    { title: "Psikologi", code: "150 - 159" },
    { title: "Logika", code: "160 - 169" },
    { title: "Etika dan Moral", code: "170 - 179" },
    { title: "Filsafat Kuno", code: "180 - 189" },
    { title: "Filsafat Barat Modern", code: "190 - 199" },

    // Agama
    { title: "Mitos Keagamaan, Teologi Sosial", code: "200 - 209" },
    { title: "Filsafat & Teori Agama", code: "210 - 219" },
    { title: "Alkitab", code: "220 - 229" },
    { title: "Teologi Kristen", code: "230 - 239" },
    { title: "Moral Kristen dan Teologi Kebaktian", code: "240 - 249" },
    { title: "Orde-orde Keagamaan dan Gereja Setempat", code: "250 - 259" },
    { title: "Teologi Sosial dan Eklesiastik Kristen", code: "260 - 269" },
    { title: "Sejarah Gereja", code: "270 - 279" },
    { title: "Denominasi dan Sekte-sekte Kristen", code: "280 - 289" },
    { title: "Agama Selain Kristen", code: "290 - 299" },
    { title: "Agama Islam (termasuk di dalamnya sosial, hukum, ekonomi, sejarah, dll.)", code: "297" },

    // Ilmu-ilmu Sosial
    { title: "Sosiologi dan Antropologi", code: "300 - 309" },
    { title: "Statistik Umum", code: "310 - 319" },
    { title: "Ilmu Politik dan Pemerintahan", code: "320 - 329" },
    { title: "Ekonomi", code: "330 - 339" },
    { title: "Hukum", code: "340 - 349" },
    { title: "Administrasi Negara dan Ilmu Kemiliteran", code: "350 - 359" },
    { title: "Permasalahan dan Kesejahteraan Sosial", code: "360 - 369" },
    { title: "Pendidikan", code: "370 - 379" },
    { title: "Perdagangan, Komunikasi, Transportasi", code: "380 - 389" },
    { title: "Adat Istiadat", code: "390 - 399" },

    // Bahasa
    { title: "Terminologi, Bilingual", code: "400 - 409" },
    { title: "Linguistik, Bahasa Indonesia", code: "410 - 419" },
    { title: "Bahasa Inggris", code: "420 - 429" },
    { title: "Bahasa Jerman", code: "430 - 439" },
    { title: "Bahasa Perancis", code: "440 - 449" },
    { title: "Bahasa Italia", code: "450 - 459" },
    { title: "Bahasa Spanyol dan Portugis", code: "460 - 469" },
    { title: "Bahasa Latin", code: "470 - 479" },
    { title: "Bahasa Yunani", code: "480 - 489" },
    { title: "Bahasa-bahasa Lain", code: "490 - 499" },

    // Ilmu Pengetahuan Alam dan Matematika
    { title: "Aneka Ragam tentang Ilmu Pengetahuan Alam", code: "500 - 509" },
    { title: "Matematika", code: "510 - 519" },
    { title: "Astronomi", code: "520 - 529" },
    { title: "Fisika", code: "530 - 539" },
    { title: "Kimia", code: "540 - 549" },
    { title: "Ilmu Bumi", code: "550 - 559" },
    { title: "Paleontologi, Paleozoologi", code: "560 - 569" },
    { title: "Biologi", code: "570 - 579" },
    { title: "Ilmu Tumbuhan, Ilmu Tanaman", code: "580 - 589" },
    { title: "Ilmu Hewan, Ilmu Binatang", code: "590 - 599" },

    // Teknologi dan Ilmu Terapan
    { title: "Aneka Ragam Teknologi dan Ilmu Terapan", code: "600 - 609" },
    { title: "Ilmu Kedokteran dan Ilmu Pengobatan", code: "610 - 619" },
    { title: "Ilmu Teknik dan Ilmu yang Berkaitan", code: "620 - 629" },
    { title: "Pertanian dan Teknologi yang Berkaitan", code: "630 - 639" },
    { title: "Kesejahteraan Rumah Tangga dan Kehidupan Keluarga", code: "640 - 649" },
    { title: "Manajemen dan Ilmu yang Berkaitan", code: "650 - 659" },
    { title: "Teknologi Kimia dan Ilmu yang Berkaitan", code: "660 - 669" },
    { title: "Pabrik-pabrik, Manufaktur", code: "670 - 679" },
    { title: "Produksi untuk Keperluan Khusus", code: "680 - 689" },
    { title: "Teknik Bangunan", code: "690 - 699" },

    // Seni, Hiburan, dan Olahraga
    { title: "Teori Kesenian", code: "700 - 709" },
    { title: "Seni Perkotaan dan Pertamanan", code: "710 - 719" },
    { title: "Arsitektur", code: "720 - 729" },
    { title: "Seni Plastik dan Seni Patung", code: "730 - 739" },
    { title: "Menggambar dan Seni Dekorasi", code: "740 - 749" },
    { title: "Seni Lukis dan Lukisan", code: "750 - 759" },
    { title: "Seni Grafika", code: "760 - 769" },
    { title: "Seni Fotografi dan Foto", code: "770 - 779" },
    { title: "Seni Musik", code: "780 - 789" },
    { title: "Olah Raga dan Seni Pertunjukan", code: "790 - 799" },

    // Sastra
    { title: "Teori Kesusastraan dan Retorika", code: "800 - 809" },
    { title: "Kesusastraan Indonesia", code: "810 - 819" },
    { title: "Kesusastraan Inggris", code: "820 - 829" },
    { title: "Kesusastraan Jerman", code: "830 - 839" },
    { title: "Kesusastraan Perancis", code: "840 - 849" },
    { title: "Kesusastraan Italia", code: "850 - 859" },
    { title: "Kesusastraan Spanyol dan Portugis", code: "860 - 869" },
    { title: "Kesusastraan Latin", code: "870 - 879" },
    { title: "Kesusastraan Yunani", code: "880 - 889" },
    { title: "Kesusastraan dalam Bahasa Lain", code: "890 - 899" },

    // Sejarah, Geografi, dan Biografi
    { title: "Geografi dan Pemetaan", code: "900 - 909" },
    { title: "Biografi dan Genealogi", code: "920 - 929" },
    { title: "Sejarah Dunia", code: "930 - 939" },
    { title: "Sejarah Eropa", code: "940 - 949" },
    { title: "Sejarah Asia", code: "950 - 959" },
    { title: "Sejarah Afrika", code: "960 - 969" },
    { title: "Sejarah Amerika Utara", code: "970 - 979" },
    { title: "Sejarah Amerika Selatan", code: "980 - 989" },
    { title: "Sejarah Bagian Lain", code: "990 - 999" }
];

document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil kata kunci dari input
    const keyword = document.getElementById('keyword').value.toLowerCase();
    
    // Filter buku berdasarkan kata kunci
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(keyword));

    // Kosongkan hasil sebelumnya
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';

    // Tampilkan hasil pencarian
    if (filteredBooks.length > 0) {
        filteredBooks.forEach(book => {
            const li = document.createElement('li');
            li.textContent = `${book.title} - Kode Buku: ${book.code}`;
            resultList.appendChild(li);
        });
    } else {
        resultList.innerHTML = '<li>Tidak ada buku yang ditemukan.</li>';
    }
});

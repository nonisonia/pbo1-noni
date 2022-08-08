let judul = document.getElementById("judulParagraf");
let body = document.querySelector("body");
let paragraf = document.getElementById("paragraf");
let judul2 = document.getElementById("judulParagraf2");
let paragraf2 = document.getElementById("paragraf2");
body.style.backgroundColor = "pink";


judul.innerHTML = "Apa Itu DOM";
paragraf.innerHTML = "Document Object Model adalah sebuah antarmuka pemrograman untuk HTML, XML dan SVG yang bersifat lintas platform dan language-independent. Sebuah peramban web tidak harus menggunakan DOM untuk menampilkan dokumen HTML. Namun DOM diperlukan oleh JavaScript yang akan mengubah tampilan sebuah situs web secara dinamis.";
judul2.innerHTML = "Belajar DOM";
paragraf2.innerHTML = "DOM Document adalah keseluruhan objek yang ada di laman web Anda. Jika Anda ingin mengakses objek apa pun di halaman web Anda, Anda harus selalu mulai dengan dokumen tersebut. Karena ada banyak properties dan method penting yang bisa Anda gunakan untuk mengakses dan memodifikasi situs web Anda.";

body.style.fontFamily = "Monospace";
body.style.textAlign = "center";
body.style.marginTop = "5%";
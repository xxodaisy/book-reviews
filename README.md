# Moon's Book Reviews 🌙

Website review buku pribadi. Dibangun dengan HTML, CSS, dan JavaScript murni — tanpa framework, tanpa build step.

## Cara deploy ke Vercel

### 1. Upload ke GitHub
1. Buat repo baru di [github.com](https://github.com) (klik tombol **+** → New repository)
2. Beri nama, misal: `book-reviews`
3. Upload semua file ini (drag & drop ke halaman repo)

### 2. Deploy ke Vercel
1. Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub
2. Klik **Add New Project**
3. Pilih repo `book-reviews` yang baru dibuat
4. Klik **Deploy** — selesai! 🎉

Website kamu akan langsung live di URL seperti `book-reviews.vercel.app`

---

## Cara tambah review baru

Buka file **`books.js`** dan salin blok ini, lalu isi datanya:

```js
{
  title: "Judul Buku",
  author: "Nama Penulis",
  pages: 300,
  source: "iPusnas",
  genres: ["fiction", "mystery"],
  rating: 4,          // 1-5, boleh pakai 0.5
  spoiler: true,      // true atau false
  category: "fiction", // "fiction" atau "nonfiction"
  color: "#4A7FA5",   // warna cover
  twitterLink: "https://t.co/xxxxx"
},
```

Setelah disimpan dan di-push ke GitHub, Vercel otomatis update websitenya.

---

## Struktur file

```
book-reviews/
├── index.html   → struktur halaman
├── style.css    → tampilan
├── app.js       → logika filter & search
└── books.js     → data semua review ← edit ini untuk tambah buku
```

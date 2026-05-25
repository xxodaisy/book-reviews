// =============================================
//  DATA BUKU — edit file ini untuk tambah review
//  Salin satu blok {} dan isi dengan data buku baru
//  Kolom "color" tidak perlu diisi — otomatis dari judul!
// =============================================

const books = [
  {
    title: "Seorang Pria yang Melalui Duka dengan Mencuci Piring",
    author: "dr. Andreas Kurniawan, Sp.KJ",
    pages: 212,
    source: "iPusnas",
    genres: ["non-fiction", "psychology", "self-help"],
    rating: 5,          // angka 1-5, boleh pakai 0.5 (contoh: 3.5)
    spoiler: true,      // true atau false
    category: "nonfiction", // "fiction" atau "nonfiction"
    twitterLink: "https://x.com/readbymoon/status/2058100914058371306?s=20",
    image: "https://pbs.twimg.com/media/HI_XsLtaEAERgai?format=jpg&name=medium"
  },
  {
    title: "Kesetiaan Mr X",
    author: "Keigo Higashino",
    pages: 324,
    source: "iPusnas",
    genres: ["fiction", "criminal", "thriller", "mystery"],
    rating: 5,
    spoiler: true,
    category: "fiction",
    twitterLink: "https://x.com/readbymoon/status/2058095385479204921?s=20",
    image: "https://pbs.twimg.com/media/HI_SHdLaoAAePTk?format=png&name=small"
  },
  {
    title: "The Newcomer - Pembunuhan di Nihonbashi",
    author: "Keigo Higashino",
    pages: 304,
    source: "iPusnas",
    genres: ["fiction", "criminal", "thriller", "mystery"],
    rating: 5,
    spoiler: true,
    category: "fiction",
    twitterLink: "https://x.com/readbymoon/status/2058086584847876392?s=20",
    image: "https://pbs.twimg.com/media/HI_H6MSaQAEn_oy?format=jpg&name=medium"
  },
  {
    title: "Catatan Pembunuhan sang Novelis (Akui—Malice)",
    author: "Keigo Higashino",
    pages: 308,
    source: "iBalikpapan",
    genres: ["fiction", "mystery", "suspense", "police prosedural"],
    rating: 4.5,
    spoiler: true,
    category: "fiction",
    twitterLink: "https://x.com/readbymoon/status/2047862194180939885?s=20",
    image: "https://pbs.twimg.com/media/HGt3zw1a8AAYMZ4?format=jpg&name=medium"
  },
  {
    title: "Keajaiban Toko Kelontong Namiya",
    author: "Keigo Higashino",
    pages: 398,
    source: "iPusnas",
    genres: ["fiction"],
    rating: 4,
    spoiler: true,
    category: "fiction",
    twitterLink: "https://x.com/readbymoon/status/2043946525571858772?s=20",
    image: "https://pbs.twimg.com/media/HF2ABs2bYAADWud?format=jpg&name=medium"
  },
];

const tbr = [
  {
    title: "Judul Buku",
    author: "Nama Author"
  },
  // tambah buku lainnya...
];

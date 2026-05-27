
# 🌐 IoT Campus Krisnadwipayana

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

> Website resmi komunitas IoT Campus Universitas Krisnadwipayana (UNKRIS) – tempat mahasiswa belajar, berkolaborasi, dan menciptakan proyek IoT & AI bersama 3 dosen pembimbing.

## 📌 Tentang Proyek

Website ini dibangun sebagai portal informasi dan rekrutmen untuk komunitas **IoT Campus Krisnadwipayana**. Menampilkan profil, kegiatan, struktur organisasi, galeri, dan tautan pendaftaran anggota melalui Google Form.

**Slogan:** *Fun, Serious, Research & Analysis*

## 🚀 Fitur Utama

- ✅ Halaman utama (Hero) dengan tombol **Bergabung Sekarang** menuju Google Form
- ✅ Navbar responsif dengan navigasi halus ke setiap section
- ✅ Struktur organisasi interaktif (kartu anggota, foto dapat diklik untuk popup)
- ✅ Galeri kegiatan dan dokumentasi
- ✅ Footer sederhana dengan logo, tautan, dan akun Instagram
- ✅ Favicon dan optimasi gambar menggunakan `next/image`
- ✅ Mobile-first & responsif dengan Tailwind CSS

## 🛠️ Teknologi yang Digunakan

- **Framework:** Next.js 15 (App Router)
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS + `cn()`
- **Ikon:** Lucide React
- **UI Komponen:** Shadcn/ui (Avatar, Badge, Button)
- **Font:** Google Fonts (Inter + Space Grotesk)
- **Manajemen State:** React Hooks (`useState`, `useEffect`)
- **Hosting:** (sesuaikan, misal: Vercel / Firebase)

## 📁 Struktur Folder

```
IOT-WEBSITE-MAIN/
├── public/
│   └── images/           # gambar statis (logo, foto anggota, favicon)
├── src/
│   ├── app/              # App Router (layout, page, globals.css)
│   ├── components/       # komponen reusable (layout, sections, ui)
│   ├── lib/              # utilities (placeholder-images.json, utils.ts)
│   └── hooks/            # custom hooks (jika ada)
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🧑‍💻 Cara Menjalankan di Lokal

1. **Clone repositori**
   ```bash
   git clone https://github.com/username/iot-campus-unkris.git
   cd iot-campus-unkris
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Jalankan server development**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. **Buka browser** di `http://localhost:3000`

## 🔧 Konfigurasi Penting

- **Google Form** – Ganti URL di komponen `Navbar` dan `Hero` (variabel `GOOGLE_FORM_URL`) dengan tautan formulir pendaftaran asli.
- **Placeholder Images** – Edit file `src/lib/placeholder-images.json` untuk menyesuaikan gambar (foto anggota, galeri, dll).
- **Favicon** – Pastikan file `logo.ico` atau `favicon.ico` berada di folder `public/`.
- **Logo navbar & footer** – Letakkan `logo.png` di `public/images/` dan sesuaikan path di komponen.

## 👥 Tim Pengembang

- Dibangun oleh tim IoT Campus Krisnadwipayana
- Dosen pembimbing: Pa Risanto, Pa Ali, Bu Mega

## 📄 Lisensi

Hak cipta © 2026 IoT Campus Krisnadwipayana – Universitas Krisnadwipayana.

---

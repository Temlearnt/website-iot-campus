import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <h2 className="text-6xl font-bold font-headline text-primary mb-4">404</h2>
      <h3 className="text-2xl font-bold mb-2">Halaman Tidak Ditemukan</h3>
      <p className="text-neutral-500 dark:text-neutral-400 max-w-md mb-6">
        Halaman yang Anda tuju tidak tersedia atau telah dipindahkan.
      </p>
      <Link href="/">
        <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-6">
          Kembali ke Beranda
        </Button>
      </Link>
    </div>
  );
}

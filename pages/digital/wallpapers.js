import Head from "next/head";

export default function DigitalWallpapers() {
  return (
    <div className="max-w-4xl mx-auto text-center my-6">
      <Head>
        <title>Wallpapers - Unconventionally Driven</title>
      </Head>
      <h1 className="text-gray-50 mb-8 text-4xl">Download your wallpaper</h1>
      <img
        src="/2021-SEMA-Mobile-Wallpaper-PORSCHE.jpg"
        alt="Porsche Mobile Wallpaper"
      />
    </div>
  );
}

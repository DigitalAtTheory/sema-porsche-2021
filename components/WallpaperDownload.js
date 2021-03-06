import Image from "next/image";
import Link from "next/link";
import phoneMockup from "../public/wallpaper-phone-porsche.png";

export default function WallpaperDownload({ wallpaperLink }) {
  return (
    <div className="text-center text-white px-4">
      <hr className="text-white my-16 w-1/2 mx-auto" />
      <h2 className="text-white mb-6 text-4xl">Download the Wallpaper</h2>
      <Image
        src={phoneMockup}
        placeholder="blur"
        priority
        alt="Picture of phone with porsche wallpaper"
      />
      <Link href={wallpaperLink}>
        <a className="bg-reflex-600 text-white w-3/4 lg:w-1/2 mx-auto mt-6 py-3 rounded shadow-xl block cursor-pointer">
          Click to Download
        </a>
      </Link>
      <hr className="text-white my-16 w-1/2 mx-auto" />
    </div>
  );
}

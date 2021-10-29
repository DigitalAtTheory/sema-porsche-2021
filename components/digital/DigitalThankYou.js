import Image from "next/image";
import confImage from "../../public/porsche-confirmation-headline.png";

export default function DigitalThankYou() {
  return (
    <div className="text-white text-center px-4 font-light mt-6">
      <Image
        src={confImage}
        placeholder="blur"
        priority
        loading="eager"
        alt="Porsche Sketch with text You're In"
      />
      <p className="my-6">
        Even though we missed you in-person, we wanted to leave you with a
        little something to feel like you were here with us. Snag the SEMA
        Show-exclusive wallpaper below, and check out some of the other content
        around this build below.
      </p>
      <p>
        Thanks for being unconventional, and stay tuned for more exclusive
        content from us and our partners like Luftgekühlt in the near future.
      </p>
    </div>
  );
}

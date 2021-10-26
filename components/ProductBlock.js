import Image from "next/image";

export default function ProductBlock() {
  return (
    <div>
      <hr className="text-white my-16 w-1/2 mx-auto" />
      <div className="text-center">
        <Image
          src="/bottle-porsche.png"
          width="1170px"
          height="868px"
          alt="Bottle of Mobil 1 oil"
        />
        <p className="text-white text-lg px-6 pt-6 font-light">
          {`More than 1,000,000 Porsche engines have been filled with Mobil 1 from
          day one. That includes the most powerful Porsche engines ever built.
          While the 914 isn't one of those engines, Mobil 1 V-Twin 20W-50 can
          help even the tiniest four-pot feel like the mightiest flat-six.`}
        </p>
      </div>
      <hr className="text-white my-16 w-1/2 mx-auto" />
    </div>
  );
}

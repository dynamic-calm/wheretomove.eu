import Link from "next/link";
import Image from "next/image";
import eurostat from "../../public/eurostat.png";

export default async function PoweredByEuroStat() {
  return (
    <div className="flex items-center justify-center">
      <p className="text-slate-500">Data powered by</p>
      <Link target="_blank" href="https://ec.europa.eu/eurostat">
        <Image
          src={eurostat}
          height={110}
          width={110}
          alt="eurostat logo"
          className=""
        />
      </Link>
    </div>
  );
}

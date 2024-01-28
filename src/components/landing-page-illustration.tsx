import Image from "next/image";
import whiteIllustration from "../../public/ilu-no-bg-black.png";
import blackIllustration from "../../public/ilu-no-bg-white.png";

export default function LandingPageIllustration() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <Image
        className="hidden w-auto dark:block"
        src={blackIllustration}
        alt="Person sitting next to window thinking"
        priority
        height={300}
        width={300}
      />
      <Image
        className="block w-auto dark:hidden"
        src={whiteIllustration}
        alt="Person sitting next to window thinking"
        priority
        height={300}
        width={300}
      />
    </div>
  );
}

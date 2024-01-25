import Image from "next/image";
import euLight from "../../public/eu-light.png";
import euDark from "../../public/eu-dark.png";
import ModeToggle from "./mode-toggle";

export default function Header() {
  return (
    <header>
      <div className="flex min-w-max items-center justify-between p-4">
        <div className="flex items-center">
          <Image
            className="hidden dark:block"
            src={euLight}
            priority
            height={40}
            width={40}
            alt="eu stars"
          />
          <Image
            className="block dark:hidden"
            src={euDark}
            priority
            height={40}
            width={40}
            alt="eu stars"
          />
          <h1 className="font-bold">wheretomove.eu</h1>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}

import Image from "next/image";
import euLight from "../../public/eu-light.png";
import euDark from "../../public/eu-dark.png";
import ModeToggle from "./mode-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex min-w-max cursor-pointer items-center justify-between p-4">
        <Link href="/">
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
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}

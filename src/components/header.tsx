import Image from "next/image";
import euLight from "../../public/eu-light.png";
import euDark from "../../public/eu-dark.png";
import ModeToggle from "./mode-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex w-screen items-center justify-between px-4 pb-0 pt-4">
        <Link href="/">
          <div className="flex cursor-pointer items-center ">
            <Image
              className="hidden w-auto dark:block"
              src={euLight}
              priority
              height={40}
              width={40}
              alt="eu stars"
            />
            <Image
              className="block w-auto dark:hidden"
              src={euDark}
              priority
              height={40}
              width={40}
              alt="eu stars"
            />
            <h1 className="pl-1 font-semibold text-lg">wheretomove.eu</h1>
          </div>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}

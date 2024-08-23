import Image from "next/image";
import euLight from "../../public/eu-light.png";
import euDark from "../../public/eu-dark.png";
import ModeToggle from "./mode-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="mx-auto w-screen max-w-6xl pb-6">
        <div className="flex items-center justify-between p-4">
          <Link href="/">
            <div className="flex cursor-pointer items-center">
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
              <h1 className="pl-1 text-lg font-semibold  text-neutral-950 dark:text-neutral-50 ">
                wheretomove.eu
              </h1>
            </div>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

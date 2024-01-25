import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="flex h-10 items-center justify-center">
      <div className="flex w-96 max-w-2xl items-center justify-center text-xl">
        <Link
          target="_blank"
          href="https://github.com/MateoPresaCastro/wheretomove.eu"
        >
          <Button variant="ghost">
            <FaGithub className="text-xl dark:text-neutral-500" />
          </Button>
        </Link>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="flex h-28 w-screen items-center justify-center">
      <div className="flex items-center justify-center">
        <Link
          target="_blank"
          href="https://github.com/MateoPresaCastro/wheretomove.eu"
        >
          <Button
            variant="link"
            size="sm"
            className="text-sm leading-tight tracking-tighter text-slate-400 dark:text-slate-500"
          >
            <FaGithub />
            <p className="pl-2">By Mateo Presa</p>
          </Button>
        </Link>
      </div>
    </footer>
  );
}

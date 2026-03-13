import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-foreground">
      <h1 className="text-4xl font-bold uppercase">404</h1>
      <p className="text-muted-foreground">This page does not exist.</p>
      <Button asChild className="transition-all duration-200 hover:scale-105">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  );
}

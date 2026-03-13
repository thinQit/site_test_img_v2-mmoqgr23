"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-foreground">
      <h1 className="text-3xl font-bold uppercase">Something went wrong</h1>
      <p className="text-muted-foreground">{error.message}</p>
      <Button onClick={reset} className="transition-all duration-200 hover:scale-105">
        Try Again
      </Button>
    </main>
  );
}

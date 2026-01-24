"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
            <p className="text-muted-foreground mb-6">
              We've been notified and are working to fix the issue.
            </p>
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

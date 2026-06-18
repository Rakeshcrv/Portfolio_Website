import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ServerCrash, ArrowLeft, RefreshCcw } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ServerCrash className="mx-auto h-20 w-20 text-[var(--cyan)]" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-6xl font-bold gradient-text"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-2xl font-semibold"
        >
          Deployment Failed 😅
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-4 max-w-lg text-muted-foreground"
        >
          Looks like this route isn't running in production.
          The requested resource could not be found.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--cyan)] to-[var(--violet)] px-5 py-3 font-medium text-background transition-transform hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" />
            Return Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 font-medium"
          >
            <RefreshCcw className="h-4 w-4" />
            Retry Request
          </button>
        </motion.div>

        <div className="mt-10 rounded-2xl glass p-4 font-mono text-sm text-muted-foreground">
          <div>$ curl https://portfolio.rakesh.dev/page</div>
          <div className="mt-2 text-red-400">
            Error 404: Resource not found
          </div>
        </div>
      </div>
    </div>
  );
}
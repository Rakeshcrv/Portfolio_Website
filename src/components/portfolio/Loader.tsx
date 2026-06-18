import { motion } from "framer-motion";

export function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="max-w-md font-mono text-sm">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-[var(--cyan)]">
            $ initializing infrastructure...
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-2 text-muted-foreground"
          >
            ✓ AWS services connected
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-2 text-muted-foreground"
          >
            ✓ Monitoring dashboards online
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-2 text-muted-foreground"
          >
            ✓ Deployment successful
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
            className="mt-5 h-1 rounded-full bg-gradient-to-r from-[var(--cyan)] to-[var(--violet)]"
          />
        </motion.div>
      </div>
    </div>
  );
}
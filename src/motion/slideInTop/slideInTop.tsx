'use client'

import { motion } from "framer-motion";

export function SlideInTop({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}
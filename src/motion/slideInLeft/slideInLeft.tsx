'use client'

import { motion } from "framer-motion";

export function SlideInLeft({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}
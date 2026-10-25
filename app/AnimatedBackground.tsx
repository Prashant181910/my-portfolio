"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
const particles = Array.from({ length: 18 }, (_, i) => ({
id: i,
left: "${(i * 37 + 11) % 100}%",
top: "${(i * 53 + 7) % 100}%",
duration: 5 + (i % 5),
delay: (i % 7) * 0.4,
}));

return (
<div
aria-hidden="true"
className="pointer-events-none fixed inset-0 -z-0 overflow-hidden"
>
<motion.div
className="absolute h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]"
animate={{
x: [0, 100, -50, 0],
y: [0, 70, 120, 0],
scale: [1, 1.2, 0.9, 1],
}}
transition={{
duration: 14,
repeat: Infinity,
ease: "easeInOut",
}}
style={{ left: "10%", top: "15%" }}
/>

  <motion.div
    className="absolute h-80 w-80 rounded-full bg-purple-600/15 blur-[110px]"
    animate={{
      x: [0, -100, 60, 0],
      y: [0, 100, -60, 0],
      scale: [1, 0.85, 1.15, 1],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{ right: "5%", bottom: "10%" }}
  />

  {particles.map((particle) => (
    <motion.div
      key={particle.id}
      className="absolute h-1.5 w-1.5 rounded-full bg-blue-300/70"
      style={{
        left: particle.left,
        top: particle.top,
      }}
      animate={{
        y: [0, -35, 0, 25, 0],
        x: [0, 15, -15, 0],
        opacity: [0.2, 0.9, 0.35, 0.8, 0.2],
      }}
      transition={{
        duration: particle.duration,
        delay: particle.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ))}
</div>

);
}
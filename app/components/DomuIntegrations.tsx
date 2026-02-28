"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";

// Each integration icon's position. 
// `top` and `left` are percentage-based positions on the full viewport.
// `cx` / `cy` are the icon center coordinates as percentages of the viewport (for converge animation).
const integrations = [
    { name: "NICE", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg", top: "15%", left: "18%", cx: 18.5, cy: 15.5, delay: 0 },
    { name: "Elementor", src: "https://cdn.simpleicons.org/elementor", top: "28%", left: "28%", cx: 28.5, cy: 28.5, delay: 0.1 },
    { name: "Salesforce", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2048px-Salesforce.com_logo.svg.png", top: "50%", left: "30%", cx: 30.5, cy: 50.5, delay: 0.2 },
    { name: "GPay", src: "https://cdn.simpleicons.org/googlepay", top: "72%", left: "28%", cx: 28.5, cy: 72.5, delay: 0.3 },
    { name: "Telegram", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png", top: "20%", left: "42%", cx: 42.5, cy: 20.5, delay: 0.15 },
    { name: "Google", src: "https://cdn.simpleicons.org/google", top: "18%", left: "55%", cx: 55.5, cy: 18.5, delay: 0.25 },
    { name: "Fiserv", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg", top: "75%", left: "50%", cx: 50.5, cy: 75.5, delay: 0.4 },
    { name: "Apple", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png", top: "15%", left: "72%", cx: 72.5, cy: 15.5, delay: 0.35 },
    { name: "Bootstrap", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png", top: "32%", left: "72%", cx: 72.5, cy: 32.5, delay: 0.45 },
    { name: "Zapier", src: "https://cdn.simpleicons.org/zapier", top: "70%", left: "71%", cx: 71.5, cy: 70.5, delay: 0.5 },
];

// SVG Lines that connect the center to the icons
const ConnectingLines = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <defs>
            <radialGradient id="line-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(1, 69, 242, 0.4)" />
                <stop offset="100%" stopColor="rgba(1, 69, 242, 0)" />
            </radialGradient>
        </defs>
        <g stroke="url(#line-gradient)" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.6">
            <path d="M 50% 50% Q 30% 20% 18% 15%" />
            <path d="M 50% 50% Q 40% 30% 28% 28%" />
            <path d="M 50% 50% Q 40% 50% 30% 50%" />
            <path d="M 50% 50% Q 35% 70% 28% 72%" />
            <path d="M 50% 50% Q 45% 30% 42% 20%" />
            <path d="M 50% 50% Q 55% 30% 55% 18%" />
            <path d="M 50% 50% Q 52% 70% 50% 75%" />
            <path d="M 50% 50% Q 65% 25% 72% 15%" />
            <path d="M 50% 50% Q 65% 40% 72% 32%" />
            <path d="M 50% 50% Q 65% 65% 71% 70%" />
        </g>
    </svg>
);

// A single icon that reads the scroll progress to move toward the center.
// cx/cy are percentages of the viewport where the icon starts.
// The center is at 50%, 50%. We compute the delta and animate it.
function ConvergingIcon({
    item,
    index,
    scrollYProgress,
}: {
    item: typeof integrations[0];
    index: number;
    scrollYProgress: MotionValue<number>;
}) {
    const deltaX = 50 - item.cx; // positive = needs to go right, negative = left
    const deltaY = 50 - item.cy; // positive = needs to go down, negative = up
    const translateXPx = useTransform(scrollYProgress, [0.05, 0.88], [0, deltaX * 8]);
    const translateYPx = useTransform(scrollYProgress, [0.05, 0.88], [0, deltaY * 5]);
    const iconOpacity = useTransform(scrollYProgress, [0.75, 0.92], [1, 0]);

    const tx = useSpring(translateXPx, { damping: 40, stiffness: 200 });
    const ty = useSpring(translateYPx, { damping: 40, stiffness: 200 });

    return (
        <motion.div
            className="absolute z-10 flex items-center justify-center bg-white rounded-[12px]"
            style={{
                top: item.top,
                left: item.left,
                width: "clamp(56px, 14vw, 101px)",
                height: "clamp(56px, 14vw, 101px)",
                boxShadow: "rgba(1, 69, 242, 0.04) -22px 23px 46.6px 0px",
                x: tx,
                y: ty,
                opacity: iconOpacity,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.6,
                delay: item.delay,
                type: "spring",
                bounce: 0.4
            }}
            whileHover={{
                scale: 1.05,
                boxShadow: "rgba(1, 69, 242, 0.12) -10px 15px 30px 0px",
                transition: { duration: 0.3 }
            }}
        >
            <motion.div
                animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                transition={{
                    duration: 4 + (index % 3),
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.2
                }}
                className="w-[60%] h-[60%] relative flex items-center justify-center"
            >
                <Image
                    src={item.src}
                    alt={item.name}
                    width={500}        // set appropriate width
                    height={500}       // set appropriate height
                    style={{ objectFit: "contain" }}
                />
            </motion.div>
        </motion.div>
    );
}

export default function DomuIntegrations() {
    const containerRef = useRef<HTMLElement>(null);

    // Track scroll through the pinning container (250vh so it pins for a long time)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // ENTRANCE: fade/scale center text in as it enters
    const enterScale = useTransform(scrollYProgress, [0, 0.1], [0.95, 1]);

    // Text stays fully visible while icons converge, fades out only near the very end
    const centerTextOpacity = useTransform(scrollYProgress, [0, 0.88, 0.96], [1, 1, 0]);

    // DOMU LOGO: fades in only after text is fully gone and icons are at center
    const logoOpacity = useTransform(scrollYProgress, [0.94, 1.0], [0, 1]);
    const logoScale = useTransform(scrollYProgress, [0.94, 1.0], [0.85, 1]);

    // Lines fade out as icons start converging
    const linesOpacity = useTransform(scrollYProgress, [0.45, 0.7], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[380vh] bg-[#eff4ff]"
        >
            {/* STICKY CONTAINER */}
            <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">

                {/* Lines fade out early */}
                <motion.div
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ opacity: linesOpacity }}
                >
                    <ConnectingLines />
                </motion.div>

                {/* Each icon independently converges to center */}
                {integrations.map((item, index) => (
                    <ConvergingIcon
                        key={index}
                        item={item}
                        index={index}
                        scrollYProgress={scrollYProgress}
                    />
                ))}

                {/* CENTER TEXT — scales in, then parallaxes UP */}
                <motion.div
                    className="relative z-20 flex flex-col items-center text-center px-6 max-w-2xl"
                    style={{
                        scale: enterScale,
                        opacity: centerTextOpacity,
                        // y: smoothParallax,
                        // frosted glass for readability on small screens where icons crowd center
                        backdropFilter: "blur(6px)",
                        WebkitBackdropFilter: "blur(6px)",
                        borderRadius: "16px",
                        padding: "16px 24px",
                    }}
                >
                    <h2
                        className="text-[36px] md:text-[54px] text-[#08144F] font-medium leading-[1.1] mb-8"
                        style={{ fontFamily: "var(--font-inter), sans-serif", letterSpacing: "-0.02em" }}
                    >
                        One platform,<br className="hidden md:block" />
                        unlimited integrations
                    </h2>

                    <a
                        href="#"
                        className="group relative z-0 inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#0145F2] px-6 py-3.5 text-white font-medium text-[15px] ring-2 ring-transparent hover:ring-[#0145F2] transition-shadow duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#0145F2]">
                            View all integrations
                            <span className="flex items-center justify-center w-[18px] h-[18px] bg-white rounded-full text-[#0145F2] transition-colors duration-300 group-hover:bg-[#0145F2] group-hover:text-white">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="rotate-[-45deg]">
                                    <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </span>
                        <span className="absolute inset-0 overflow-hidden rounded-lg">
                            <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150" />
                        </span>
                    </a>
                </motion.div>

                {/* DOMU LOGO fading in */}
                <motion.div
                    className="absolute z-30 flex items-center justify-center pointer-events-none"
                    style={{
                        opacity: logoOpacity,
                        scale: logoScale,
                        // y: smoothParallax,
                    }}
                >
                    <Image
                        src="/domu-logo.png"
                        alt="Domu Logo"
                        width={120}
                        height={80}
                        style={{ objectFit: "contain" }}
                    />
                </motion.div>
            </div>
        </section>
    );
}

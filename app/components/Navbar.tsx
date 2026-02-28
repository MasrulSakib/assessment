"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChargeflowLogo from "./ChargeflowLogo";
import ProductDropdown from "./ProductDropdown";
import CustomersDropdown from "./CustomersDropdown";
import IntegrationsDropdown from "./IntegrationsDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { ArrowUpIcon } from "lucide-react";

type DropdownType = "product" | "customers" | "integrations" | "resources" | "company" | null;

interface NavLinkDef {
    label: string;
    dropdown: DropdownType;
    href?: string;
}

const NAV_LINKS: NavLinkDef[] = [
    { label: "PRODUCT", dropdown: "product" },
    { label: "CUSTOMERS", dropdown: "customers" },
    { label: "PRICING", dropdown: null, href: "#" },
    { label: "INTEGRATIONS", dropdown: "integrations" },
    { label: "RESOURCES", dropdown: "resources" },
    { label: "COMPANY", dropdown: "company" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const clearCloseTimeout = useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    }, []);

    const openDropdown = useCallback((key: DropdownType) => {
        clearCloseTimeout();
        if (key) setActiveDropdown(key);
    }, [clearCloseTimeout]);

    const scheduleClose = useCallback(() => {
        clearCloseTimeout();
        closeTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
    }, [clearCloseTimeout]);

    const ArrowIcon = () => (
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="ml-1.5">
            <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Shared spring config for navbar morphing
    const SPRING = { type: "spring", damping: 28, stiffness: 180, mass: 0.8 } as const;

    return (
        <>
            {/*
              CHARGEFLOW-EXACT NAVBAR APPROACH:
              - ONE outer element that is always position:fixed, top: 8px, left/right: 0
              - Inside, a SINGLE "pill" div that morphs:
                  AT TOP:     width=100%, border-radius=0, background=transparent, padding=8px max-width-container
                  SCROLLED:   width=fit-content (auto), border-radius=100px, background=dark, padding tighter
              - No fading two separate elements — the outer container itself transforms
              - Logo and CTAs animate within the same container
            */}
            <nav
                ref={navRef}
                className="fixed z-50 flex justify-center"
                style={{
                    top: "8px",
                    left: 0,
                    right: 0,
                    pointerEvents: "none",
                }}
            >
                {/* ══════════════════════════════════════════════════════════
                    MOBILE layout — always static, no scroll animation
                ══════════════════════════════════════════════════════════ */}
                <motion.div
                    className="sm:hidden flex items-center relative"
                    animate={{
                        backgroundColor: scrolled ? "rgba(8, 8, 14, 0.85)" : "rgba(0,0,0,0)",
                        borderColor: scrolled ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0)",
                        paddingLeft: 16,
                        paddingRight: 16,
                    }}
                    transition={SPRING}
                    style={{
                        width: scrolled ? "calc(100% - 32px)" : "100%",
                        height: "52px",
                        pointerEvents: "auto",
                        borderRadius: scrolled ? "100px" : "0px",
                        borderWidth: 1,
                        borderStyle: "solid",
                        backdropFilter: scrolled ? "blur(20px) saturate(1.8)" : "none",
                        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.8)" : "none",
                    }}
                >
                    <Link href="/" className="flex-shrink-0 flex items-center">
                        <ChargeflowLogo color={scrolled ? "white" : "#08144F"} showText={!scrolled} />
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="flex items-center justify-center ml-auto"
                        aria-label="Open menu"
                        style={{
                            width: "32px",
                            height: "32px",
                        }}
                    >
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                            <line x1="1" y1="1" x2="19" y2="1" stroke={scrolled ? "white" : "#08144F"} strokeWidth="1.8" strokeLinecap="round" />
                            <line x1="1" y1="7" x2="19" y2="7" stroke={scrolled ? "white" : "#08144F"} strokeWidth="1.8" strokeLinecap="round" />
                            <line x1="1" y1="13" x2="19" y2="13" stroke={scrolled ? "white" : "#08144F"} strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                    </button>
                </motion.div>

                {/* ══════════════════════════════════════════════════════════
                    DESKTOP layout — morphing pill on scroll
                ══════════════════════════════════════════════════════════ */}
                <motion.div
                    className="hidden sm:flex items-center relative"
                    animate={{
                        borderRadius: scrolled ? 100 : 0,
                        backgroundColor: scrolled ? "rgba(8, 8, 14, 0.80)" : "rgba(0,0,0,0)",
                        borderColor: scrolled ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0)",
                        paddingLeft: scrolled ? 16 : 0,
                        paddingRight: scrolled ? 8 : 0,
                    }}
                    transition={SPRING}
                    style={{
                        width: scrolled ? "fit-content" : "calc(100% - 48px)",
                        maxWidth: scrolled ? "none" : "1400px",
                        height: "52px",
                        backdropFilter: scrolled ? "blur(20px) saturate(1.8)" : "none",
                        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.8)" : "none",
                        borderWidth: 1,
                        borderStyle: "solid",
                        pointerEvents: "auto",
                        overflow: "visible",
                    }}
                >
                    {/* ── LOGO ───────────────────────────────────────────────── */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <ChargeflowLogo color={scrolled ? "white" : "#08144F"} showText={!scrolled} />
                        </Link>
                    </div>
                    {/* Spacer: pushes nav links to center when not scrolled */}
                    {!scrolled && <div className="flex-1" />}

                    {/* ── CENTER NAV LINKS ──────────────────────────────────── */}
                    {/* Desktop only */}
                    <motion.div
                        className="hidden sm:flex items-center relative"
                        animate={{
                            backgroundColor: scrolled ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.04)",
                            borderColor: scrolled ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.07)",
                            paddingTop: scrolled ? 0 : 2,
                            paddingBottom: scrolled ? 0 : 2,
                            paddingLeft: scrolled ? 4 : 8,
                            paddingRight: scrolled ? 4 : 8,
                        }}
                        transition={SPRING}
                        style={{
                            borderRadius: "100px",
                            borderWidth: 1,
                            borderStyle: "solid",
                            gap: "2px",
                        }}
                    >
                        {NAV_LINKS.map((link) => {
                            const isActive = activeDropdown === link.dropdown && link.dropdown !== null;
                            return (
                                <div
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() => openDropdown(link.dropdown)}
                                    onMouseLeave={scheduleClose}
                                >
                                    <a
                                        href={link.href || "#"}
                                        className={`inline-flex items-center px-1.5 lg:px-3.5 py-1.5 lg:py-2 text-[9px] lg:text-[11px] font-semibold tracking-wider lg:tracking-[0.07em] uppercase whitespace-nowrap rounded-full transition-colors duration-150 ${isActive
                                            ? scrolled ? "bg-white/[0.10] text-white" : "bg-[#08144F]/[0.08] text-[#08144F]"
                                            : scrolled
                                                ? "text-white/55 hover:bg-white/[0.06] hover:text-white"
                                                : "text-[#08144F]/60 hover:bg-[#08144F]/[0.12] hover:text-[#08144F]"
                                            }`}
                                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                                    >
                                        {link.label}
                                    </a>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Dropdown panel — anchored to the outer pill so it's always viewport-centered */}
                    <AnimatePresence>
                        {activeDropdown && (
                            <motion.div
                                key="dropdown-wrapper"
                                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50"
                                style={{
                                    borderRadius: "16px",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    background: "rgba(8, 8, 14, 0.96)",
                                    backdropFilter: "blur(24px)",
                                    WebkitBackdropFilter: "blur(24px)",
                                    boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                                    overflow: "hidden",
                                }}
                                onMouseEnter={clearCloseTimeout}
                                onMouseLeave={scheduleClose}
                            >
                                <AnimatePresence mode="wait">
                                    {activeDropdown === "product" && (
                                        <motion.div key="product" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
                                            <ProductDropdown />
                                        </motion.div>
                                    )}
                                    {activeDropdown === "customers" && (
                                        <motion.div key="customers" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
                                            <CustomersDropdown />
                                        </motion.div>
                                    )}
                                    {activeDropdown === "integrations" && (
                                        <motion.div key="integrations" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
                                            <IntegrationsDropdown />
                                        </motion.div>
                                    )}
                                    {activeDropdown === "resources" && (
                                        <motion.div key="resources" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
                                            <ResourcesDropdown />
                                        </motion.div>
                                    )}
                                    {activeDropdown === "company" && (
                                        <motion.div key="company" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
                                            <CompanyDropdown />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Spacer: pushes CTA to the right when not scrolled */}
                    {!scrolled && <div className="flex-1" />}

                    {/* ── RIGHT CTA ─────────────────────────────────────────── */}
                    <motion.div
                        className="hidden sm:flex items-center flex-shrink-0"
                        animate={{
                            gap: scrolled ? 2 : 8,
                        }}
                        transition={SPRING}
                    >
                        <motion.div
                            animate={{
                                paddingTop: 8,
                                paddingBottom: 8,
                                paddingLeft: scrolled ? 12 : 0,
                                paddingRight: scrolled ? 12 : 0,
                            }}
                            transition={SPRING}
                        >
                            <Link
                                href="#"
                                className={`flex items-center text-[9px] lg:text-[12px] font-semibold uppercase tracking-wider transition-colors whitespace-nowrap ${scrolled ? "text-white/60 hover:text-white" : "text-[#08144F]/60 hover:text-[#08144F]"
                                    }`}
                            >
                                Sign In
                                <ArrowUpIcon className="rotate-45 size-4" />
                            </Link>
                        </motion.div>
                        <motion.div
                            animate={{
                                paddingTop: scrolled ? 6 : 8,
                                paddingBottom: scrolled ? 6 : 8,
                                paddingLeft: scrolled ? 12 : 16,
                                paddingRight: scrolled ? 12 : 16,
                            }}
                            transition={SPRING}
                            style={{ borderRadius: 9999, background: "#3448FF" }}
                        >
                            <Link
                                href="#"
                                className="flex items-center text-[9px] lg:text-[12px] font-semibold uppercase tracking-wider text-white hover:brightness-110 whitespace-nowrap"
                            >
                                {scrolled ? "Schedule a Demo" : "Sign Up"}
                                <ArrowUpIcon className="rotate-45 size-4" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

            </nav>

            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </>
    );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChargeflowLogo from "./ChargeflowLogo";

interface AccordionItem {
    title: string;
    hasChildren: boolean;
    children?: { title: string; description?: string }[];
}

const menuItems: AccordionItem[] = [
    {
        title: "PRODUCT",
        hasChildren: true,
        children: [
            { title: "Prevent", description: "Stop fraud before it happens" },
            { title: "Automation", description: "Automated chargeback recovery" },
            { title: "Alerts", description: "Real-time chargeback alerts" },
            { title: "Insights", description: "Payment analytics dashboard" },
            { title: "Connect", description: "Platform integrations" },
        ],
    },
    {
        title: "CUSTOMERS",
        hasChildren: true,
        children: [
            { title: "Case Studies" },
            { title: "Testimonials" },
            { title: "Success Stories" },
        ],
    },
    {
        title: "PRICING",
        hasChildren: false,
    },
    {
        title: "INTEGRATIONS",
        hasChildren: true,
        children: [
            { title: "Shopify" },
            { title: "WooCommerce" },
            { title: "Magento" },
            { title: "BigCommerce" },
        ],
    },
    {
        title: "RESOURCES",
        hasChildren: true,
        children: [
            { title: "Blog" },
            { title: "Documentation" },
            { title: "API Reference" },
            { title: "Webinars" },
            { title: "Help Center" },
        ],
    },
    {
        title: "COMPANY",
        hasChildren: true,
        children: [
            { title: "About" },
            { title: "Careers" },
            { title: "Partners" },
            { title: "Contact" },
        ],
    },
];

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const toggleItem = (title: string) => {
        setExpandedItem(expandedItem === title ? null : title);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] lg:hidden"
                >
                    {/* Backdrop blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="absolute right-0 top-0 h-full w-full max-w-[500px] overflow-y-auto"
                        style={{
                            background: "rgba(8, 8, 14, 0.92)",
                            backdropFilter: "blur(32px) saturate(1.6)",
                            WebkitBackdropFilter: "blur(32px) saturate(1.6)",
                            borderLeft: "1px solid rgba(255,255,255,0.07)",
                        }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-5">
                            <ChargeflowLogo color="white" />
                            <button
                                onClick={onClose}
                                className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                aria-label="Close menu"
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>

                        {/* CTA Buttons */}
                        <div className="px-5 pb-4 flex gap-3">
                            <a
                                href="#"
                                className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[13px] font-semibold uppercase tracking-wider rounded-full text-white/70 hover:text-white transition-colors"
                                style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}
                            >
                                Sign In
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[13px] font-semibold uppercase tracking-wider rounded-full text-white transition-all hover:brightness-110"
                                style={{ background: "#3448FF" }}
                            >
                                Schedule a Demo
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>

                        {/* Divider */}
                        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "0 20px 8px" }} />

                        {/* Menu Items */}
                        <div className="px-2">
                            {menuItems.map((item, index) => (
                                <div key={item.title}>
                                    {/* Diamond Separator */}
                                    <div className="diamond-separator py-1">
                                        <div className="diamond" />
                                        <div className="diamond" style={{ marginLeft: "auto", marginRight: 0 }} />
                                    </div>

                                    {/* Menu Item */}
                                    {item.hasChildren ? (
                                        <div>
                                            <button
                                                onClick={() => toggleItem(item.title)}
                                                className="w-full flex items-center justify-between px-4 py-4 text-left"
                                            >
                                                <span className="text-[13px] font-semibold tracking-wider text-white/80">
                                                    {item.title}
                                                </span>
                                                <motion.svg
                                                    animate={{ rotate: expandedItem === item.title ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M4 6L8 10L12 6"
                                                        stroke="rgba(255,255,255,0.3)"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </motion.svg>
                                            </button>

                                            <AnimatePresence>
                                                {expandedItem === item.title && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.25 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pb-3 pl-6 pr-4">
                                                            {item.children?.map((child) => (
                                                                <a
                                                                    key={child.title}
                                                                    href="#"
                                                                    className="block py-2.5 px-3 rounded-lg text-[13px] text-white/50 hover:text-white/90 hover:bg-white/[0.06] transition-colors"
                                                                >
                                                                    <span className="font-medium">{child.title}</span>
                                                                    {child.description && (
                                                                        <span className="block text-[11px] mt-0.5 text-white/28">
                                                                            {child.description}
                                                                        </span>
                                                                    )}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <a
                                            href="#"
                                            className="block px-4 py-4 text-[13px] font-semibold tracking-wider transition-colors"
                                            style={{ color: "rgba(255,255,255,0.8)" }}
                                        >
                                            {item.title}
                                        </a>
                                    )}

                                    {/* Last separator */}
                                    {index === menuItems.length - 1 && (
                                        <div className="diamond-separator py-1">
                                            <div className="diamond" />
                                            <div className="diamond" style={{ marginLeft: "auto", marginRight: 0 }} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

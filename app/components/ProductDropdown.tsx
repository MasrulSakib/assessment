"use client";

interface ProductItem {
    title: string;
    badge?: string;
    description: string;
    icon: React.ReactNode;
}

const products: ProductItem[] = [
    {
        title: "Prevent",
        badge: "NEW",
        description:
            "Stop friendly fraud, block digital shoplifters & prevent the next chargeback before it happens.",
        icon: (
            <svg viewBox="0 0 120 80" className="w-full h-full">
                <defs>
                    <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#3448FF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>
                <circle cx="60" cy="40" r="35" fill="url(#glow1)" />
                {Array.from({ length: 12 }).map((_, i) => (
                    <line
                        key={i}
                        x1="60"
                        y1="40"
                        x2={60 + 38 * Math.cos((i * 30 * Math.PI) / 180)}
                        y2={40 + 38 * Math.sin((i * 30 * Math.PI) / 180)}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="0.5"
                    />
                ))}
                <rect x="55" y="12" width="5" height="5" fill="rgba(255,255,255,0.15)" transform="rotate(45 57.5 14.5)" />
                <rect x="82" y="35" width="4" height="4" fill="rgba(255,255,255,0.1)" transform="rotate(45 84 37)" />
                <path d="M60 25 L72 32 L72 48 L60 55 L48 48 L48 32 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <circle cx="60" cy="40" r="8" fill="rgba(52, 72, 255, 0.4)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            </svg>
        ),
    },
    {
        title: "Automation",
        description: "Fully automated chargeback recovery with 4x ROI guarantee.",
        icon: (
            <svg viewBox="0 0 120 80" className="w-full h-full">
                <defs>
                    <radialGradient id="glow2" cx="50%" cy="60%" r="40%">
                        <stop offset="0%" stopColor="#3448FF" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>
                <rect x="0" y="0" width="120" height="80" fill="url(#glow2)" />
                <circle cx="60" cy="40" r="20" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 3" />
                <circle cx="60" cy="40" r="12" fill="rgba(52, 72, 255, 0.3)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <path d="M60 18 L63 24 L57 24 Z" fill="rgba(255,255,255,0.3)" />
                <path d="M80 40 L74 43 L74 37 Z" fill="rgba(255,255,255,0.3)" />
                <path d="M55 38 L58 42 L65 35" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Alerts",
        description: "Cut 90% of chargebacks before they happen, powered by Visa and Mastercard.",
        icon: (
            <svg viewBox="0 0 120 80" className="w-full h-full">
                <polyline points="10,60 30,50 50,55 70,30 90,35 110,20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 2" />
                <polyline points="10,65 30,58 50,60 70,42 90,45 110,30" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <circle cx="70" cy="30" r="3" fill="rgba(52, 72, 255, 0.6)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <line x1="10" y1="70" x2="110" y2="70" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <line x1="10" y1="50" x2="110" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <line x1="10" y1="30" x2="110" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            </svg>
        ),
    },
    {
        title: "Insights",
        badge: "FREE",
        description: "Get a bird's-eye view into your payments and chargebacks, all in a single, powerful dashboard.",
        icon: (
            <svg viewBox="0 0 120 80" className="w-full h-full">
                <defs>
                    <radialGradient id="glow4" cx="50%" cy="50%" r="40%">
                        <stop offset="0%" stopColor="#3448FF" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>
                <rect x="0" y="0" width="120" height="80" fill="url(#glow4)" />
                <circle cx="60" cy="40" r="22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                <circle cx="60" cy="40" r="22" fill="none" stroke="rgba(52, 72, 255, 0.5)" strokeWidth="6" strokeDasharray="50 88" strokeDashoffset="0" strokeLinecap="round" />
                <circle cx="60" cy="40" r="22" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="6" strokeDasharray="25 113" strokeDashoffset="-50" strokeLinecap="round" />
                <circle cx="60" cy="40" r="3" fill="rgba(255,255,255,0.3)" />
            </svg>
        ),
    },
    {
        title: "Connect",
        badge: "FOR PLATFORMS",
        description: "Integrate Chargeflow into your platform, either via Embedding, Whitelabel or API.",
        icon: (
            <svg viewBox="0 0 120 80" className="w-full h-full">
                <defs>
                    <radialGradient id="glow5" cx="50%" cy="50%" r="45%">
                        <stop offset="0%" stopColor="#3448FF" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>
                <rect x="0" y="0" width="120" height="80" fill="url(#glow5)" />
                <path d="M60 20 L85 33 L85 53 L60 66 L35 53 L35 33 Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <path d="M60 20 L85 33 L60 46 L35 33 Z" fill="rgba(52, 72, 255, 0.15)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <line x1="60" y1="46" x2="60" y2="66" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <path d="M52 35 C52 35 48 40 50 43 C52 46 56 44 56 44" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M68 45 C68 45 72 40 70 37 C68 34 64 36 64 36" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
];

export default function ProductDropdown() {
    return (
        <div
            className="grid grid-cols-5 gap-[1px]"
            style={{ width: "min(1100px, 88vw)" }}
        >
            {products.map((product) => (
                <a
                    key={product.title}
                    href="#"
                    className="group block p-5 transition-all duration-200 hover:bg-white/[0.05]"
                >
                    {/* Title + Badge */}
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-white text-[14px] font-semibold">
                            {product.title}
                        </h3>
                        {product.badge && (
                            <span
                                className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full"
                                style={{
                                    background: "rgba(255,255,255,0.1)",
                                    color: "rgba(255,255,255,0.6)",
                                }}
                            >
                                {product.badge}
                            </span>
                        )}
                    </div>
                    {/* Description */}
                    <p className="text-[12px] leading-[1.5] text-white/40 mb-4">
                        {product.description}
                    </p>
                    {/* Illustration */}
                    <div className="w-full h-20 rounded-lg overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        {product.icon}
                    </div>
                </a>
            ))}
        </div>
    );
}

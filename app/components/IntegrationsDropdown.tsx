"use client";

export default function IntegrationsDropdown() {
    return (
        <div
            style={{
                display: "flex",
                gap: "8px",
                padding: "12px",
                width: "min(820px, 90vw)",
            }}
        >
            {/* LEFT — All Integrations hero card (tall) */}
            <a
                href="#"
                className="group relative overflow-hidden flex-shrink-0"
                style={{
                    background: "#1a1a1a",
                    borderRadius: "14px",
                    width: "340px",
                    minHeight: "240px",
                    padding: "20px",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    transition: "background 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#232323"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1a1a"; }}
            >
                <p className="text-white font-semibold text-[15px] mb-1.5 relative z-10">All Integrations</p>
                <p className="text-white/50 text-[12px] leading-relaxed relative z-10" style={{ maxWidth: "180px" }}>
                    Choose from hundreds of integrated platforms.
                </p>
                {/* Orbital graphic — using actual chargeflow CDN image */}
                <div
                    className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none"
                    style={{ height: "72%" }}
                >
                    <img
                        src="https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/6977d79c4ff1e272f4eee850_navbar-integrations__dark.svg"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                </div>
                {/* Fallback orbital SVG */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg viewBox="0 0 260 200" fill="none" style={{ width: "240px", opacity: 0.25, marginTop: "40px" }}>
                        <circle cx="130" cy="110" r="50" stroke="white" strokeWidth="0.8" />
                        <circle cx="130" cy="110" r="35" stroke="white" strokeWidth="0.5" strokeDasharray="3 3" />
                        <circle cx="130" cy="110" r="20" stroke="white" strokeWidth="0.5" />
                        <circle cx="130" cy="110" r="10" fill="rgba(52,72,255,0.3)" stroke="rgba(52,72,255,0.5)" strokeWidth="1" />
                        {/* Orbiting icons */}
                        {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((a) => {
                            const rr = a % 3 === 0 ? 50 : a % 2 === 0 ? 35 : 25;
                            const rad = (a * Math.PI) / 180;
                            const x = 130 + rr * Math.cos(rad);
                            const y = 110 + rr * Math.sin(rad);
                            return <circle key={a} cx={x} cy={y} r="4" fill="white" opacity="0.5" stroke="#333" strokeWidth="0.5" />;
                        })}
                    </svg>
                </div>
            </a>

            {/* RIGHT — 3 stacked rows for each integration */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                }}
            >
                {[
                    {
                        name: "Stripe",
                        desc: "#1 Chargeback Solution for Stripe Merchants",
                        logo: "https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/66eafcf4b3c2e44a7aed4a1f_stripe-logo.svg",
                        fallback: "stripe",
                        fallbackStyle: { fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.75)" },
                    },
                    {
                        name: "Shopify",
                        desc: "Powering 30k+ Shopify Merchants",
                        logo: "https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/66eafcf4b3c2e44a7aed4a20_shopify-logo.svg",
                        fallback: "",
                        fallbackStyle: {},
                        shopifyIcon: true,
                    },
                    {
                        name: "WooCommerce",
                        desc: "Native WooCommerce Integration",
                        logo: "https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/66eafcf4b3c2e44a7aed4a21_woo-logo.svg",
                        fallback: "woo",
                        fallbackStyle: { fontSize: "22px", fontWeight: 900, letterSpacing: "-0.04em", color: "rgba(150,88,138,0.9)" },
                    },
                ].map((row) => (
                    <a
                        key={row.name}
                        href="#"
                        className="group relative overflow-hidden"
                        style={{
                            background: "#1a1a1a",
                            borderRadius: "14px",
                            padding: "16px 20px",
                            textDecoration: "none",
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#232323"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1a1a"; }}
                    >
                        <div>
                            <p className="text-white text-[14px] font-semibold">{row.name}</p>
                            <p className="text-white/40 text-[11px] mt-0.5">{row.desc}</p>
                        </div>
                        {/* Logo */}
                        <div className="flex-shrink-0 ml-4 flex items-center justify-center" style={{ minWidth: "60px" }}>
                            {row.shopifyIcon ? (
                                <svg width="32" height="36" viewBox="0 0 110 124" fill="none" opacity="0.85">
                                    <path d="M93.9 22c-.1-.6-.6-1-1.1-1s-9.8-.2-9.8-.2-7.8-7.5-8.6-8.3c-.8-.8-2.4-.6-3-.4l-4.4 1.4c-2.7-7.7-7.4-14.7-15.7-14.7H51c-2.4-1.2-4.4-.3-6.2 1.4C33 .8 27 16.4 24.9 24.5c-5.5 1.7-9.5 2.9-9.9 3C10.5 28.6 10.4 28.7 10.2 32.2L3 91l55.9 10.5 38.3-8.1L93.9 22z" fill="rgba(149,191,71,0.6)" />
                                    <path d="M83.8 21c-.5 0-9.8-.2-9.8-.2S66.2 13.3 65.4 12.5c-.3-.3-.7-.5-1.1-.5V101.5l38.3-8.1-6.7-71.4c-.1-.6-.6-1-1.1-1z" fill="rgba(100,140,50,0.4)" />
                                    <text x="55" y="72" textAnchor="middle" fill="white" fontSize="48" fontWeight="700" fontFamily="sans-serif" opacity="0.9">S</text>
                                </svg>
                            ) : (
                                <>
                                    <img
                                        src={row.logo}
                                        alt={row.name}
                                        style={{ height: "22px", width: "auto", maxWidth: "70px", objectFit: "contain" }}
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none";
                                            const next = e.currentTarget.nextElementSibling as HTMLElement;
                                            if (next) next.style.display = "block";
                                        }}
                                    />
                                    <span style={{ ...row.fallbackStyle, display: "none" }}>{row.fallback}</span>
                                </>
                            )}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

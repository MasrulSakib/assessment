"use client";

// Using actual chargeflow.io CDN images for pixel-perfect match
const customers = [
    {
        name: "obvi.",
        label: "eCommerce",
        img: "https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/66fbfbddee1cdb0413d23a8d_Frame%201362790318.avif",
    },
    {
        name: "elementor",
        label: "SaaS",
        img: "https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/66fbfbdd0c0f161bddef0041_Frame%201362790319.avif",
    },
    {
        name: "Fanatics",
        label: "Marketplace",
        img: "https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/691605f021971dff8d81da48_fanatics%20-%20dark.svg",
    },
    {
        name: "HEXCLAD",
        label: "eCommerce",
        img: "https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/66fbfbdd6261626046141b74_Frame%201362790321.avif",
    },
];

export default function CustomersDropdown() {
    return (
        <div style={{ width: "600px", padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {/* Top hero card — All Case Studies */}
            <a
                href="#"
                className="group relative overflow-hidden flex items-end"
                style={{
                    background: "#1a1a1a",
                    borderRadius: "14px",
                    padding: "20px",
                    minHeight: "100px",
                    textDecoration: "none",
                }}
            >
                <div style={{ zIndex: 10, position: "relative" }}>
                    <p className="text-white font-semibold text-[15px] mb-1">All Case Studies</p>
                    <p className="text-white/50 text-[12px]">See how top brands manage chargebacks.</p>
                </div>
                {/* Decorative SVG from chargeflow CDN */}
                <img
                    src="https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/68c29daf84f793bc1b4f5fb1_all-case-studies-menu-img.svg"
                    alt=""
                    className="absolute right-0 top-0 h-full object-cover opacity-70 pointer-events-none"
                    style={{ width: "auto" }}
                />
            </a>

            {/* 2x2 Grid of customer brand cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {customers.map((c) => (
                    <a
                        key={c.name}
                        href="#"
                        className="group relative overflow-hidden"
                        style={{
                            background: "#1a1a1a",
                            borderRadius: "14px",
                            minHeight: "120px",
                            textDecoration: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            padding: "16px",
                            transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#252525"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1a1a"; }}
                    >
                        {/* Brand image filling the card */}
                        <img
                            src={c.img}
                            alt={c.name}
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            style={{ borderRadius: "14px" }}
                        />
                        {/* Text overlay at bottom */}
                        <div className="relative z-10">
                            <p className="text-white font-semibold text-[13px]">{c.name}</p>
                            <p className="text-white/50 text-[11px]">{c.label}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

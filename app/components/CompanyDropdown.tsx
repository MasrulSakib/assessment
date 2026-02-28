"use client";

const gridItems = [
    {
        title: "Brand",
        img: "https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/6977db10d05d4869de61b7ad_navbar-comp-brand__dark.svg",
    },
    {
        title: "Careers",
        badge: "We're Hiring!",
        img: "https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/6977db10d05d4869de61b7ae_navbar-comp-careers__dark.svg",
    },
    {
        title: "Become a Partner",
        img: "https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/6977db10d05d4869de61b7af_navbar-comp-partner__dark.svg",
    },
    {
        title: "Contact Us",
        img: "https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/6977db10d05d4869de61b7b0_navbar-comp-contact__dark.svg",
    },
];

export default function CompanyDropdown() {
    return (
        <div
            style={{
                display: "flex",
                gap: "8px",
                padding: "12px",
                width: "min(820px, 90vw)",
            }}
        >
            {/* LEFT — Who We Are tall card */}
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
                <p className="text-white font-semibold text-[15px] mb-1.5 relative z-10">Who We Are</p>
                <p className="text-white/50 text-[12px] leading-relaxed relative z-10" style={{ maxWidth: "180px" }}>
                    The story behind the Chargeflow.
                </p>
                {/* Orbital ring illustration — chargeflow CDN */}
                <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{ paddingTop: "30px" }}
                >
                    <img
                        src="https://cdn.prod.website-files.com/66eafaec075d9e2e60131e26/6977da1baaae0e477e381257_navbar-comp-who__dark.svg"
                        alt=""
                        style={{ width: "85%", height: "auto", objectFit: "contain" }}
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                </div>
            </a>

            {/* RIGHT — 2×2 grid */}
            <div
                style={{
                    flex: 1,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridTemplateRows: "1fr 1fr",
                    gap: "8px",
                }}
            >
                {gridItems.map((item) => (
                    <a
                        key={item.title}
                        href="#"
                        className="group relative overflow-hidden"
                        style={{
                            background: "#1a1a1a",
                            borderRadius: "14px",
                            padding: "14px 16px",
                            textDecoration: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            minHeight: "110px",
                            transition: "background 0.15s",
                            position: "relative",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#232323"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1a1a"; }}
                    >
                        {/* Decorative SVG illustration fills the card background */}
                        <img
                            src={item.img}
                            alt=""
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "14px",
                                opacity: 0.85,
                            }}
                            onError={(e) => { e.currentTarget.style.display = "none"; }}
                        />
                        {/* Text at top-left */}
                        <div className="relative z-10 flex items-center gap-2 flex-wrap">
                            <p className="text-white text-[13px] font-semibold">{item.title}</p>
                            {item.badge && (
                                <span
                                    className="text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                                    style={{
                                        background: "rgba(52,72,255,0.25)",
                                        color: "rgba(180,190,255,0.95)",
                                        border: "1px solid rgba(52,72,255,0.4)",
                                    }}
                                >
                                    {item.badge}
                                </span>
                            )}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

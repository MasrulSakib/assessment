"use client";

interface ResourceItem {
    title: string;
    icon: React.ReactNode;
}

const resources: ResourceItem[] = [
    {
        title: "Blog",
        icon: (
            <svg viewBox="0 0 120 100" className="w-full h-full">
                <defs>
                    <radialGradient id="rg1" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>
                {/* Concentric circles - radar style */}
                <circle cx="60" cy="55" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                <circle cx="60" cy="55" r="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                <circle cx="60" cy="55" r="20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                {/* Radial lines */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <line key={i} x1="60" y1="55" x2={60 + 42 * Math.cos((i * 45 * Math.PI) / 180)} y2={55 + 42 * Math.sin((i * 45 * Math.PI) / 180)} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                ))}
                {/* Document icon */}
                <rect x="45" y="35" width="20" height="28" rx="2" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="50" y1="42" x2="60" y2="42" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <line x1="50" y1="47" x2="58" y2="47" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="50" y1="52" x2="55" y2="52" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </svg>
        ),
    },
    {
        title: "Reports",
        icon: (
            <svg viewBox="0 0 120 100" className="w-full h-full">
                <circle cx="60" cy="55" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                <circle cx="60" cy="55" r="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                <circle cx="60" cy="55" r="20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                {Array.from({ length: 8 }).map((_, i) => (
                    <line key={i} x1="60" y1="55" x2={60 + 42 * Math.cos((i * 45 * Math.PI) / 180)} y2={55 + 42 * Math.sin((i * 45 * Math.PI) / 180)} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                ))}
                {/* Stack of papers */}
                <rect x="42" y="37" width="22" height="28" rx="1" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <rect x="46" y="33" width="22" height="28" rx="1" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                <rect x="50" y="29" width="22" height="28" rx="1" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="55" y1="37" x2="67" y2="37" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
                <line x1="55" y1="42" x2="65" y2="42" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
            </svg>
        ),
    },
    {
        title: "Podcast",
        icon: (
            <svg viewBox="0 0 120 100" className="w-full h-full">
                <circle cx="60" cy="55" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                <circle cx="60" cy="55" r="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                <circle cx="60" cy="55" r="20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                {Array.from({ length: 8 }).map((_, i) => (
                    <line key={i} x1="60" y1="55" x2={60 + 42 * Math.cos((i * 45 * Math.PI) / 180)} y2={55 + 42 * Math.sin((i * 45 * Math.PI) / 180)} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                ))}
                {/* Sound wave bars */}
                {[40, 48, 56, 64, 72, 80].map((x, i) => {
                    const heights = [16, 24, 32, 28, 20, 14];
                    const h = heights[i];
                    return (
                        <rect key={i} x={x} y={55 - h / 2} width="4" height={h} rx="2" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
                    );
                })}
            </svg>
        ),
    },
    {
        title: "Webinars",
        icon: (
            <svg viewBox="0 0 120 100" className="w-full h-full">
                <circle cx="60" cy="55" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                <circle cx="60" cy="55" r="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                <circle cx="60" cy="55" r="20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                {Array.from({ length: 8 }).map((_, i) => (
                    <line key={i} x1="60" y1="55" x2={60 + 42 * Math.cos((i * 45 * Math.PI) / 180)} y2={55 + 42 * Math.sin((i * 45 * Math.PI) / 180)} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                ))}
                {/* Play button in circle */}
                <circle cx="60" cy="50" r="14" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <polygon points="56,43 56,57 68,50" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            </svg>
        ),
    },
];

const tools: { title: string; content: React.ReactNode }[] = [
    {
        title: "ROI Calculator",
        content: (
            <div className="space-y-2.5">
                <div className="flex items-center justify-between px-3 py-2 rounded-lg border border-white/[0.08] text-[11px]">
                    <span className="text-white/40">1,020</span>
                    <span className="text-white/60 font-medium uppercase text-[9px] tracking-wider bg-white/[0.06] px-2 py-0.5 rounded">Hours</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-lg border border-white/[0.08] text-[11px]">
                    <span className="text-white/40">$7,500</span>
                    <span className="text-white/60 font-medium uppercase text-[9px] tracking-wider bg-white/[0.06] px-2 py-0.5 rounded">USD</span>
                </div>
            </div>
        ),
    },
    {
        title: "Reason Codes",
        content: (
            <div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.08]">
                    <span className="text-white/30 text-[11px]">Enter Code: 12.7</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-auto">
                        <circle cx="6" cy="6" r="5" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                        <line x1="10" y1="10" x2="13" y2="13" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
        ),
    },
];

export default function ResourcesDropdown() {
    return (
        <div
            className="grid gap-[1px]"
            style={{
                width: "min(1100px, 88vw)",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 280px",
            }}
        >
            {/* Main resource cards */}
            {resources.map((item) => (
                <a
                    key={item.title}
                    href="#"
                    className="group block p-5 transition-all duration-200 hover:bg-white/[0.05]"
                >
                    <h4 className="text-white text-[14px] font-semibold mb-3">
                        {item.title}
                    </h4>
                    <div className="w-full h-[120px] rounded-lg overflow-hidden opacity-50 group-hover:opacity-80 transition-opacity duration-300">
                        {item.icon}
                    </div>
                </a>
            ))}

            {/* Right column — tools stacked */}
            <div className="flex flex-col gap-[1px]">
                {tools.map((tool) => (
                    <a
                        key={tool.title}
                        href="#"
                        className="group block p-5 transition-all duration-200 hover:bg-white/[0.05] flex-1"
                    >
                        <h4 className="text-white text-[14px] font-semibold mb-3">
                            {tool.title}
                        </h4>
                        {tool.content}
                    </a>
                ))}
            </div>
        </div>
    );
}
